// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupThemeSelector();
    setupSidebarToggle();
    buildNavigation();
    setupSearch();
    initializePDFResources();

    // Back to Resources button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', closePDFViewer);
    }
    
    // Ensure no PDF mode classes are active on initial load
    document.body.classList.remove('pdf-resources-active', 'pdf-viewer-active');
    
    // Update sidebar toggle position initially
    updateSidebarTogglePosition();
});

let currentLesson = null;

// Update sidebar toggle position based on state
function updateSidebarTogglePosition() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (!sidebarToggle || !sidebar) return;
    
    if (sidebar.classList.contains('collapsed')) {
        sidebarToggle.style.left = '1rem';
    } else {
        sidebarToggle.style.left = '21rem'; /* 320px sidebar width - 1rem */
    }
}

// PDF Resources functionality
let currentPDF = null;
let currentPage = 1;
let totalPages = 0;
let scale = 1.0;

function initializePDFResources() {
    // Set PDF.js worker
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
    
    renderPDFGrid();
    setupPDFFilters();
}

function renderPDFGrid() {
    const grid = document.getElementById('pdfGrid');
    if (!grid || typeof pdfResources === 'undefined') return;
    
    grid.innerHTML = pdfResources.map(pdf => `
        <div class="pdf-card" onclick="openPDF('${pdf.filename}', '${pdf.title}')">
            <h3>${pdf.title}</h3>
            <div class="pdf-author">by ${pdf.author}</div>
            <div class="pdf-meta">
                <span>${pdf.category}</span>
                <span>${pdf.pages} pages</span>
            </div>
            <div class="pdf-description">${pdf.description}</div>
            <div class="pdf-topics">
                ${pdf.topics.map(topic => `<span class="pdf-topic">${topic}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function setupPDFFilters() {
    const categoryFilter = document.getElementById('pdfCategoryFilter');
    const searchInput = document.getElementById('pdfSearchInput');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterPDFs);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterPDFs);
    }
}

