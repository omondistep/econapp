# Economics Daily Blog

A comprehensive economics education platform with 70 interactive lessons covering all major economic concepts with special focus on Kenyan and developing country contexts.

## Features

### Content
- **70 Economics Lessons**: Comprehensive coverage from basic economic principles to advanced topics
- **Kenyan Context**: Many examples drawn from Kenya's economy and East African region
- **Curriculum Aligned**: Covers complete economics syllabus including microeconomics, macroeconomics, and international economics
- **12 Categories**: Organized into logical categories for easy navigation
- **Undated Content**: Timeless lessons that remain relevant
- **Interactive Charts**: Visual data representations using Chart.js
- **Real-World Applications**: Each lesson includes practical applications for individuals, households, businesses, and governments
- **Current Examples**: Recent news examples to illustrate concepts

### Functionality
- **Advanced Search**: Search across titles, descriptions, concepts, and categories
- **Smart Filtering**: Filter by category with live results
- **Flexible Sorting**: Sort by default order, alphabetical, or by category
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Mode**: Toggle between light and dark themes with preference saving
- **Lesson Counter**: Shows current results and total available lessons
- **Smooth Navigation**: Animated scrolling and hover effects

### Topics Covered

#### Basic Economic Ideas and Resource Allocation
- Scarcity, choice and opportunity cost (with Kenyan agriculture examples)
- Economic methodology
- Factors of production
- Resource allocation in different economic systems
- Production possibility curves (Kenya's economic choices)
- Classification of goods and services

#### The Price System and Microeconomy
- Demand and supply curves
- Price elasticity (Kenyan staple foods context)
- Income elasticity and cross elasticity of demand
- Price elasticity of supply
- Consumer and producer surplus
- Utility and indifference curves
- Market structures (Kenya examples from vegetables to telecommunications)
- Efficiency and market failure

#### Government Microeconomic Intervention
- Reasons for government intervention (Kenya case studies)
- Methods and effects of government intervention
- Addressing income and wealth inequality
- Labour market forces and government intervention

#### The Macroeconomy
- National income statistics (Kenya's GDP measurement)
- Circular flow of income
- Aggregate Demand and Supply analysis
- Economic growth and structural transformation
- Unemployment (Kenya's youth unemployment challenge)
- Price stability and inflation targeting
- Money and banking (M-Pesa revolution)

#### Government Macroeconomic Intervention
- Macroeconomic policy objectives
- Fiscal policy and government debt sustainability
- Monetary policy (Central Bank of Kenya)
- Supply-side policy

#### International Economic Issues
- Reasons for international trade
- Protectionism
- Balance of payments
- Exchange rates (Kenyan Shilling dynamics)
- Regional integration (East African Community)
- Economic development and globalization

### Categories Covered
1. **Supply & Demand** - Market fundamentals and price mechanisms
2. **Behavioral Economics** - Psychology of economic decisions including informal economy
3. **Microeconomics** - Individual and firm-level economics with Kenyan examples
4. **Macroeconomics** - Economy-wide phenomena and Kenya's development
5. **Game Theory** - Strategic decision making and collective action
6. **Labor Economics** - Employment challenges and solutions
7. **Public Policy** - Government intervention and social programs
8. **International Trade** - Kenya's trade patterns and regional integration
9. **Financial Markets** - Mobile money and financial inclusion
10. **Environmental Economics** - Natural resource management and climate economics
11. **Monetary Policy** - Central banking and inflation control
12. **Market Structures** - Competition and regulation in Kenya

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No framework dependencies
- **Chart.js**: Interactive data visualizations
- **Local Storage**: Dark mode preference persistence

### Key Features
1. **Expanded Content**: 70 comprehensive lessons with Kenyan context
2. **Enhanced Search**: Full-text search across all lesson content
3. **Better UX**: Improved controls layout and visual feedback
4. **Dark Mode**: Complete dark theme implementation
5. **Responsive Footer**: Enhanced footer with quick links and categories
6. **No Dates**: Removed date dependencies for timeless content
7. **Performance**: Optimized rendering and chart initialization
8. **Curriculum Coverage**: Complete economics syllabus alignment

## Usage

### Running the Application

**Important**: To use PDF resources, you must serve the files through a web server:

```bash
# Start local server
./start-server.sh

# Or manually:
python3 -m http.server 8000
```

Then open your browser to: **http://localhost:8000**

Simply opening `index.html` directly won't work for PDF viewing due to browser security restrictions.

### Navigation
- Use the search bar to find specific topics
- Filter by category using the dropdown
- Sort lessons by different criteria
- Toggle between showing 5 or all 70 lessons
- Switch to dark mode using the moon/sun icon

## File Structure

```
econ_blog/
├── index.html          # Main HTML structure
├── styles.css          # All styling including dark mode
├── script.js           # Interactive functionality
├── lessons-data.js     # All 70 lesson data
├── add-lesson.sh       # Utility script for adding lessons
├── lesson-template.md  # Template for new lessons
└── README.md          # This documentation
```

## Educational Value

This platform provides:
- **Comprehensive Coverage**: All major economics topics with developing country perspective
- **Practical Application**: Real-world examples from Kenya's economy
- **Interactive Learning**: Charts, tables, and visual data representations
- **Multiple Perspectives**: Individual, household, business, and government applications
- **Current Relevance**: Recent examples and case studies

## Future Enhancements

Potential improvements could include:
- Bookmark/favorites system
- Progress tracking
- Quiz functionality
- Social sharing
- Print-friendly layouts
- Additional chart types
- Lesson difficulty ratings
- Related lesson suggestions
- Multi-language support (Swahili)

## License

This project is designed for educational purposes and demonstrates modern web development practices for content-rich applications with focus on developing country economics education.
