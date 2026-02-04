# Economics Daily - Lesson Template

Use this template to create new daily lessons. Copy the HTML structure below and customize it for each lesson.

## Lesson Structure

```html
<article class="lesson-card">
    <div class="lesson-header">
        <span class="lesson-date">Month Day, Year</span>
        <span class="lesson-category">Category Name</span>
    </div>
    <h3>Lesson Title</h3>
    <p>Brief description of the lesson and its real-world relevance.</p>
    
    <!-- For charts (optional) -->
    <div class="chart-container">
        <canvas id="uniqueChartId"></canvas>
    </div>
    
    <!-- For tables (optional) -->
    <div class="data-table">
        <table>
            <thead>
                <tr>
                    <th>Column 1</th>
                    <th>Column 2</th>
                    <th>Column 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <!-- Real-world applications -->
    <div class="lesson-content">
        <h4>Real-World Application:</h4>
        <ul>
            <li><strong>Individual:</strong> How this affects personal decisions</li>
            <li><strong>Household:</strong> Impact on family economics</li>
            <li><strong>Business:</strong> Corporate strategy implications</li>
            <li><strong>Government:</strong> Policy considerations</li>
        </ul>
    </div>
</article>
```

## Categories to Use

- Supply & Demand
- Behavioral Economics
- Microeconomics
- Macroeconomics
- Market Structures
- Game Theory
- Public Policy
- International Trade
- Labor Economics
- Financial Markets

## Adding Charts

To add a new chart, create a canvas element with a unique ID and add the chart initialization to script.js:

```javascript
function initializeYourChart() {
    const ctx = document.getElementById('yourChartId');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'line', // or 'bar', 'pie', etc.
        data: {
            labels: ['Label1', 'Label2', 'Label3'],
            datasets: [{
                label: 'Dataset Name',
                data: [10, 20, 30],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
```

## Tips for Engaging Content

1. Start with a relatable scenario
2. Use simple language and avoid jargon
3. Include real numbers and data when possible
4. Connect to current events
5. Show multiple perspectives (individual, business, government)
6. Use visual elements (charts/tables) to illustrate concepts
7. End with actionable insights