function filterPDFs() {
    if (typeof pdfResources === 'undefined') return;
    
    const category = document.getElementById('pdfCategoryFilter')?.value || '';
    const search = document.getElementById('pdfSearchInput')?.value.toLowerCase() || '';
    
    const filtered = pdfResources.filter(pdf => {
        const matchesCategory = !category || pdf.category === category;
        const matchesSearch = !search || 
            pdf.title.toLowerCase().includes(search) ||
            pdf.description.toLowerCase().includes(search) ||
            pdf.topics.some(topic => topic.toLowerCase().includes(search));
        
        return matchesCategory && matchesSearch;
    });
    
    const grid = document.getElementById('pdfGrid');
    if (grid) {
        grid.innerHTML = filtered.map(pdf => `
            <div class="pdf-card" onclick="openPDF('${pdf.filename}', '${pdf.title}')">
                <h3>${pdf.title}</h3>
                <div class="pdf-author">by ${pdf.author}</div>
                <div class="pdf-meta">
                    <span>${pdf.category}</span>
                    <span>${pdf.pages} pages</span>
                </div>
                <div class="pdf-description">${pdf.description}</div>
                <div class="pdf-topics">
                    ${pdf.topics.map(topic => `<span class="pdf-topic">${topic}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

async function openPDF(filename, title) {
    if (typeof pdfjsLib === 'undefined') {
        alert('PDF viewer not available. Please refresh the page.');
        return;
    }
    
    try {
        document.getElementById('pdfResources').style.display = 'none';
        document.getElementById('pdfViewer').style.display = 'block';
        document.getElementById('pdfViewerTitle').textContent = title;
        
        // Hide sidebar and show PDF viewer mode
        document.body.classList.add('pdf-viewer-active');
        document.body.classList.remove('pdf-resources-active');
        
        // Hide the main app header
        document.querySelector('.app-header').style.display = 'none';
        
        const loadingTask = pdfjsLib.getDocument(filename);
        currentPDF = await loadingTask.promise;
        totalPages = currentPDF.numPages;
        currentPage = 1;
        
        renderPage(currentPage);
        updatePageInfo();
    } catch (error) {
        console.error('Error loading PDF:', error);
        alert('Error loading PDF file. Please check if the file exists.');
        closePDFViewer();
    }
}

async function renderPage(pageNum) {
    if (!currentPDF) return;
    
    try {
        const page = await currentPDF.getPage(pageNum);
        const canvas = document.getElementById('pdfCanvas');
        const context = canvas.getContext('2d');
        
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
    } catch (error) {
        console.error('Error rendering page:', error);
    }
}

function closePDFViewer() {
    document.getElementById('pdfViewer').style.display = 'none';
    document.getElementById('pdfResources').style.display = 'block';
    currentPDF = null;
    
    // Switch back to PDF resources mode (not viewer)
    document.body.classList.remove('pdf-viewer-active');
    document.body.classList.add('pdf-resources-active');
    
    // Show the main app header again
    document.querySelector('.app-header').style.display = 'flex';
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePageInfo();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updatePageInfo();
    }
}

function zoomIn() {
    scale += 0.2;
    renderPage(currentPage);
    updateZoomLevel();
}

function zoomOut() {
    if (scale > 0.4) {
        scale -= 0.2;
        renderPage(currentPage);
        updateZoomLevel();
    }
}

function updatePageInfo() {
    const pageInfo = document.getElementById('pageInfo');
    if (pageInfo) {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    }
}

function updateZoomLevel() {
    const zoomLevel = document.getElementById('zoomLevel');
    if (zoomLevel) {
        zoomLevel.textContent = `${Math.round(scale * 100)}%`;
    }
}

function addNewPDF() {
    const fileInput = document.getElementById('pdfFileInput');
    if (fileInput) {
        fileInput.click();
        fileInput.onchange = function(e) {
            const file = e.target.files[0];
            if (file && file.type === 'application/pdf') {
                alert(`PDF "${file.name}" selected. Upload functionality requires server implementation.`);
            }
        };
    }
}

function showPDFResources() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('lessonContent').style.display = 'none';
    document.getElementById('pdfResources').style.display = 'block';
    document.getElementById('pdfViewer').style.display = 'none';
    
    // Add class to body for PDF resources mode
    document.body.classList.add('pdf-resources-active');
    document.body.classList.remove('pdf-viewer-active');
    
    // Ensure app header is visible
    document.querySelector('.app-header').style.display = 'flex';
}

// Sidebar toggle functionality
function setupSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const contentArea = document.querySelector('.content-area');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        contentArea.classList.toggle('sidebar-collapsed');
        updateSidebarTogglePosition();
    });
}

// Theme selector functionality
function setupThemeSelector() {
    const themeSelector = document.getElementById('themeSelector');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('selectedTheme') || 'seniva';
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
    
    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        applyTheme(selectedTheme);
        localStorage.setItem('selectedTheme', selectedTheme);
    });
}

function applyTheme(theme) {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('theme-seniva', 'theme-cobalt');
    
    // Apply new theme
    body.classList.add(`theme-${theme}`);
}

