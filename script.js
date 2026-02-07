// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupThemeSelector();
    setupSidebarToggle();
    buildNavigation();
    setupSearch();
    initializePDFResources();
    setupKeyboardShortcuts();
    setupLoadingStates();
    setupPDFCache();

    // Back to Resources button
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', closePDFViewer);
    }
    
    // Ensure no PDF mode classes are active on initial load
    document.body.classList.remove('pdf-resources-active', 'pdf-viewer-active');
    
    // Update sidebar toggle position initially
    updateSidebarTogglePosition();
    
    // Load recommendations
    setTimeout(loadRecommendations, 1000);
});

let currentLesson = null;

// PDF Resources functionality with caching
let currentPDF = null;
let currentPage = 1;
let totalPages = 0;
let scale = 1.0;
let pdfCache = new Map();
let loadingProgress = 0;

// Loading States
function setupLoadingStates() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            hideLoading();
        }
    });
}

function showLoading(text = 'Loading...') {
    const overlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    
    loadingText.textContent = text;
    overlay.style.display = 'flex';
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
}

function updateLoadingProgress(progress) {
    loadingProgress = progress;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
}

function hideLoading() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    
    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.classList.remove('fade-out');
    }, 300);
}

// PDF Caching
function setupPDFCache() {
    // Clear old cache entries (older than 7 days)
    const cacheExpiry = Date.now() - (7 * 24 * 60 * 60 * 1000);
    
    // Check if IndexedDB is available
    if ('indexedDB' in window) {
        const request = indexedDB.open('pdfCache', 1);
        
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('pdfs')) {
                const store = db.createObjectStore('pdfs', { keyPath: 'filename' });
                store.createIndex('timestamp', 'timestamp');
            }
        };
        
        request.onsuccess = function(e) {
            console.log('PDF cache initialized');
        };
    }
}

