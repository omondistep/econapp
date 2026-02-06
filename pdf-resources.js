// PDF Resources data
const pdfResources = [
    {
        id: 1,
        title: "Economics Definitions",
        author: "Wei Seng",
        filename: "Definitions.pdf",
        category: "Definitions",
        pages: 10,
        description: "Comprehensive definitions of key economic terms and concepts",
        topics: ["Microeconomics", "Macroeconomics", "Market Structures", "Elasticity"]
    },
    {
        id: 2,
        title: "Macro Economics Notes",
        author: "Calvin Wong",
        filename: "Macro economics (macro) notes.pdf",
        category: "Macroeconomics",
        pages: 21,
        description: "Detailed macroeconomic concepts including GDP, GNP, and national income",
        topics: ["GDP", "GNP", "National Income", "Economic Growth"]
    },
    {
        id: 3,
        title: "Economics Revision Notes",
        author: "Stephen Ondiek",
        filename: "Economics revision notes.pdf",
        category: "General",
        pages: 61,
        description: "Comprehensive revision notes covering all economics topics",
        topics: ["Supply & Demand", "Market Structures", "Government Policy", "International Trade"]
    },
    {
        id: 4,
        title: "Costs of Production",
        author: "Unknown",
        filename: "Topic-costs of production.pdf",
        category: "Microeconomics",
        pages: 23,
        description: "Detailed analysis of production costs and firm behavior",
        topics: ["Production Theory", "Cost Curves", "Economies of Scale", "Firm Behavior"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pdfResources;
}