// Build navigation sidebar
function buildNavigation() {
    const nav = document.getElementById('lessonNav');
    
    // Add PDF Resources section at the top
    const pdfSection = document.createElement('div');
    pdfSection.className = 'nav-section';
    pdfSection.innerHTML = `
        <div class="nav-section-header" onclick="showPDFResources()">
            📄 PDF Resources
        </div>
    `;
    nav.appendChild(pdfSection);
    
    // Define learning progression from basic to advanced
    const learningPath = {
        "1. Economic Foundations": [
            { id: 71, title: "Scope of Economics: Microeconomics vs Macroeconomics" },
            { id: 72, title: "Economic Systems: Free, Planned, and Mixed Economies" },
            { id: 51, title: "Scarcity and Opportunity Cost in Kenya's Agriculture" },
            { id: 52, title: "Production Possibility Curves: Kenya's Economic Choices" }
        ],
        "2. Market Fundamentals": [
            { id: 1, title: "Why Coffee Prices Rise During Winter" },
            { id: 73, title: "Factors Influencing Demand and Demand Curves" },
            { id: 79, title: "Types of Demand and Demand Curves" },
            { id: 53, title: "Price Elasticity of Demand: Kenyan Staple Foods" },
            { id: 80, title: "Exceptional Demand Curves: Giffen and Veblen Goods" }
        ],
        "3. Supply Analysis": [
            { id: 74, title: "Supply Analysis and Market Equilibrium" },
            { id: 81, title: "Individual vs Market Supply Analysis" },
            { id: 41, title: "Housing Shortage and Rent Control Economics" }
        ],
        "4. Consumer Behavior": [
            { id: 2, title: "The Psychology of Black Friday Shopping" },
            { id: 31, title: "The Paradox of Choice in Modern Shopping" },
            { id: 39, title: "The Economics of Subscription Services" },
            { id: 40, title: "Mental Accounting and Money Management" },
            { id: 48, title: "Social Media and the Attention Economy" }
        ],
        "5. Market Structures": [
            { id: 66, title: "Market Structures in Kenya: From Perfect Competition to Monopoly" },
            { id: 5, title: "Network Effects and Platform Dominance" },
            { id: 50, title: "Platform Economics and Network Effects" }
        ],
        "6. Game Theory & Strategy": [
            { id: 33, title: "The Prisoner's Dilemma in Everyday Life" },
            { id: 43, title: "Auction Theory and Bidding Strategies" },
            { id: 65, title: "Collective Action in Kenyan Agriculture: Cooperatives" }
        ],
        "7. Money & Banking": [
            { id: 84, title: "Characteristics and Functions of Money" },
            { id: 85, title: "Central Bank vs Commercial Bank Functions" },
            { id: 76, title: "Money and Banking System Functions" },
            { id: 62, title: "Mobile Money Revolution: M-Pesa and Financial Inclusion" }
        ],
        "8. National Income": [
            { id: 75, title: "National Income and Circular Flow" },
            { id: 82, title: "Circular Flow of Income Model" },
            { id: 83, title: "Approaches to Measuring National Income" },
            { id: 55, title: "GDP and National Income: Measuring Kenya's Economy" }
        ],
        "9. Inflation & Unemployment": [
            { id: 86, title: "Types and Causes of Inflation" },
            { id: 87, title: "Measures to Control Inflation" },
            { id: 42, title: "Inflation and Your Purchasing Power" },
            { id: 56, title: "Unemployment in Kenya: Youth and Structural Challenges" },
            { id: 78, title: "Unemployment Types, Causes and Solutions" }
        ],
        "10. Monetary Policy": [
            { id: 35, title: "How Interest Rates Affect Your Daily Life" },
            { id: 57, title: "Inflation and Price Stability in Kenya" },
            { id: 77, title: "Inflation Types, Causes and Control Measures" }
        ],
        "11. Labor Economics": [
            { id: 34, title: "The Gig Economy and the Future of Work" },
            { id: 45, title: "Automation and the Future of Jobs" }
        ],
        "12. Public Policy": [
            { id: 54, title: "Market Failure and Government Intervention in Kenya" },
            { id: 38, title: "Universal Basic Income: Economics and Implementation" },
            { id: 47, title: "Healthcare Economics and Market Failures" },
            { id: 61, title: "Income Inequality and Redistribution in Kenya" },
            { id: 68, title: "Universal Health Coverage in Kenya: Economics of Healthcare" }
        ],
        "13. International Trade": [
            { id: 36, title: "Trade Wars and Consumer Prices" },
            { id: 58, title: "Kenya's Export Economy: Coffee, Tea, and Diversification" },
            { id: 59, title: "Exchange Rates and the Kenyan Shilling" },
            { id: 67, title: "Regional Integration: East African Community Trade" },
            { id: 49, title: "Supply Chain Resilience vs. Efficiency" }
        ],
        "14. Financial Markets": [
            { id: 37, title: "Understanding Stock Market Volatility" },
            { id: 46, title: "Cryptocurrency and Digital Asset Economics" }
        ],
        "15. Environmental Economics": [
            { id: 32, title: "Carbon Pricing and Market Solutions to Climate Change" },
            { id: 44, title: "The Economics of Renewable Energy Transition" },
            { id: 60, title: "Natural Resource Management in Kenya" },
            { id: 69, title: "Climate Change Economics in Kenya" }
        ],
        "16. Advanced Topics": [
            { id: 63, title: "Informal Economy and Economic Behavior in Kenya" },
            { id: 64, title: "Fiscal Policy and Government Debt in Kenya" },
            { id: 70, title: "Economic Development and Structural Transformation in Kenya" }
        ]
    };
    
    // Create navigation structure
    Object.keys(learningPath).forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'nav-category';
        
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'category-header';
        sectionHeader.innerHTML = `
            ${section}
            <span class="category-toggle">▼</span>
        `;
        
        const lessonList = document.createElement('div');
        lessonList.className = 'lesson-list';
        
        learningPath[section].forEach((lessonRef, index) => {
            const lesson = economicsLessons.find(l => l.id === lessonRef.id);
            if (lesson) {
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                lessonItem.innerHTML = `${section.split('.')[0]}.${index + 1} ${lesson.title}`;
                lessonItem.dataset.lessonId = lesson.id;
                
                lessonItem.addEventListener('click', () => {
                    showLesson(lesson);
                    setActiveLesson(lessonItem);
                });
                
                lessonList.appendChild(lessonItem);
            }
        });
        
        // Section toggle functionality
        sectionHeader.addEventListener('click', () => {
            // Close all other sections first
            document.querySelectorAll('.category-header').forEach(header => {
                if (header !== sectionHeader) {
                    header.classList.add('collapsed');
                    header.nextElementSibling.classList.add('collapsed');
                }
            });
            
            // Toggle current section
            sectionHeader.classList.toggle('collapsed');
            lessonList.classList.toggle('collapsed');
        });
        
        // Start with all sections collapsed
        sectionHeader.classList.add('collapsed');
        lessonList.classList.add('collapsed');
        
        sectionDiv.appendChild(sectionHeader);
        sectionDiv.appendChild(lessonList);
        nav.appendChild(sectionDiv);
    });
}