async function getCachedPDF(filename) {
    if (!pdfCache.has(filename) && 'indexedDB' in window) {
        try {
            const db = await new Promise((resolve, reject) => {
                const request = indexedDB.open('pdfCache', 1);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            const transaction = db.transaction(['pdfs'], 'readonly');
            const store = transaction.objectStore('pdfs');
            const request = store.get(filename);
            
            return new Promise((resolve) => {
                request.onsuccess = () => {
                    if (request.result) {
                        pdfCache.set(filename, request.result.data);
                        resolve(request.result.data);
                    } else {
                        resolve(null);
                    }
                };
                request.onerror = () => resolve(null);
            });
        } catch (error) {
            console.error('Cache error:', error);
            return null;
        }
    }
    return pdfCache.get(filename) || null;
}

async function cachePDF(filename, data) {
    pdfCache.set(filename, data);
    
    if ('indexedDB' in window) {
        try {
            const db = await new Promise((resolve, reject) => {
                const request = indexedDB.open('pdfCache', 1);
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
            
            const transaction = db.transaction(['pdfs'], 'readwrite');
            const store = transaction.objectStore('pdfs');
            
            const cacheEntry = {
                filename: filename,
                data: data,
                timestamp: Date.now()
            };
            
            store.put(cacheEntry);
        } catch (error) {
            console.error('Cache write error:', error);
        }
    }
}

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

function initializePDFResources() {
    // Set PDF.js worker
    if (typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
    
    renderPDFGrid();
    setupPDFFilters();
}

async function renderPDFGrid() {
    const grid = document.getElementById('pdfGrid');
    if (!grid || typeof pdfResources === 'undefined') return;
    
    // Show skeleton loading
    grid.innerHTML = pdfResources.map((pdf, index) => `
        <div class="pdf-card skeleton" id="pdf-card-${index}">
            <div class="skeleton-thumbnail"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-tags">
                <span class="skeleton-tag"></span>
                <span class="skeleton-tag"></span>
            </div>
        </div>
    `).join('');
    
    // Load thumbnails lazily
    pdfResources.forEach((pdf, index) => {
        setTimeout(async () => {
            const card = document.getElementById(`pdf-card-${index}`);
            if (card) {
                card.classList.remove('skeleton');
                card.innerHTML = `
                    <div class="pdf-thumbnail" onclick="openPDF('${pdf.filename}', '${pdf.title}')">
                        <div class="thumbnail-placeholder">📄</div>
                    </div>
                    <h3>${pdf.title}</h3>
                    <div class="pdf-author">by ${pdf.author}</div>
                    <div class="pdf-meta">
                        <span>${pdf.category}</span>
                        <span>${pdf.pages} pages</span>
                        <span class="view-count">${analytics?.stats?.pdfsOpened[pdf.filename] || 0} views</span>
                    </div>
                    <div class="pdf-description">${pdf.description}</div>
                    <div class="pdf-topics">
                        ${pdf.topics.map(topic => `<span class="pdf-topic">${topic}</span>`).join('')}
                    </div>
                    <div class="pdf-actions">
                        <button class="bookmark-pdf-btn" onclick="togglePDFBookmark(event, '${pdf.filename}')" 
                                aria-label="Bookmark PDF">
                            ☆
                        </button>
                        <button class="share-pdf-btn" onclick="sharePDF('${pdf.filename}', '${pdf.title}')"
                                aria-label="Share PDF">
                            🔗
                        </button>
                    </div>
                `;
                card.onclick = () => openPDF(pdf.filename, pdf.title);
            }
        }, index * 100); // Stagger loading
    });
}

function setupPDFFilters() {
    const categoryFilter = document.getElementById('pdfCategoryFilter');
    const searchInput = document.getElementById('pdfSearchInput');
    const searchBtn = document.getElementById('pdfSearchBtn');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterPDFs);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(filterPDFs, 300));
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') filterPDFs();
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', filterPDFs);
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function filterPDFs() {
    if (typeof pdfResources === 'undefined') return;
    
    const category = document.getElementById('pdfCategoryFilter')?.value || '';
    const search = document.getElementById('pdfSearchInput')?.value.toLowerCase() || '';
    
    // Track search
    if (search && analytics) {
        analytics.trackSearch(search);
    }
    
    const filtered = pdfResources.filter(pdf => {
        const matchesCategory = !category || pdf.category === category;
        const matchesSearch = !search || 
            pdf.title.toLowerCase().includes(search) ||
            pdf.description.toLowerCase().includes(search) ||
            pdf.author.toLowerCase().includes(search) ||
            pdf.topics.some(topic => topic.toLowerCase().includes(search));
        
        return matchesCategory && matchesSearch;
    });
    
    const grid = document.getElementById('pdfGrid');
    if (grid) {
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="no-results">
                    <p>No PDFs found matching your search.</p>
                    <button onclick="clearFilters()">Clear filters</button>
                </div>
            `;
        } else {
            grid.innerHTML = filtered.map((pdf, index) => `
                <div class="pdf-card" id="filtered-pdf-${index}">
                    <div class="pdf-thumbnail" onclick="openPDF('${pdf.filename}', '${pdf.title}')">
                        <div class="thumbnail-placeholder">📄</div>
                    </div>
                    <h3>${pdf.title}</h3>
                    <div class="pdf-author">by ${pdf.author}</div>
                    <div class="pdf-meta">
                        <span>${pdf.category}</span>
                        <span>${pdf.pages} pages</span>
                        <span class="view-count">${analytics?.stats?.pdfsOpened[pdf.filename] || 0} views</span>
                    </div>
                    <div class="pdf-description">${pdf.description}</div>
                    <div class="pdf-topics">
                        ${pdf.topics.map(topic => `<span class="pdf-topic">${topic}</span>`).join('')}
                    </div>
                    <div class="pdf-actions">
                        <button class="bookmark-pdf-btn" onclick="togglePDFBookmark(event, '${pdf.filename}')" 
                                aria-label="Bookmark PDF">
                            ☆
                        </button>
                        <button class="share-pdf-btn" onclick="sharePDF('${pdf.filename}', '${pdf.title}')"
                                aria-label="Share PDF">
                            🔗
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Reattach click handlers
            filtered.forEach((pdf, index) => {
                const card = document.getElementById(`filtered-pdf-${index}`);
                if (card) {
                    card.onclick = () => openPDF(pdf.filename, pdf.title);
                }
            });
        }
    }
}

async function openPDF(filename, title) {
    if (typeof pdfjsLib === 'undefined') {
        showToast('PDF viewer not available. Please refresh the page.', 'error');
        return;
    }
    
    showLoading('Loading PDF...');
    
    try {
        // Track PDF open
        if (analytics) {
            analytics.trackPDFOpen(filename);
        }
        
        document.getElementById('pdfResources').style.display = 'none';
        document.getElementById('pdfViewer').style.display = 'block';
        document.getElementById('pdfViewerTitle').textContent = title;
        
        // Hide sidebar and show PDF viewer mode
        document.body.classList.add('pdf-viewer-active');
        document.body.classList.remove('pdf-resources-active');
        
        // Hide the main app header
        document.querySelector('.app-header').style.display = 'none';
        
        // Check cache first
        const cached = await getCachedPDF(filename);
        
        if (cached) {
            // Use cached PDF
            currentPDF = cached;
            totalPages = currentPDF.numPages;
            currentPage = 1;
            
            updateLoadingProgress(100);
            setTimeout(() => {
                renderPage(currentPage);
                updatePageInfo();
                updatePDFProgress();
                hideLoading();
            }, 100);
        } else {
            // Load from network with progress
            const loadingTask = pdfjsLib.getDocument({
                url: filename,
                withCredentials: false
            });
            
            loadingTask.onProgress = (progress) => {
                const percent = Math.round((progress.loaded / progress.total) * 100);
                updateLoadingProgress(percent);
            };
            
            currentPDF = await loadingTask.promise;
            totalPages = currentPDF.numPages;
            currentPage = 1;
            
            // Cache the PDF
            await cachePDF(filename, currentPDF);
            
            renderPage(currentPage);
            updatePageInfo();
            updatePDFProgress();
            hideLoading();
        }
        
        // Update bookmark button
        updateBookmarkButton();
        
        // Setup scroll progress tracking
        setupPDFProgressTracking();
        
    } catch (error) {
        console.error('Error loading PDF:', error);
        hideLoading();
        showToast('Error loading PDF file. Please check your connection.', 'error');
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
        
        // Update progress
        updatePDFProgress();
    } catch (error) {
        console.error('Error rendering page:', error);
        showToast('Error rendering page', 'error');
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
    
    // Hide search panel if open
    closePDFSearch();
}

// Progress tracking
function setupPDFProgressTracking() {
    const contentArea = document.querySelector('.pdf-content-area');
    contentArea.addEventListener('scroll', updatePDFProgress);
}

function updatePDFProgress() {
    const contentArea = document.querySelector('.pdf-content-area');
    const canvas = document.getElementById('pdfCanvas');
    
    if (!canvas || !contentArea) return;
    
    const scrollTop = contentArea.scrollTop;
    const scrollHeight = contentArea.scrollHeight - contentArea.clientHeight;
    const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
    
    const progressFill = document.getElementById('pdfProgressFill');
    const progressText = document.getElementById('pdfProgressText');
    
    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${progress}%`;
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updatePageInfo();
        updateBookmarkButton();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        updatePageInfo();
        updateBookmarkButton();
    }
}

function zoomIn() {
    if (scale < 3.0) {
        scale += 0.2;
        renderPage(currentPage);
        updateZoomLevel();
    }
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

// Bookmark functionality
function toggleBookmark() {
    if (!currentPDF) return;
    
    const pdfFilename = currentPDF.filename || '';
    if (!pdfFilename) return;
    
    if (analytics) {
        const key = `${pdfFilename}-${currentPage}`;
        const existing = analytics.stats.bookmarks[key];
        
        if (existing) {
            analytics.removeBookmark(pdfFilename, currentPage);
            showToast('Bookmark removed', 'info');
        } else {
            analytics.addBookmark(pdfFilename, currentPage);
            showToast('Page bookmarked', 'success');
        }
        updateBookmarkButton();
    }
}

function updateBookmarkButton() {
    if (!currentPDF || !analytics) return;
    
    const pdfFilename = currentPDF.filename || '';
    const key = `${pdfFilename}-${currentPage}`;
    const isBookmarked = !!analytics.stats.bookmarks[key];
    
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.innerHTML = isBookmarked ? '★' : '☆';
        bookmarkBtn.title = isBookmarked ? 'Remove bookmark' : 'Bookmark this page';
    }
}

function togglePDFBookmark(event, pdfFilename) {
    event.stopPropagation();
    
    if (analytics) {
        const bookmarks = analytics.getBookmarks();
        const existing = bookmarks.find(b => b.pdf === pdfFilename && b.page === 1);
        
        if (existing) {
            analytics.removeBookmark(pdfFilename, 1);
            showToast('PDF removed from bookmarks', 'info');
        } else {
            analytics.addBookmark(pdfFilename, 1, 'PDF resource');
            showToast('PDF added to bookmarks', 'success');
        }
    }
}

function showBookmarks() {
    if (!analytics) return;
    
    const bookmarks = analytics.getBookmarks();
    const bookmarksList = document.getElementById('bookmarksList');
    const bookmarksView = document.getElementById('bookmarksView');
    
    if (bookmarks.length === 0) {
        bookmarksList.innerHTML = `
            <div class="no-bookmarks">
                <p>No bookmarks yet</p>
                <p>Bookmark pages while viewing PDFs to see them here.</p>
            </div>
        `;
    } else {
        bookmarksList.innerHTML = bookmarks.map(bookmark => {
            const pdf = pdfResources?.find(p => p.filename === bookmark.pdf);
            const title = pdf?.title || bookmark.pdf;
            
            return `
                <div class="bookmark-item">
                    <div class="bookmark-info">
                        <h4>${title}</h4>
                        <p class="bookmark-meta">
                            Page ${bookmark.page} • 
                            ${new Date(bookmark.date).toLocaleDateString()}
                            ${bookmark.note ? `• Note: ${bookmark.note}` : ''}
                        </p>
                    </div>
                    <div class="bookmark-actions">
                        <button onclick="openBookmarkedPDF('${bookmark.pdf}', ${bookmark.page})" 
                                aria-label="Open bookmarked page">
                            Open
                        </button>
                        <button onclick="removeBookmark('${bookmark.pdf}', ${bookmark.page})" 
                                aria-label="Remove bookmark">
                            Remove
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    document.getElementById('pdfResources').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('lessonContent').style.display = 'none';
    bookmarksView.style.display = 'block';
}

function closeBookmarks() {
    document.getElementById('bookmarksView').style.display = 'none';
    document.getElementById('pdfResources').style.display = 'block';
}

function openBookmarkedPDF(filename, page) {
    const pdf = pdfResources?.find(p => p.filename === filename);
    if (pdf) {
        openPDF(filename, pdf.title);
        // Navigate to bookmarked page after a delay
        setTimeout(() => {
            currentPage = page;
            renderPage(currentPage);
            updatePageInfo();
            updateBookmarkButton();
        }, 1000);
    }
}

function removeBookmark(pdfFilename, page) {
    if (analytics) {
        analytics.removeBookmark(pdfFilename, page);
        showBookmarks(); // Refresh the list
    }
}

// PDF Search
async function searchInPDF() {
    const searchInput = document.getElementById('pdfTextSearch');
    const searchTerm = searchInput.value.trim();
    
    if (!searchTerm || !currentPDF) return;
    
    showLoading('Searching PDF...');
    
    try {
        const results = [];
        
        // Search each page
        for (let i = 1; i <= totalPages; i++) {
            const page = await currentPDF.getPage(i);
            const textContent = await page.getTextContent();
            
            textContent.items.forEach((item, index) => {
                if (item.str.toLowerCase().includes(searchTerm.toLowerCase())) {
                    results.push({
                        page: i,
                        text: item.str,
                        index: index
                    });
                }
            });
        }
        
        hideLoading();
        displaySearchResults(results, searchTerm);
    } catch (error) {
        console.error('Search error:', error);
        hideLoading();
        showToast('Error searching PDF', 'error');
    }
}

function displaySearchResults(results, searchTerm) {
    const resultsDiv = document.getElementById('pdfSearchResults');
    
    if (results.length === 0) {
        resultsDiv.innerHTML = `<p class="no-results">No results found for "${searchTerm}"</p>`;
    } else {
        resultsDiv.innerHTML = `
            <h4>Found ${results.length} results:</h4>
            <div class="results-list">
                ${results.slice(0, 20).map(result => `
                    <div class="result-item" onclick="goToSearchResult(${result.page}, ${result.index})">
                        <div class="result-page">Page ${result.page}</div>
                        <div class="result-text">${highlightText(result.text, searchTerm)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function highlightText(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function goToSearchResult(page, index) {
    currentPage = page;
    renderPage(currentPage);
    updatePageInfo();
    updateBookmarkButton();
}

function openPDFSearch() {
    document.getElementById('pdfSearchPanel').style.display = 'block';
    document.getElementById('pdfTextSearch').focus();
}

function closePDFSearch() {
    document.getElementById('pdfSearchPanel').style.display = 'none';
    document.getElementById('pdfTextSearch').value = '';
    document.getElementById('pdfSearchResults').innerHTML = '';
}

// Sharing
function sharePDF(filename, title) {
    const pdf = pdfResources?.find(p => p.filename === filename);
    if (!pdf) return;
    
    const shareData = {
        title: pdf.title,
        text: `Check out "${pdf.title}" - ${pdf.description.substring(0, 100)}...`,
        url: window.location.origin + '?pdf=' + encodeURIComponent(filename)
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch(error => {
                if (error.name !== 'AbortError') {
                    copyToClipboard(shareData.url);
                }
            });
    } else {
        copyToClipboard(shareData.url);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => showToast('Link copied to clipboard!', 'success'))
        .catch(() => showToast('Failed to copy link', 'error'));
}

// Toast notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Keyboard Shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Don't trigger shortcuts when user is typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        // PDF Viewer shortcuts
        if (document.body.classList.contains('pdf-viewer-active')) {
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    previousPage();
                    break;
                case 'ArrowRight':
                case 'ArrowDown':
                case ' ':
                    e.preventDefault();
                    nextPage();
                    break;
                case 'Escape':
                    if (document.getElementById('pdfSearchPanel').style.display === 'block') {
                        closePDFSearch();
                    } else {
                        closePDFViewer();
                    }
                    break;
                case '+':
                case '=':
                    e.preventDefault();
                    zoomIn();
                    break;
                case '-':
                    e.preventDefault();
                    zoomOut();
                    break;
                case '0':
                    e.preventDefault();
                    scale = 1.0;
                    renderPage(currentPage);
                    updateZoomLevel();
                    break;
                case 'b':
                    e.preventDefault();
                    toggleBookmark();
                    break;
                case 'f':
                case '/':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        openPDFSearch();
                    }
                    break;
            }
        }
        
        // Global shortcuts
        switch(e.key) {
            case 'Escape':
                // Close any open panels
                closePDFSearch();
                break;
            case '/':
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    document.getElementById('searchInput').focus();
                }
                break;
            case 'p':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    showPDFResources();
                }
                break;
            case 'h':
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    goHome();
                }
                break;
        }
    });
}

