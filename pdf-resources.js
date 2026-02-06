// PDF Resources data
const pdfResources = [
    {
        id: 1,
        title: "Economics Definitions",
        author: "Wei Seng",
        filename: "/pdfs/Definitions.pdf",
        category: "Definitions",
        pages: 10,
        description: "Comprehensive definitions of key economic terms and concepts",
        topics: ["Microeconomics", "Macroeconomics", "Market Structures", "Elasticity"]
    },
    {
        id: 2,
        title: "Macro Economics Notes",
        author: "Calvin Wong",
        filename: "/pdfs/Macro_notes.pdf",
        category: "Macroeconomics",
        pages: 21,
        description: "Detailed macroeconomic concepts including GDP, GNP, and national income",
        topics: ["GDP", "GNP", "National Income", "Economic Growth"]
    },
    {
        id: 3,
        title: "Economics Revision Notes",
        author: "Stephen Ondiek",
        filename: "/pdfs/Economics_revision_notes.pdf",
        category: "General",
        pages: 61,
        description: "Comprehensive revision notes covering all economics topics",
        topics: ["Supply & Demand", "Market Structures", "Government Policy", "International Trade"]
    },
    {
        id: 4,
        title: "Costs of Production",
        author: "Stephen Ondiek",
        filename: "/pdfs/Costs_of_production.pdf",
        category: "Microeconomics",
        pages: 23,
        description: "Detailed analysis of production costs and firm behavior",
        topics: ["Production Theory", "Cost Curves", "Economies of Scale", "Firm Behavior"]
    },
        {
        id: 5,
        title: "Cambridge Econ revision guide",
        author: "Stephen Ondiek",
        filename: "/pdfs/Cambridge_revision_guide.pdf",
        category: "Macro and Micro Economics",
        pages: 50,
        description: "Comprehensive revision kit covering many economics topics",
        topics: ["Macro economy", "Micro economy", "Government Intervention"]
    },
    {
        id: 6,
        title: "Micro and Macro notes",
        author: "Stephen Ondiek",
        filename: "/pdfs/Micro_and_Macro_notes.pdf",
        category: "Microeconomics and Macroeconomics",
        pages: 17,
        description: "Detailed analysis of economic ideas and resource allocation",
        topics: ["Basic Economic Ideas", "Resource Allocation"]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = pdfResources;
}