// Show lesson content
function showLesson(lesson) {
    currentLesson = lesson;
    const welcomeScreen = document.getElementById('welcomeScreen');
    const lessonContent = document.getElementById('lessonContent');
    
    welcomeScreen.style.display = 'none';
    lessonContent.style.display = 'block';
    
    // Remove PDF modes to show normal sidebar
    document.body.classList.remove('pdf-resources-active', 'pdf-viewer-active');
    
    // Ensure app header is visible
    document.querySelector('.app-header').style.display = 'flex';
    
    let chartHtml = '';
    if (lesson.chartData) {
        chartHtml = `<div class="chart-container">
            <canvas id="chart-${lesson.id}"></canvas>
        </div>`;
    }
    
    let tableHtml = '';
    if (lesson.tableData) {
        tableHtml = `<div class="data-table">
            <table>
                <thead>
                    <tr>
                        ${lesson.tableData.headers.map(header => `<th>${header}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${lesson.tableData.rows.map(row => 
                        `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
                    ).join('')}
                </tbody>
            </table>
        </div>`;
    }
    
    lessonContent.innerHTML = `
        <div class="lesson-header">
            <span class="lesson-category">${lesson.category}</span>
            <h1>${lesson.title}</h1>
            <p class="lesson-description">${lesson.description}</p>
        </div>
        
        <div class="concept-definition">
            <h4>📚 Concept: ${lesson.concept}</h4>
            <p>${lesson.definition}</p>
        </div>
        
        ${chartHtml}
        ${tableHtml}
        
        <div class="lesson-section">
            <h4>🌍 Real-World Applications:</h4>
            <ul>
                <li><strong>Individual:</strong> ${lesson.applications.individual}${lesson.applications.individualExample ? `<br><em>Example: ${lesson.applications.individualExample}</em>` : ''}</li>
                <li><strong>Household:</strong> ${lesson.applications.household}${lesson.applications.householdExample ? `<br><em>Example: ${lesson.applications.householdExample}</em>` : ''}</li>
                <li><strong>Business:</strong> ${lesson.applications.business}${lesson.applications.businessExample ? `<br><em>Example: ${lesson.applications.businessExample}</em>` : ''}</li>
                <li><strong>Government:</strong> ${lesson.applications.government}${lesson.applications.governmentExample ? `<br><em>Example: ${lesson.applications.governmentExample}</em>` : ''}</li>
            </ul>
        </div>
        
        <div class="news-example">
            <h4>📰 Examples:</h4>
            ${lesson.examples ? 
                Object.entries(lesson.examples).map(([category, example]) => 
                    `<div class="example-item">
                        <strong>${category}:</strong> ${example}
                    </div>`
                ).join('') 
                : `<p>${lesson.newsExample}</p>`
            }
        </div>
        
        ${lesson.references ? `
        <div class="references-section">
            <h4>📚 References:</h4>
            <div class="references-list">
                ${lesson.references.map(ref => `<p class="reference-item">${ref}</p>`).join('')}
            </div>
        </div>
        ` : ''}
        
        ${lesson.youtubeVideos ? `
        <div class="youtube-section">
            <h4>📺 Video Resources:</h4>
            <div class="youtube-list">
                ${lesson.youtubeVideos.map(video => `
                    <div class="youtube-item">
                        <a href="${video.url}" target="_blank" class="youtube-link">
                            <span class="youtube-icon">📺</span>
                            <span class="youtube-title">${video.title}</span>
                        </a>
                        <p class="youtube-reference">${video.reference}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    // Initialize chart if present
    if (lesson.chartData) {
        setTimeout(() => initializeChart(lesson), 100);
    }
}

// Set active lesson in navigation
function setActiveLesson(lessonElement) {
    // Remove active class from all lessons
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to selected lesson
    lessonElement.classList.add('active');
}

// Initialize chart for a specific lesson
function initializeChart(lesson) {
    const ctx = document.getElementById(`chart-${lesson.id}`);
    if (!ctx) return;
    
    const chartData = lesson.chartData;
    
    let datasets;
    if (chartData.datasets) {
        // Multi-dataset chart
        datasets = chartData.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: dataset.backgroundColor || 'rgba(37, 99, 235, 0.1)',
            borderColor: dataset.borderColor || '#2563eb',
            borderWidth: 3,
            fill: chartData.type === 'line' ? true : false,
            tension: 0.4
        }));
    } else {
        // Single dataset chart
        datasets = [{
            label: chartData.title,
            data: chartData.data,
            backgroundColor: chartData.type === 'bar' ? '#2563eb' : 'rgba(37, 99, 235, 0.1)',
            borderColor: '#2563eb',
            borderWidth: 3,
            fill: chartData.type === 'line' ? true : false,
            tension: 0.4
        }];
    }
    
    new Chart(ctx, {
        type: chartData.type,
        data: {
            labels: chartData.labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: chartData.datasets ? true : false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff'
                }
            },
            scales: {
                y: {
                    beginAtZero: chartData.type === 'bar'
                }
            },
            elements: {
                point: {
                    radius: 6,
                    hoverRadius: 10,
                    backgroundColor: '#2563eb',
                    borderColor: '#fff',
                    borderWidth: 2
                }
            }
        }
    });
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const lessonItems = document.querySelectorAll('.lesson-item');
        const sections = document.querySelectorAll('.nav-category');
        
        if (!searchTerm) {
            // Show all lessons and sections
            lessonItems.forEach(item => item.style.display = 'block');
            sections.forEach(section => section.style.display = 'block');
            return;
        }
        
        // Filter lessons
        lessonItems.forEach(item => {
            const lessonId = item.dataset.lessonId;
            const lesson = economicsLessons.find(l => l.id == lessonId);
            
            const matches = lesson.title.toLowerCase().includes(searchTerm) ||
                          lesson.description.toLowerCase().includes(searchTerm) ||
                          lesson.concept.toLowerCase().includes(searchTerm) ||
                          lesson.category.toLowerCase().includes(searchTerm);
            
            item.style.display = matches ? 'block' : 'none';
        });
        
        // Hide empty sections
        sections.forEach(section => {
            const visibleLessons = section.querySelectorAll('.lesson-item[style*="block"], .lesson-item:not([style])');
            section.style.display = visibleLessons.length > 0 ? 'block' : 'none';
        });
    });
}