function goHome() {
    document.getElementById('welcomeScreen').style.display = 'flex';
    document.getElementById('lessonContent').style.display = 'none';
    document.getElementById('pdfResources').style.display = 'none';
    document.getElementById('pdfViewer').style.display = 'none';
    document.getElementById('bookmarksView').style.display = 'none';
    
    document.body.classList.remove('pdf-resources-active', 'pdf-viewer-active');
    document.querySelector('.app-header').style.display = 'flex';
}

// Recommendations
function loadRecommendations() {
    if (!analytics) return;
    
    const recommendations = analytics.getRecommendations();
    const recommendationsList = document.getElementById('recommendationsList');
    
    if (recommendations.length > 0) {
        recommendationsList.innerHTML = recommendations.map(lesson => `
            <div class="recommendation-item" onclick="showLesson(${lesson.id})">
                <h4>${lesson.title}</h4>
                <p>${lesson.description.substring(0, 80)}...</p>
                <span class="recommendation-category">${lesson.category}</span>
            </div>
        `).join('');
    } else {
        document.getElementById('recommendationsSection').style.display = 'none';
    }
}

// Sidebar toggle functionality
function setupSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const contentArea = document.querySelector('.content-area');
    
    sidebarToggle.addEventListener('click', function() {
        const isCollapsed = sidebar.classList.contains('collapsed');
        sidebar.classList.toggle('collapsed');
        contentArea.classList.toggle('sidebar-collapsed');
        sidebarToggle.setAttribute('aria-expanded', !isCollapsed);
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
    body.classList.remove('theme-seniva', 'theme-cobalt', 'theme-high-contrast');
    
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
                
                // Add view count badge
                const viewCount = analytics?.stats?.lessonsViewed[lesson.id] || 0;
                if (viewCount > 0) {
                    const badge = document.createElement('span');
                    badge.className = 'view-badge';
                    badge.textContent = viewCount;
                    badge.title = `${viewCount} views`;
                    lessonItem.appendChild(badge);
                }
                
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
    
    // Track lesson view
    if (analytics) {
        analytics.trackLessonView(lesson.id);
    }
    
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
            <div class="lesson-header-top">
                <span class="lesson-category">${lesson.category}</span>
                <div class="lesson-actions">
                    <button onclick="shareLesson(${lesson.id})" class="share-lesson-btn" aria-label="Share lesson">
                        🔗 Share
                    </button>
                    <span class="view-count">${analytics?.stats?.lessonsViewed[lesson.id] || 0} views</span>
                </div>
            </div>
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
                        <a href="${video.url}" target="_blank" class="youtube-link" rel="noopener noreferrer">
                            <span class="youtube-icon">📺</span>
                            <span class="youtube-title">${video.title}</span>
                        </a>
                        <p class="youtube-reference">${video.reference}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <div class="lesson-footer">
            <button onclick="shareLesson(${lesson.id})" class="share-btn">
                🔗 Share this lesson
            </button>
            <button onclick="goHome()" class="home-btn">
                🏠 Back to home
            </button>
        </div>
    `;
    
    // Initialize chart if present
    if (lesson.chartData) {
        setTimeout(() => initializeChart(lesson), 100);
    }
}

function shareLesson(lessonId) {
    const lesson = economicsLessons.find(l => l.id === lessonId);
    if (!lesson) return;
    
    const shareData = {
        title: lesson.title,
        text: lesson.description.substring(0, 100) + '...',
        url: `${window.location.origin}?lesson=${lessonId}`
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Lesson shared'))
            .catch(error => {
                if (error.name !== 'AbortError') {
                    copyToClipboard(shareData.url);
                }
            });
    } else {
        copyToClipboard(shareData.url);
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
    const resultsCount = document.getElementById('searchResultsCount');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const lessonItems = document.querySelectorAll('.lesson-item');
        const sections = document.querySelectorAll('.nav-category');
        
        let visibleCount = 0;
        
        if (!searchTerm) {
            // Show all lessons and sections
            lessonItems.forEach(item => {
                item.style.display = 'block';
                visibleCount++;
            });
            sections.forEach(section => section.style.display = 'block');
            resultsCount.textContent = '';
            return;
        }
        
        // Filter lessons
        lessonItems.forEach(item => {
            const lessonId = item.dataset.lessonId;
            const lesson = economicsLessons.find(l => l.id == lessonId);
            
            const matches = lesson && (
                lesson.title.toLowerCase().includes(searchTerm) ||
                lesson.description.toLowerCase().includes(searchTerm) ||
                lesson.concept.toLowerCase().includes(searchTerm) ||
                lesson.category.toLowerCase().includes(searchTerm)
            );
            
            item.style.display = matches ? 'block' : 'none';
            if (matches) visibleCount++;
        });
        
        // Hide empty sections
        sections.forEach(section => {
            const visibleLessons = section.querySelectorAll('.lesson-item[style*="block"], .lesson-item:not([style])');
            section.style.display = visibleLessons.length > 0 ? 'block' : 'none';
        });
        
        // Update results count
        resultsCount.textContent = visibleCount > 0 ? `${visibleCount} results` : 'No results found';
        
        // Track search
        if (analytics && searchTerm.trim()) {
            analytics.trackSearch(searchTerm);
        }
    });
}
