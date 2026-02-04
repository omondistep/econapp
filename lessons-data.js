const economicsLessons = [
    {
        id: 1,
        date: "Feb 2, 2026",
        category: "Supply & Demand",
        title: "Why Coffee Prices Rise During Winter",
        description: "Explore how seasonal changes affect supply chains and consumer behavior through your morning coffee purchase.",
        concept: "Supply and Demand",
        definition: "The economic model that determines prices based on the relationship between the availability of a good (supply) and the desire for that good (demand).",
        chartData: {
            type: "line",
            labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
            data: [4.20, 4.35, 4.65, 5.10, 5.45, 5.20],
            title: "Coffee Price Trends ($/lb)"
        },
        applications: {
            individual: "Time purchases during off-peak seasons to save money",
            household: "Budget for seasonal price variations in grocery planning",
            business: "Adjust inventory and pricing strategies based on seasonal demand",
            government: "Monitor commodity prices for inflation indicators"
        },
        newsExample: "Recent frost in Brazil's coffee regions reduced supply by 15%, driving global prices up 23% in January 2026.",
        examples: {
            "Government": "Kenya's coffee board adjusts minimum prices to protect farmers during global price volatility",
            "Households": "Nairobi families switch to tea or reduce coffee consumption when prices rise above KSh 800/kg",
            "Firms": "Java House adjusts menu prices and portion sizes to maintain profit margins during coffee price spikes",
            "Investors": "Coffee futures traders hedge positions based on weather forecasts in major producing regions"
        }
    },
    {
        id: 2,
        date: "Feb 1, 2026",
        category: "Behavioral Economics",
        title: "The Psychology of Black Friday Shopping",
        description: "Understanding how retailers use scarcity and social proof to influence consumer decisions.",
        concept: "Behavioral Economics",
        definition: "The study of psychological, emotional, cultural and social factors that influence economic decisions.",
        tableData: {
            headers: ["Psychological Trigger", "Retailer Strategy", "Consumer Response", "Economic Impact"],
            rows: [
                ["Scarcity", "Limited time offers", "Urgency to purchase", "Increased demand"],
                ["Social Proof", "Bestseller labels", "Increased confidence", "Higher conversion rates"],
                ["Loss Aversion", "Save 50% messaging", "Fear of missing out", "Impulse buying"],
                ["Anchoring", "Original price crossed out", "Perceived value", "Higher willingness to pay"]
            ]
        },
        applications: {
            individual: "Recognize manipulation tactics and make rational purchasing decisions",
            household: "Set shopping budgets and stick to planned purchases",
            business: "Use ethical persuasion techniques to increase sales",
            government: "Regulate deceptive advertising practices"
        },
        newsExample: "Amazon reported 70% of Black Friday 2025 purchases were unplanned, highlighting the power of behavioral triggers.",
        examples: {
            "Government": "Consumer protection agencies regulate misleading 'limited time' offers and require clear pricing disclosure",
            "Households": "Kenyan families set strict Black Friday budgets and make shopping lists to avoid impulse purchases",
            "Firms": "Jumia Kenya uses scarcity messaging and social proof to increase conversion rates during sales events",
            "Individuals": "Shoppers use apps like Honey to compare prices and avoid falling for artificial urgency tactics"
        }
    },
    {
        id: 3,
        date: "Jan 31, 2026",
        category: "Microeconomics",
        title: "The Economics of Uber's Surge Pricing",
        description: "How dynamic pricing balances supply and demand in real-time transportation markets.",
        concept: "Dynamic Pricing",
        definition: "A pricing strategy where prices fluctuate based on real-time supply and demand conditions.",
        chartData: {
            type: "bar",
            labels: ["Normal", "Rush Hour", "Rain", "New Year's Eve", "Airport"],
            data: [1.0, 1.8, 2.2, 4.5, 1.5],
            title: "Uber Surge Multipliers"
        },
        applications: {
            individual: "Plan travel timing to avoid peak pricing periods",
            household: "Budget for variable transportation costs",
            business: "Implement flexible pricing models for services",
            government: "Consider surge pricing for public utilities during peak demand"
        },
        newsExample: "During NYC's January 2026 snowstorm, Uber surge pricing reached 3.2x, encouraging more drivers to work and reducing wait times."
    },
    {
        id: 4,
        date: "Jan 30, 2026",
        category: "Macroeconomics",
        title: "Why Your Salary Doesn't Buy What It Used to",
        description: "Understanding inflation's impact on purchasing power and real wages.",
        concept: "Inflation and Real Wages",
        definition: "Inflation is the general increase in prices over time. Real wages are wages adjusted for inflation, showing actual purchasing power.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Nominal Wage",
                    data: [50000, 52000, 54000, 56000, 58000, 60000],
                    borderColor: "#2563eb"
                },
                {
                    label: "Real Wage (2020 dollars)",
                    data: [50000, 49500, 47800, 48200, 49100, 49800],
                    borderColor: "#dc2626"
                }
            ],
            title: "Nominal vs Real Wages"
        },
        applications: {
            individual: "Negotiate salary increases that exceed inflation rates",
            household: "Adjust spending habits based on real purchasing power",
            business: "Factor inflation into pricing and wage decisions",
            government: "Monitor inflation to guide monetary policy"
        },
        newsExample: "Despite 4% wage growth in 2025, workers' purchasing power declined due to 5.2% inflation, according to Bureau of Labor Statistics."
    },
    {
        id: 5,
        date: "Jan 29, 2026",
        category: "Market Structures",
        title: "Why There Are Only Two Major Phone Operating Systems",
        description: "Exploring how network effects create natural monopolies in tech markets.",
        concept: "Network Effects and Market Concentration",
        definition: "Network effects occur when a product becomes more valuable as more people use it, often leading to market dominance by few players.",
        tableData: {
            headers: ["Market", "Dominant Players", "Market Share", "Network Effect"],
            rows: [
                ["Mobile OS", "iOS, Android", "99%", "App ecosystem"],
                ["Social Media", "Meta, TikTok", "75%", "User connections"],
                ["Search", "Google", "92%", "Data quality"],
                ["E-commerce", "Amazon", "40%", "Seller/buyer network"]
            ]
        },
        applications: {
            individual: "Understand why switching costs are high in tech products",
            household: "Consider ecosystem lock-in when making tech purchases",
            business: "Build network effects into product strategy",
            government: "Regulate monopolistic practices in tech markets"
        },
        newsExample: "EU's Digital Markets Act 2025 forced Apple to allow third-party app stores, challenging iOS network effects."
    },
    {
        id: 6,
        date: "Jan 28, 2026",
        category: "Game Theory",
        title: "The Prisoner's Dilemma in Everyday Life",
        description: "How strategic thinking explains cooperation and competition in daily situations.",
        concept: "Game Theory and Nash Equilibrium",
        definition: "Game theory studies strategic decision-making where outcomes depend on actions of multiple participants. Nash equilibrium occurs when no player can improve by changing strategy alone.",
        tableData: {
            headers: ["Situation", "Cooperate", "Defect", "Real Example"],
            rows: [
                ["Traffic", "Follow rules", "Cut in line", "Rush hour merging"],
                ["Group projects", "Do fair share", "Free ride", "College assignments"],
                ["Climate action", "Reduce emissions", "Pollute freely", "Paris Agreement"],
                ["Price wars", "Maintain prices", "Cut prices", "Airline competition"]
            ]
        },
        applications: {
            individual: "Recognize when cooperation benefits everyone long-term",
            household: "Coordinate with neighbors on shared resources",
            business: "Understand competitive dynamics and strategic partnerships",
            government: "Design policies that encourage cooperation"
        },
        newsExample: "OPEC+ oil production cuts in 2025 demonstrated successful cooperation, maintaining higher prices despite individual incentives to overproduce."
    },
    {
        id: 7,
        date: "Jan 27, 2026",
        category: "Labor Economics",
        title: "Why Some Jobs Pay More Than Others",
        description: "Understanding wage differentials through human capital and market forces.",
        concept: "Human Capital and Wage Determination",
        definition: "Human capital refers to skills, knowledge, and experience that increase productivity. Wages reflect productivity, scarcity, and market demand for specific skills.",
        chartData: {
            type: "bar",
            labels: ["High School", "Bachelor's", "Master's", "PhD", "Professional"],
            data: [35000, 55000, 70000, 85000, 120000],
            title: "Median Annual Salary by Education Level"
        },
        applications: {
            individual: "Invest in education and skills that command higher wages",
            household: "Plan education investments for family members",
            business: "Understand labor costs and skill premiums in hiring",
            government: "Support education and training programs"
        },
        newsExample: "Tech worker shortage in 2025 drove software engineer salaries up 15%, while automation reduced demand for routine manufacturing jobs."
    },
    {
        id: 8,
        date: "Jan 26, 2026",
        category: "Public Policy",
        title: "The Economics of Universal Basic Income",
        description: "Analyzing the costs, benefits, and trade-offs of guaranteed income programs.",
        concept: "Transfer Payments and Welfare Economics",
        definition: "Transfer payments redistribute income from one group to another. Welfare economics studies how to maximize social well-being through policy interventions.",
        tableData: {
            headers: ["UBI Model", "Amount/Month", "Coverage", "Estimated Cost", "Key Trade-off"],
            rows: [
                ["Universal", "$1,000", "All adults", "$3.8T annually", "Massive fiscal burden"],
                ["Targeted", "$800", "Low income only", "$400B annually", "Administrative complexity"],
                ["Partial", "$500", "All adults", "$1.9T annually", "May not meet basic needs"],
                ["Negative Tax", "Variable", "Based on income", "$600B annually", "Work disincentives"]
            ]
        },
        applications: {
            individual: "Understand how social programs affect personal incentives",
            household: "Plan around potential policy changes",
            business: "Anticipate labor market effects of income policies",
            government: "Design efficient and effective social safety nets"
        },
        newsExample: "Finland's UBI pilot (2017-2018) showed modest employment gains but highlighted implementation challenges, influencing 2025 policy debates."
    },
    {
        id: 9,
        date: "Jan 25, 2026",
        category: "International Trade",
        title: "Why Your iPhone Costs More After Tariffs",
        description: "Understanding how trade barriers affect consumer prices and global supply chains.",
        concept: "Tariffs and Trade Protection",
        definition: "Tariffs are taxes on imported goods designed to protect domestic industries but often result in higher consumer prices and economic inefficiency.",
        chartData: {
            type: "line",
            labels: ["Pre-tariff", "10% Tariff", "20% Tariff", "30% Tariff"],
            data: [999, 1099, 1199, 1299],
            title: "iPhone Price Impact from Tariffs"
        },
        applications: {
            individual: "Understand how trade policy affects purchasing decisions",
            household: "Budget for potential price increases from trade disputes",
            business: "Diversify supply chains to minimize tariff exposure",
            government: "Balance protection of domestic industries with consumer welfare"
        },
        newsExample: "US-China trade tensions in 2025 led to 25% tariffs on electronics, increasing smartphone prices and pushing consumers toward domestic alternatives."
    },
    {
        id: 10,
        date: "Jan 24, 2026",
        category: "Financial Markets",
        title: "Why Stock Prices Move Before Company News",
        description: "Exploring market efficiency and information asymmetry in financial markets.",
        concept: "Efficient Market Hypothesis",
        definition: "Markets are efficient when prices reflect all available information. However, information asymmetry and insider knowledge can create price movements before public announcements.",
        tableData: {
            headers: ["Information Type", "Market Response Time", "Price Impact", "Example"],
            rows: [
                ["Public earnings", "Immediate", "Moderate", "Quarterly reports"],
                ["Insider knowledge", "Days before announcement", "Significant", "Merger rumors"],
                ["Analyst upgrades", "Minutes", "Small to moderate", "Price target changes"],
                ["Economic data", "Seconds", "Market-wide", "Fed interest rate decisions"]
            ]
        },
        applications: {
            individual: "Understand that beating the market consistently is extremely difficult",
            household: "Focus on long-term investing rather than timing the market",
            business: "Manage information disclosure carefully to comply with regulations",
            government: "Enforce insider trading laws to maintain market integrity"
        },
        newsExample: "Tesla stock rose 8% in the week before announcing record Q4 2025 deliveries, suggesting information leakage despite strict disclosure rules."
    },
    {
        id: 11,
        date: "Jan 23, 2026",
        category: "Environmental Economics",
        title: "The True Cost of Fast Fashion",
        description: "Examining externalities and the hidden environmental costs of cheap clothing.",
        concept: "Negative Externalities",
        definition: "Costs imposed on third parties who are not involved in the economic transaction, such as pollution or environmental damage.",
        tableData: {
            headers: ["Cost Type", "Fast Fashion", "Sustainable Fashion", "Who Bears Cost"],
            rows: [
                ["Water usage", "2,700L per t-shirt", "500L per t-shirt", "Local communities"],
                ["Chemical pollution", "High toxic runoff", "Minimal chemicals", "Ecosystems"],
                ["Worker wages", "$0.18/hour", "$3.50/hour", "Factory workers"],
                ["Landfill waste", "85% discarded yearly", "20% discarded yearly", "Future generations"]
            ]
        },
        applications: {
            individual: "Consider true costs when making purchasing decisions",
            household: "Buy fewer, higher-quality items that last longer",
            business: "Internalize environmental costs through sustainable practices",
            government: "Implement carbon taxes and environmental regulations"
        },
        newsExample: "H&M faced $4.3M fine in 2025 for misleading sustainability claims, highlighting growing scrutiny of fast fashion's environmental impact."
    },
    {
        id: 12,
        date: "Jan 22, 2026",
        category: "Monetary Policy",
        title: "How Interest Rates Affect Your Daily Life",
        description: "Understanding the Federal Reserve's influence on borrowing, saving, and spending decisions.",
        concept: "Monetary Policy Transmission",
        definition: "The process by which central bank policy decisions affect the broader economy through interest rates, credit availability, and spending behavior.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Fed Rate (%)",
                    data: [0.25, 0.25, 4.25, 5.25, 4.75, 3.50],
                    borderColor: "#2563eb"
                },
                {
                    label: "Mortgage Rate (%)",
                    data: [2.65, 2.96, 5.81, 7.12, 6.81, 5.95],
                    borderColor: "#dc2626"
                }
            ],
            title: "Interest Rate Trends"
        },
        applications: {
            individual: "Time major purchases and refinancing based on rate cycles",
            household: "Adjust savings and investment strategies with rate changes",
            business: "Plan capital investments around borrowing costs",
            government: "Coordinate fiscal policy with monetary policy"
        },
        newsExample: "Fed's 0.5% rate cut in December 2025 sparked housing market recovery, with mortgage applications up 35% in following month."
    },
    {
        id: 13,
        date: "Jan 21, 2026",
        category: "Behavioral Economics",
        title: "Why We Overspend on Subscriptions",
        description: "The psychology behind subscription services and mental accounting biases.",
        concept: "Mental Accounting and Subscription Bias",
        definition: "Mental accounting is how people categorize and treat money differently based on its source or intended use. Subscription bias leads to underestimating recurring costs.",
        tableData: {
            headers: ["Service Type", "Monthly Cost", "Annual Cost", "Perceived vs Actual"],
            rows: [
                ["Streaming (3 services)", "$45", "$540", "Feels like $15 each"],
                ["Gym membership", "$50", "$600", "Ignore if unused"],
                ["Software subscriptions", "$80", "$960", "Business expense mindset"],
                ["Food delivery premium", "$15", "$180", "Convenience worth it"]
            ]
        },
        applications: {
            individual: "Audit subscriptions quarterly and calculate annual costs",
            household: "Create subscription budget category",
            business: "Design subscription models that leverage psychological biases ethically",
            government: "Require clear disclosure of total subscription costs"
        },
        newsExample: "Average American spent $273/month on subscriptions in 2025, up 435% from 2018, with many unaware of total costs."
    },
    {
        id: 14,
        date: "Jan 20, 2026",
        category: "Labor Economics",
        title: "The Gig Economy's Impact on Worker Benefits",
        description: "Analyzing how independent contractor classification affects economic security.",
        concept: "Employment Classification and Benefits",
        definition: "The distinction between employees and independent contractors affects access to benefits, job security, and economic protections.",
        chartData: {
            type: "bar",
            labels: ["Health Insurance", "Retirement", "Unemployment", "Workers Comp", "Paid Leave"],
            datasets: [
                {
                    label: "Traditional Employee",
                    data: [85, 65, 100, 100, 75],
                    backgroundColor: "#2563eb"
                },
                {
                    label: "Gig Worker",
                    data: [35, 25, 0, 0, 0],
                    backgroundColor: "#dc2626"
                }
            ],
            title: "Benefit Coverage Rates (%)"
        },
        applications: {
            individual: "Factor in benefit costs when choosing employment type",
            household: "Plan for healthcare and retirement without employer benefits",
            business: "Understand true costs of different worker classifications",
            government: "Update labor laws for modern work arrangements"
        },
        newsExample: "California's AB5 law reclassified many gig workers as employees in 2025, increasing costs for companies but improving worker protections."
    },
    {
        id: 15,
        date: "Jan 19, 2026",
        category: "Public Policy",
        title: "The Economics of Healthcare Systems",
        description: "Comparing different healthcare models and their economic trade-offs.",
        concept: "Healthcare Market Failures",
        definition: "Healthcare markets fail due to information asymmetries, inelastic demand, and the inability to shop around during emergencies.",
        tableData: {
            headers: ["System Type", "Cost (% GDP)", "Coverage", "Wait Times", "Outcomes"],
            rows: [
                ["US Private", "17.8%", "92%", "Short", "Mixed"],
                ["UK Single-payer", "10.9%", "100%", "Long", "Good"],
                ["Germany Multi-payer", "11.7%", "100%", "Medium", "Excellent"],
                ["Singapore Hybrid", "4.5%", "100%", "Short", "Excellent"]
            ]
        },
        applications: {
            individual: "Understand insurance options and healthcare costs",
            household: "Budget for healthcare expenses and insurance premiums",
            business: "Factor healthcare costs into employee compensation",
            government: "Design efficient healthcare systems balancing cost and access"
        },
        newsExample: "US healthcare spending reached $4.5 trillion in 2025, highlighting ongoing debate over single-payer vs. market-based reforms."
    },
    {
        id: 16,
        date: "Jan 18, 2026",
        category: "Microeconomics",
        title: "Why Movie Theater Popcorn Costs So Much",
        description: "Understanding price discrimination and captive market pricing strategies.",
        concept: "Price Discrimination and Market Power",
        definition: "Charging different prices for the same product to different customers or in different situations to maximize profits.",
        chartData: {
            type: "bar",
            labels: ["Small Popcorn", "Medium Popcorn", "Large Popcorn", "Grocery Store"],
            data: [8.50, 10.50, 12.50, 3.00],
            title: "Popcorn Pricing Comparison ($)"
        },
        applications: {
            individual: "Recognize when you're in a captive market and plan accordingly",
            household: "Bring allowed snacks or eat before entertainment venues",
            business: "Use price discrimination ethically to maximize revenue",
            government: "Monitor for anti-competitive pricing practices"
        },
        newsExample: "AMC Theaters' 2025 earnings showed concessions generated 85% of profits despite being only 30% of revenue."
    },
    {
        id: 17,
        date: "Jan 17, 2026",
        category: "International Trade",
        title: "How Currency Exchange Affects Your Vacation Budget",
        description: "Understanding exchange rates and purchasing power parity in international travel.",
        concept: "Exchange Rates and Purchasing Power Parity",
        definition: "Exchange rates determine how much one currency is worth in another. PPP compares the relative value of currencies based on what they can buy.",
        tableData: {
            headers: ["Destination", "Exchange Rate", "Big Mac Price", "PPP Adjusted", "Vacation Cost"],
            rows: [
                ["Switzerland", "0.92 CHF/USD", "$7.50", "Overvalued 35%", "Very expensive"],
                ["Thailand", "35 THB/USD", "$2.10", "Undervalued 45%", "Very cheap"],
                ["UK", "0.79 GBP/USD", "$5.20", "Fair value", "Moderate"],
                ["Japan", "148 JPY/USD", "$3.80", "Undervalued 15%", "Reasonable"]
            ]
        },
        applications: {
            individual: "Choose travel destinations based on currency strength",
            household: "Time international purchases with favorable exchange rates",
            business: "Hedge currency risk in international operations",
            government: "Monitor exchange rates for trade competitiveness"
        },
        newsExample: "Dollar's 15% surge against Euro in 2025 made European vacations 20% cheaper for Americans, boosting tourism."
    },
    {
        id: 18,
        date: "Jan 16, 2026",
        category: "Behavioral Economics",
        title: "The Sunk Cost Fallacy in Daily Decisions",
        description: "Why we continue bad investments and how to make better choices.",
        concept: "Sunk Cost Fallacy",
        definition: "The tendency to continue investing in a losing proposition because of previously invested resources (time, money, effort).",
        tableData: {
            headers: ["Situation", "Sunk Cost", "Rational Decision", "Common Mistake"],
            rows: [
                ["Bad movie", "$15 ticket", "Leave if not enjoying", "Stay because paid"],
                ["Failing business", "$50K invested", "Close if unprofitable", "Keep investing"],
                ["Unhappy relationship", "3 years together", "End if incompatible", "Stay due to time invested"],
                ["Old car repairs", "$3K in repairs", "Buy new if repair > value", "Keep repairing"]
            ]
        },
        applications: {
            individual: "Focus on future costs and benefits, ignore past investments",
            household: "Make decisions based on current value, not past spending",
            business: "Regularly evaluate projects based on future potential",
            government: "Cancel ineffective programs regardless of past spending"
        },
        newsExample: "Concorde supersonic jet continued flying until 2003 despite losses, partly due to sunk cost fallacy in development investments."
    },
    {
        id: 19,
        date: "Jan 15, 2026",
        category: "Macroeconomics",
        title: "Why Some Countries Are Rich and Others Poor",
        description: "Exploring the factors that drive long-term economic growth and development.",
        concept: "Economic Growth and Development",
        definition: "Sustained increase in a country's productive capacity, typically measured by GDP per capita growth over time.",
        chartData: {
            type: "bar",
            labels: ["Singapore", "Switzerland", "USA", "China", "India", "Nigeria"],
            data: [72794, 83717, 70248, 12556, 2277, 2097],
            title: "GDP Per Capita (USD, 2025)"
        },
        applications: {
            individual: "Understand how institutions and education affect opportunities",
            household: "Consider economic factors when making location decisions",
            business: "Evaluate market potential based on economic development",
            government: "Focus on institutions, education, and infrastructure for growth"
        },
        newsExample: "Rwanda's GDP per capita doubled from 2015-2025 through institutional reforms and technology adoption, becoming Africa's growth model."
    },
    {
        id: 20,
        date: "Jan 14, 2026",
        category: "Market Structures",
        title: "The Economics of Platform Businesses",
        description: "How digital platforms create value by connecting different user groups.",
        concept: "Two-Sided Markets and Platform Economics",
        definition: "Markets where platforms facilitate interactions between two or more distinct user groups, with network effects benefiting all participants.",
        tableData: {
            headers: ["Platform", "Side A", "Side B", "Revenue Model", "Network Effect"],
            rows: [
                ["Uber", "Riders", "Drivers", "Commission", "More drivers = shorter wait times"],
                ["Amazon", "Buyers", "Sellers", "Fees + ads", "More sellers = better selection"],
                ["Facebook", "Users", "Advertisers", "Ad revenue", "More users = better targeting"],
                ["Airbnb", "Guests", "Hosts", "Commission", "More hosts = more options"]
            ]
        },
        applications: {
            individual: "Understand why platform switching is difficult",
            household: "Leverage platform competition for better deals",
            business: "Consider platform strategies for market entry",
            government: "Regulate platforms while preserving innovation benefits"
        },
        newsExample: "TikTok's creator fund reached $2B in 2025, demonstrating how platforms invest in one side to attract the other."
    },
    {
        id: 21,
        date: "Jan 13, 2026",
        category: "Public Policy",
        title: "The Economics of Minimum Wage",
        description: "Analyzing the complex effects of wage floors on employment and poverty.",
        concept: "Price Floors and Labor Markets",
        definition: "Minimum wage is a price floor in labor markets. Economic theory suggests it may reduce employment, but empirical evidence shows mixed results.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Federal Min Wage",
                    data: [7.25, 7.25, 7.25, 7.25, 7.25, 7.25],
                    borderColor: "#dc2626"
                },
                {
                    label: "Average State Min Wage",
                    data: [9.50, 10.20, 11.80, 13.25, 14.50, 15.75],
                    borderColor: "#2563eb"
                }
            ],
            title: "Minimum Wage Trends ($/hour)"
        },
        applications: {
            individual: "Understand how wage policies affect job opportunities",
            household: "Plan career development beyond minimum wage jobs",
            business: "Adapt to changing labor costs and productivity requirements",
            government: "Balance worker welfare with employment effects"
        },
        newsExample: "Seattle's $19.97 minimum wage in 2025 showed minimal job losses but significant automation in fast food, supporting modern economic research."
    },
    {
        id: 22,
        date: "Jan 12, 2026",
        category: "Financial Markets",
        title: "Why Cryptocurrency Prices Are So Volatile",
        description: "Understanding speculation, utility, and market psychology in digital assets.",
        concept: "Asset Bubbles and Speculation",
        definition: "Asset prices driven by speculation rather than fundamental value, leading to extreme volatility and potential bubbles.",
        chartData: {
            type: "line",
            labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
            data: [42000, 65000, 38000, 55000, 28000, 48000],
            title: "Bitcoin Price Volatility 2025 ($)"
        },
        applications: {
            individual: "Understand high-risk nature of speculative investments",
            household: "Limit crypto exposure to money you can afford to lose",
            business: "Consider blockchain technology separate from cryptocurrency speculation",
            government: "Regulate to prevent fraud while allowing innovation"
        },
        newsExample: "Bitcoin's 60% price swing in 2025 highlighted ongoing debate over whether crypto is currency, commodity, or speculative asset."
    },
    {
        id: 23,
        date: "Jan 11, 2026",
        category: "Environmental Economics",
        title: "Carbon Pricing and Climate Policy",
        description: "How market mechanisms can address climate change through carbon taxes and cap-and-trade.",
        concept: "Pigouvian Taxes and Cap-and-Trade",
        definition: "Market-based solutions to environmental problems: carbon taxes directly price emissions, while cap-and-trade creates a market for emission permits.",
        tableData: {
            headers: ["Policy Tool", "How It Works", "Pros", "Cons"],
            rows: [
                ["Carbon Tax", "Direct price on emissions", "Simple, predictable", "Regressive, political resistance"],
                ["Cap-and-Trade", "Tradeable emission permits", "Market efficiency", "Complex, volatile prices"],
                ["Regulations", "Mandatory standards", "Certainty of outcomes", "Higher costs, less flexibility"],
                ["Subsidies", "Support clean energy", "Encourages innovation", "Expensive, market distortions"]
            ]
        },
        applications: {
            individual: "Consider carbon footprint in purchasing decisions",
            household: "Invest in energy efficiency and clean technology",
            business: "Prepare for carbon pricing and regulatory changes",
            government: "Design effective climate policies balancing costs and benefits"
        },
        newsExample: "EU's carbon price hit record €89/ton in 2025, making renewable energy more competitive and driving industrial transformation."
    },
    {
        id: 24,
        date: "Jan 10, 2026",
        category: "Labor Economics",
        title: "The Economics of Remote Work",
        description: "How location flexibility changes labor markets and wage determination.",
        concept: "Geographic Labor Markets and Wage Arbitrage",
        definition: "Remote work allows companies to access global talent pools, potentially reducing wages in high-cost areas while increasing them in low-cost regions.",
        chartData: {
            type: "bar",
            labels: ["San Francisco", "Austin", "Denver", "Atlanta", "Remote Global"],
            datasets: [
                {
                    label: "Pre-COVID Salary",
                    data: [180000, 120000, 110000, 95000, 0],
                    backgroundColor: "#94a3b8"
                },
                {
                    label: "2025 Remote Salary",
                    data: [165000, 125000, 115000, 105000, 85000],
                    backgroundColor: "#2563eb"
                }
            ],
            title: "Software Engineer Salaries ($)"
        },
        applications: {
            individual: "Leverage remote work for better opportunities or lower living costs",
            household: "Consider relocating to lower-cost areas while maintaining income",
            business: "Access global talent while managing wage expectations",
            government: "Adapt tax and regulation policies for remote work economy"
        },
        newsExample: "Major tech companies cut salaries 10-20% for remote workers in 2025, while smaller cities saw wage increases as talent relocated."
    },
    {
        id: 25,
        date: "Jan 9, 2026",
        category: "Behavioral Economics",
        title: "Why We're Bad at Saving for Retirement",
        description: "Understanding present bias and how to overcome it for long-term financial planning.",
        concept: "Present Bias and Hyperbolic Discounting",
        definition: "The tendency to overvalue immediate rewards relative to future benefits, leading to inadequate saving and planning.",
        tableData: {
            headers: ["Age Started", "Monthly Savings", "Age 65 Balance", "Difference from Age 25"],
            rows: [
                ["25", "$300", "$878,570", "Baseline"],
                ["35", "$300", "$367,356", "-$511,214"],
                ["45", "$300", "$149,036", "-$729,534"],
                ["55", "$300", "$46,435", "-$832,135"]
            ]
        },
        applications: {
            individual: "Start saving early and automate contributions",
            household: "Use automatic enrollment and escalation in retirement plans",
            business: "Design retirement benefits that overcome behavioral biases",
            government: "Implement policies that encourage long-term saving"
        },
        newsExample: "Auto-enrollment in 401(k) plans increased participation from 65% to 95% in 2025, demonstrating power of behavioral interventions."
    },
    {
        id: 26,
        date: "Jan 8, 2026",
        category: "Game Theory",
        title: "The Economics of Auctions",
        description: "How different auction formats affect bidding strategies and outcomes.",
        concept: "Auction Theory and Strategic Bidding",
        definition: "Different auction formats create different incentives for bidders, affecting final prices and efficiency of allocation.",
        tableData: {
            headers: ["Auction Type", "Bidding Strategy", "Seller Revenue", "Example"],
            rows: [
                ["English (ascending)", "Bid up to true value", "High", "Art auctions"],
                ["Dutch (descending)", "Jump in early", "Variable", "Flower markets"],
                ["Sealed bid", "Bid below true value", "Moderate", "Government contracts"],
                ["Vickrey (2nd price)", "Bid true value", "Efficient", "Online advertising"]
            ]
        },
        applications: {
            individual: "Understand bidding psychology in online auctions",
            household: "Set maximum bids in advance to avoid overbidding",
            business: "Choose auction format based on revenue goals",
            government: "Design auctions for spectrum, contracts, and public assets"
        },
        newsExample: "Google's ad auction generated $307B revenue in 2025 using Vickrey-style pricing that encourages truthful bidding."
    },
    {
        id: 27,
        date: "Jan 7, 2026",
        category: "International Trade",
        title: "Supply Chain Economics and Global Resilience",
        description: "How efficiency vs. resilience trade-offs shape modern supply chains.",
        concept: "Supply Chain Optimization and Risk Management",
        definition: "Balancing cost efficiency with supply chain resilience against disruptions like pandemics, natural disasters, and geopolitical tensions.",
        chartData: {
            type: "bar",
            labels: ["Single Source", "Dual Source", "Regional Diverse", "Global Diverse"],
            datasets: [
                {
                    label: "Cost Efficiency",
                    data: [95, 85, 75, 65],
                    backgroundColor: "#2563eb"
                },
                {
                    label: "Resilience Score",
                    data: [20, 45, 70, 90],
                    backgroundColor: "#059669"
                }
            ],
            title: "Supply Chain Trade-offs"
        },
        applications: {
            individual: "Diversify suppliers for important purchases",
            household: "Keep emergency supplies for potential disruptions",
            business: "Balance cost savings with supply chain risk management",
            government: "Ensure strategic supply security for critical goods"
        },
        newsExample: "Semiconductor shortage cost automakers $210B in 2025, prompting shift from just-in-time to just-in-case supply strategies."
    },
    {
        id: 28,
        date: "Jan 6, 2026",
        category: "Public Policy",
        title: "The Economics of Education Investment",
        description: "Analyzing education as both private investment and public good.",
        concept: "Human Capital and Positive Externalities",
        definition: "Education creates both private returns (higher wages) and social benefits (innovation, civic engagement, reduced crime).",
        tableData: {
            headers: ["Education Level", "Private Return", "Social Return", "Total Benefit"],
            rows: [
                ["Primary", "13% annually", "8% annually", "21% annually"],
                ["Secondary", "10% annually", "6% annually", "16% annually"],
                ["University", "8% annually", "4% annually", "12% annually"],
                ["Vocational", "12% annually", "5% annually", "17% annually"]
            ]
        },
        applications: {
            individual: "Invest in education and skills throughout career",
            household: "Support children's education as long-term investment",
            business: "Provide training and development for employees",
            government: "Fund education based on both private and social returns"
        },
        newsExample: "Finland's education investment of 6.8% of GDP in 2025 correlated with highest innovation index ranking and social mobility."
    },
    {
        id: 29,
        date: "Jan 5, 2026",
        category: "Microeconomics",
        title: "The Economics of Brand Loyalty",
        description: "How companies create switching costs and capture consumer surplus.",
        concept: "Switching Costs and Consumer Lock-in",
        definition: "Costs (monetary, time, psychological) that consumers face when changing from one product to another, allowing companies to charge premium prices.",
        tableData: {
            headers: ["Industry", "Switching Cost Type", "Lock-in Strength", "Price Premium"],
            rows: [
                ["Banking", "Convenience, auto-pay setup", "High", "15-25%"],
                ["Software", "Learning curve, data migration", "Very High", "30-50%"],
                ["Airlines", "Frequent flyer miles", "Medium", "10-20%"],
                ["Smartphones", "Ecosystem integration", "Very High", "20-40%"]
            ]
        },
        applications: {
            individual: "Evaluate total switching costs before committing to products",
            household: "Regularly review services to ensure competitive pricing",
            business: "Build legitimate switching costs through superior integration",
            government: "Prevent artificial switching costs that harm competition"
        },
        newsExample: "Apple's ecosystem integration generated $365B services revenue in 2025, demonstrating value of high switching costs."
    },
    {
        id: 30,
        date: "Jan 4, 2026",
        category: "Macroeconomics",
        title: "Understanding Economic Cycles and Recessions",
        description: "How economies naturally expand and contract, and what triggers recessions.",
        concept: "Business Cycles and Economic Indicators",
        definition: "Recurring patterns of economic expansion and contraction, typically measured by GDP growth, employment, and other leading indicators.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "GDP Growth (%)",
                    data: [-3.4, 5.7, 2.1, 2.5, 2.8, 3.1],
                    borderColor: "#2563eb"
                },
                {
                    label: "Unemployment (%)",
                    data: [8.1, 5.4, 3.6, 3.7, 4.0, 3.8],
                    borderColor: "#dc2626"
                }
            ],
            title: "Economic Recovery 2020-2025"
        },
        applications: {
            individual: "Build emergency funds during good times for economic downturns",
            household: "Avoid major debt during economic peaks",
            business: "Plan for cyclical demand and maintain cash reserves",
            government: "Use counter-cyclical fiscal policy to smooth economic cycles"
        },
        newsExample: "Inverted yield curve in early 2025 correctly predicted economic slowdown, though recession was avoided through swift policy response."
    },
    {
        id: 31,
        category: "Behavioral Economics",
        title: "The Paradox of Choice in Modern Shopping",
        description: "Why having too many options can actually make us less happy with our purchases.",
        concept: "Choice Overload and Decision Fatigue",
        definition: "The phenomenon where having too many options leads to anxiety, decision paralysis, and decreased satisfaction with chosen outcomes.",
        tableData: {
            headers: ["Number of Options", "Purchase Rate", "Satisfaction Level", "Decision Time"],
            rows: [
                ["6 options", "30%", "High", "2 minutes"],
                ["24 options", "3%", "Medium", "8 minutes"],
                ["50+ options", "1%", "Low", "15+ minutes"],
                ["Curated 3-5", "45%", "Very High", "1 minute"]
            ]
        },
        applications: {
            individual: "Limit options when making decisions to reduce stress",
            household: "Create simple decision frameworks for family choices",
            business: "Offer curated selections rather than overwhelming catalogs",
            government: "Design public services with clear, limited pathways"
        },
        newsExample: "Netflix's algorithm reduces choice overload by curating personalized recommendations from 15,000+ titles to manageable selections."
    },
    {
        id: 32,
        category: "Environmental Economics",
        title: "Carbon Pricing and Market Solutions to Climate Change",
        description: "How putting a price on carbon emissions creates incentives for cleaner technology.",
        concept: "Externalities and Pigouvian Taxes",
        definition: "Market-based approaches that internalize environmental costs by making polluters pay for the social damage of their emissions.",
        chartData: {
            type: "bar",
            labels: ["No Carbon Price", "$25/ton", "$50/ton", "$100/ton"],
            data: [100, 85, 65, 40],
            title: "CO2 Emissions Reduction by Carbon Price"
        },
        applications: {
            individual: "Support carbon pricing policies and choose low-carbon products",
            household: "Invest in energy efficiency when carbon costs are reflected in prices",
            business: "Innovate in clean technology when carbon pricing creates market opportunities",
            government: "Implement carbon pricing to achieve climate goals efficiently"
        },
        newsExample: "EU's carbon price reached €90/ton in 2025, driving record investments in renewable energy and industrial decarbonization."
    },
    {
        id: 33,
        category: "Game Theory",
        title: "The Prisoner's Dilemma in Everyday Life",
        description: "Understanding cooperation and competition in situations from traffic to international relations.",
        concept: "Nash Equilibrium and Cooperation",
        definition: "A situation where each player's strategy is optimal given the other players' strategies, often leading to suboptimal outcomes for all.",
        tableData: {
            headers: ["Scenario", "Cooperate Outcome", "Defect Outcome", "Real-World Example"],
            rows: [
                ["Traffic", "Smooth flow", "Gridlock", "Merging lanes"],
                ["Arms Race", "Peace dividend", "Mutual destruction", "Military spending"],
                ["Price Wars", "Stable profits", "Race to bottom", "Airline pricing"],
                ["Climate Action", "Global benefit", "Free riding", "Paris Agreement"]
            ]
        },
        applications: {
            individual: "Recognize when cooperation benefits everyone long-term",
            household: "Build trust and reciprocity in relationships",
            business: "Create win-win partnerships rather than zero-sum competition",
            government: "Design institutions that encourage cooperation"
        },
        newsExample: "OPEC's production agreements demonstrate how cooperation can benefit all members despite individual incentives to cheat."
    },
    {
        id: 34,
        category: "Labor Economics",
        title: "The Gig Economy and the Future of Work",
        description: "How technology is reshaping employment relationships and worker protections.",
        concept: "Labor Market Flexibility vs. Security",
        definition: "The trade-off between employment flexibility (easy hiring/firing) and job security (stable employment with benefits).",
        chartData: {
            type: "line",
            labels: ["2015", "2017", "2019", "2021", "2023", "2025"],
            data: [4, 8, 12, 18, 24, 28],
            title: "Gig Economy Workers (% of workforce)"
        },
        applications: {
            individual: "Develop portable skills and build personal safety nets",
            household: "Plan for irregular income and lack of traditional benefits",
            business: "Balance flexibility with worker investment and retention",
            government: "Update labor laws for new forms of work"
        },
        newsExample: "California's AB5 law reclassified many gig workers as employees, sparking national debate on worker classification."
    },
    {
        id: 35,
        category: "Monetary Policy",
        title: "How Interest Rates Affect Your Daily Life",
        description: "The ripple effects of central bank decisions on mortgages, savings, and economic growth.",
        concept: "Monetary Policy Transmission",
        definition: "The process by which central bank interest rate changes affect the broader economy through banking, investment, and consumption channels.",
        tableData: {
            headers: ["Interest Rate Change", "Mortgage Impact", "Savings Impact", "Economic Effect"],
            rows: [
                ["+1% increase", "Higher monthly payments", "Better savings returns", "Slower growth"],
                ["+2% increase", "Significant payment rise", "Attractive CDs", "Recession risk"],
                ["-1% decrease", "Lower payments", "Reduced savings income", "Stimulus effect"],
                ["-2% decrease", "Refinancing boom", "Near-zero returns", "Asset bubbles"]
            ]
        },
        applications: {
            individual: "Time major purchases and refinancing with rate cycles",
            household: "Adjust savings and debt strategies based on rate environment",
            business: "Plan capital investments around borrowing costs",
            government: "Coordinate fiscal policy with monetary policy"
        },
        newsExample: "Fed's 2025 rate cuts from 5.5% to 3.5% sparked housing market recovery and increased business investment."
    },
    {
        id: 36,
        category: "International Trade",
        title: "Trade Wars and Consumer Prices",
        description: "How tariffs and trade disputes ultimately affect what you pay at the store.",
        concept: "Tariff Incidence and Deadweight Loss",
        definition: "Tariffs are typically passed on to consumers as higher prices, while reducing overall economic efficiency through deadweight losses.",
        chartData: {
            type: "bar",
            labels: ["Electronics", "Clothing", "Cars", "Food"],
            datasets: [
                {
                    label: "Pre-Tariff Price",
                    data: [500, 50, 25000, 100],
                    backgroundColor: "#3b82f6"
                },
                {
                    label: "Post-Tariff Price",
                    data: [575, 60, 27500, 110],
                    backgroundColor: "#ef4444"
                }
            ],
            title: "Consumer Price Impact of 25% Tariffs"
        },
        applications: {
            individual: "Understand that tariff costs are passed to consumers",
            household: "Budget for price increases during trade disputes",
            business: "Diversify supply chains to reduce tariff exposure",
            government: "Consider consumer impact when implementing trade policy"
        },
        newsExample: "2025 steel tariffs increased car prices by average $1,200, demonstrating how trade protection costs consumers."
    },
    {
        id: 37,
        category: "Financial Markets",
        title: "Understanding Stock Market Volatility",
        description: "Why markets fluctuate and what it means for long-term investors.",
        concept: "Market Efficiency and Behavioral Biases",
        definition: "Markets process information quickly but are subject to psychological biases that create short-term volatility around long-term value.",
        tableData: {
            headers: ["Market Condition", "Investor Emotion", "Typical Reaction", "Optimal Strategy"],
            rows: [
                ["Bull Market", "Greed/Euphoria", "Buy high", "Take profits gradually"],
                ["Bear Market", "Fear/Panic", "Sell low", "Buy quality at discount"],
                ["Volatility", "Uncertainty", "Frequent trading", "Stay the course"],
                ["Correction", "Anxiety", "Market timing", "Rebalance portfolio"]
            ]
        },
        applications: {
            individual: "Maintain long-term perspective despite short-term volatility",
            household: "Dollar-cost average to reduce timing risk",
            business: "Focus on fundamentals rather than stock price fluctuations",
            government: "Maintain stable regulatory environment for markets"
        },
        newsExample: "2025's 35% market volatility created opportunities for disciplined investors while emotional traders lost money."
    },
    {
        id: 38,
        category: "Public Policy",
        title: "Universal Basic Income: Economics and Implementation",
        description: "Analyzing the potential benefits and challenges of providing unconditional cash payments to all citizens.",
        concept: "Income Effects vs. Substitution Effects",
        definition: "UBI provides income without work requirements, potentially reducing work incentives (substitution effect) while enabling better choices (income effect).",
        chartData: {
            type: "line",
            labels: ["$0", "$500", "$1000", "$1500", "$2000"],
            datasets: [
                {
                    label: "Work Hours",
                    data: [40, 38, 35, 30, 25],
                    borderColor: "#dc2626"
                },
                {
                    label: "Life Satisfaction",
                    data: [5, 6.2, 7.1, 7.8, 8.2],
                    borderColor: "#16a34a"
                }
            ],
            title: "UBI Amount vs. Work Hours and Satisfaction"
        },
        applications: {
            individual: "Consider how guaranteed income might change career choices",
            household: "Evaluate trade-offs between security and work incentives",
            business: "Prepare for potential changes in labor supply",
            government: "Design UBI to maximize benefits while minimizing work disincentives"
        },
        newsExample: "Finland's UBI pilot showed 2% reduction in work hours but 17% increase in entrepreneurship and mental health."
    },
    {
        id: 39,
        category: "Microeconomics",
        title: "The Economics of Subscription Services",
        description: "How companies use subscription models to increase revenue and customer lifetime value.",
        concept: "Consumer Surplus and Price Discrimination",
        definition: "Subscriptions allow companies to capture more consumer surplus through bundling and reduce price sensitivity through convenience.",
        tableData: {
            headers: ["Service Type", "Monthly Cost", "Usage Rate", "Cost per Use"],
            rows: [
                ["Streaming (Heavy User)", "$15", "60 hours", "$0.25/hour"],
                ["Streaming (Light User)", "$15", "5 hours", "$3.00/hour"],
                ["Gym (Regular)", "$50", "12 visits", "$4.17/visit"],
                ["Gym (Occasional)", "$50", "2 visits", "$25.00/visit"]
            ]
        },
        applications: {
            individual: "Track actual usage to evaluate subscription value",
            household: "Regularly audit and cancel unused subscriptions",
            business: "Use subscriptions to create predictable revenue streams",
            government: "Ensure transparent pricing and easy cancellation"
        },
        newsExample: "Average household has 12 subscriptions costing $273/month, with 42% going unused according to 2025 studies."
    },
    {
        id: 40,
        category: "Behavioral Economics",
        title: "Mental Accounting and Money Management",
        description: "Why we treat money differently depending on its source and intended use.",
        concept: "Mental Accounting and Fungibility",
        definition: "People categorize money into different mental accounts (salary, bonus, gift) and spend it differently, even though money is fungible.",
        tableData: {
            headers: ["Money Source", "Spending Tendency", "Savings Rate", "Risk Tolerance"],
            rows: [
                ["Regular Salary", "Careful/Planned", "15-20%", "Conservative"],
                ["Tax Refund", "Treat/Splurge", "5-10%", "Moderate"],
                ["Bonus", "Major Purchase", "25-30%", "Moderate"],
                ["Gambling Winnings", "Frivolous", "0-5%", "High Risk"]
            ]
        },
        applications: {
            individual: "Treat all money equally regardless of source",
            household: "Create unified budgeting approach across income sources",
            business: "Understand customer spending patterns by income type",
            government: "Design tax policy considering mental accounting effects"
        },
        newsExample: "2025 stimulus payments were spent 3x faster than regular income, demonstrating mental accounting in action."
    },
    {
        id: 41,
        category: "Supply & Demand",
        title: "Housing Shortage and Rent Control Economics",
        description: "Understanding how housing regulations affect supply, demand, and affordability.",
        concept: "Price Controls and Market Distortions",
        definition: "Rent control creates shortages by keeping prices below market equilibrium, reducing incentives for new construction and maintenance.",
        chartData: {
            type: "line",
            labels: ["Year 1", "Year 3", "Year 5", "Year 7", "Year 10"],
            datasets: [
                {
                    label: "Available Units (Rent Control)",
                    data: [1000, 950, 850, 700, 500],
                    borderColor: "#dc2626"
                },
                {
                    label: "Available Units (Market Rate)",
                    data: [1000, 1100, 1300, 1600, 2000],
                    borderColor: "#16a34a"
                }
            ],
            title: "Housing Supply Under Different Policies"
        },
        applications: {
            individual: "Understand long-term effects of housing policies on availability",
            household: "Consider total housing costs including quality and availability",
            business: "Evaluate investment incentives under different regulatory regimes",
            government: "Balance affordability goals with supply incentives"
        },
        newsExample: "San Francisco's rent control led to 15% reduction in rental supply over decade, worsening housing shortage."
    },
    {
        id: 42,
        category: "Macroeconomics",
        title: "Inflation and Your Purchasing Power",
        description: "How rising prices erode the value of money and affect different groups differently.",
        concept: "Inflation and Real vs. Nominal Values",
        definition: "Inflation reduces purchasing power over time, with effects varying by income level, age, and spending patterns.",
        tableData: {
            headers: ["Income Group", "Inflation Impact", "Coping Strategies", "Policy Implications"],
            rows: [
                ["Fixed Income", "High negative", "Limited options", "COLA adjustments needed"],
                ["Low Income", "High negative", "Substitute goods", "Targeted assistance"],
                ["Middle Income", "Moderate negative", "Delay purchases", "Wage negotiations"],
                ["High Income", "Low negative", "Asset protection", "Investment diversification"]
            ]
        },
        applications: {
            individual: "Invest in inflation-protected assets during high inflation",
            household: "Adjust budgets and spending patterns for price changes",
            business: "Implement dynamic pricing and cost management",
            government: "Target inflation policies to protect vulnerable groups"
        },
        newsExample: "2025's 4.2% inflation hit food and energy hardest, disproportionately affecting lower-income households."
    },
    {
        id: 43,
        category: "Game Theory",
        title: "Auction Theory and Bidding Strategies",
        description: "Understanding different auction formats and optimal bidding strategies.",
        concept: "Auction Theory and Winner's Curse",
        definition: "Different auction formats create different incentives, with winner's curse occurring when winning bidders systematically overpay.",
        tableData: {
            headers: ["Auction Type", "Optimal Strategy", "Revenue for Seller", "Risk for Buyer"],
            rows: [
                ["English (ascending)", "Bid up to true value", "High", "Low"],
                ["Dutch (descending)", "Calculate optimal stop point", "Medium", "Medium"],
                ["Sealed bid", "Bid below true value", "Variable", "High"],
                ["Reserve price", "Consider minimum threshold", "Higher", "Medium"]
            ]
        },
        applications: {
            individual: "Set maximum bid limits before participating in auctions",
            household: "Understand real estate bidding dynamics",
            business: "Choose auction format to maximize revenue",
            government: "Design spectrum auctions for optimal outcomes"
        },
        newsExample: "5G spectrum auctions raised $81B in 2025, with carriers using sophisticated bidding algorithms."
    },
    {
        id: 44,
        category: "Environmental Economics",
        title: "The Economics of Renewable Energy Transition",
        description: "How falling costs and policy support are driving the shift to clean energy.",
        concept: "Learning Curves and Network Effects",
        definition: "Renewable energy costs fall with cumulative production (learning curve) while creating positive network effects through grid integration.",
        chartData: {
            type: "line",
            labels: ["2015", "2017", "2019", "2021", "2023", "2025"],
            datasets: [
                {
                    label: "Solar Cost ($/MWh)",
                    data: [125, 95, 68, 48, 35, 28],
                    borderColor: "#f59e0b"
                },
                {
                    label: "Wind Cost ($/MWh)",
                    data: [80, 65, 52, 41, 33, 29],
                    borderColor: "#10b981"
                },
                {
                    label: "Coal Cost ($/MWh)",
                    data: [95, 98, 102, 108, 115, 120],
                    borderColor: "#6b7280"
                }
            ],
            title: "Energy Cost Trends 2015-2025"
        },
        applications: {
            individual: "Invest in renewable energy for long-term savings",
            household: "Consider solar panels and electric vehicles",
            business: "Plan energy strategy around cost trends",
            government: "Accelerate transition through smart policy design"
        },
        newsExample: "Renewable energy became cheapest electricity source globally in 2025, accelerating coal plant retirements."
    },
    {
        id: 45,
        category: "Labor Economics",
        title: "Automation and the Future of Jobs",
        description: "How technological change affects employment, wages, and skill requirements.",
        concept: "Technological Unemployment and Skill-Biased Change",
        definition: "Automation eliminates some jobs while creating others, typically favoring higher-skilled workers and increasing wage inequality.",
        tableData: {
            headers: ["Job Category", "Automation Risk", "Wage Trend", "Adaptation Strategy"],
            rows: [
                ["Routine Manual", "High (80%)", "Declining", "Reskill to service jobs"],
                ["Routine Cognitive", "High (70%)", "Declining", "Move to creative/social roles"],
                ["Non-routine Manual", "Low (20%)", "Stable", "Enhance with technology"],
                ["Non-routine Cognitive", "Low (10%)", "Rising", "Continuous learning"]
            ]
        },
        applications: {
            individual: "Develop skills that complement rather than compete with AI",
            household: "Invest in education and adaptable skill development",
            business: "Retrain workers rather than simply replacing them",
            government: "Provide transition support and education funding"
        },
        newsExample: "AI eliminated 2M routine jobs in 2025 but created 2.4M new roles in AI development and human-AI collaboration."
    },
    {
        id: 46,
        category: "Financial Markets",
        title: "Cryptocurrency and Digital Asset Economics",
        description: "Understanding the economic principles behind digital currencies and blockchain technology.",
        concept: "Network Effects and Digital Scarcity",
        definition: "Cryptocurrencies derive value from network effects (more users = more valuable) and artificial scarcity through algorithmic supply limits.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Bitcoin Price ($000s)",
                    data: [29, 47, 20, 27, 42, 58],
                    borderColor: "#f59e0b"
                },
                {
                    label: "Active Wallets (Millions)",
                    data: [52, 76, 68, 81, 95, 118],
                    borderColor: "#3b82f6"
                }
            ],
            title: "Bitcoin Price vs. Network Adoption"
        },
        applications: {
            individual: "Understand high volatility and speculative nature of crypto",
            household: "Limit crypto to small percentage of investment portfolio",
            business: "Evaluate blockchain for efficiency gains, not just speculation",
            government: "Regulate to prevent fraud while enabling innovation"
        },
        newsExample: "Bitcoin ETF approval in 2025 brought institutional adoption but also increased correlation with traditional markets."
    },
    {
        id: 47,
        category: "Public Policy",
        title: "Healthcare Economics and Market Failures",
        description: "Why healthcare markets don't work like normal markets and what policies can help.",
        concept: "Information Asymmetry and Moral Hazard",
        definition: "Healthcare suffers from information gaps between patients and providers, plus moral hazard where insurance reduces cost sensitivity.",
        tableData: {
            headers: ["Market Failure", "Healthcare Example", "Economic Impact", "Policy Solution"],
            rows: [
                ["Information Asymmetry", "Patients can't evaluate treatment", "Overtreatment", "Quality reporting"],
                ["Moral Hazard", "Insurance reduces price sensitivity", "Overconsumption", "Cost sharing"],
                ["Adverse Selection", "Sick people buy more insurance", "Premium spiral", "Universal coverage"],
                ["Externalities", "Vaccination benefits others", "Underinvestment", "Public provision"]
            ]
        },
        applications: {
            individual: "Seek second opinions for major treatments",
            household: "Understand insurance incentives and out-of-pocket costs",
            business: "Design health benefits to align incentives",
            government: "Address market failures through targeted interventions"
        },
        newsExample: "US healthcare spending reached 19.7% of GDP in 2025, double the OECD average, highlighting system inefficiencies."
    },
    {
        id: 48,
        category: "Behavioral Economics",
        title: "Social Media and the Attention Economy",
        description: "How platforms compete for your attention and the economic value of engagement.",
        concept: "Attention as Scarce Resource",
        definition: "Human attention is limited and valuable, creating markets where platforms compete to capture and monetize user engagement.",
        tableData: {
            headers: ["Platform Strategy", "User Behavior", "Revenue Model", "Social Cost"],
            rows: [
                ["Infinite scroll", "Extended sessions", "More ad views", "Reduced productivity"],
                ["Algorithmic feeds", "Higher engagement", "Better targeting", "Echo chambers"],
                ["Notifications", "Frequent returns", "Increased usage", "Attention fragmentation"],
                ["Social validation", "Content creation", "User-generated content", "Mental health impacts"]
            ]
        },
        applications: {
            individual: "Set boundaries and use attention management tools",
            household: "Create device-free times and spaces",
            business: "Respect user attention and provide genuine value",
            government: "Regulate addictive design patterns"
        },
        newsExample: "Average person spent 2.5 hours daily on social media in 2025, generating $127 in annual ad revenue per user."
    },
    {
        id: 49,
        category: "International Trade",
        title: "Supply Chain Resilience vs. Efficiency",
        description: "The trade-off between cost optimization and risk management in global supply chains.",
        concept: "Just-in-Time vs. Just-in-Case",
        definition: "Efficient supply chains minimize inventory costs but create vulnerability to disruptions, while resilient chains cost more but handle shocks better.",
        chartData: {
            type: "bar",
            labels: ["Just-in-Time", "Hybrid Model", "Just-in-Case"],
            datasets: [
                {
                    label: "Normal Costs",
                    data: [100, 115, 130],
                    backgroundColor: "#3b82f6"
                },
                {
                    label: "Crisis Costs",
                    data: [300, 150, 135],
                    backgroundColor: "#ef4444"
                }
            ],
            title: "Supply Chain Cost Comparison"
        },
        applications: {
            individual: "Build personal resilience through emergency funds and backup plans",
            household: "Balance cost savings with preparedness",
            business: "Diversify suppliers and build strategic inventory",
            government: "Ensure supply security for critical goods"
        },
        newsExample: "Semiconductor shortage cost automakers $210B in 2025, prompting shift from just-in-time to just-in-case supply strategies."
    },
    {
        id: 50,
        category: "Microeconomics",
        title: "Platform Economics and Network Effects",
        description: "How digital platforms create value through connecting users and the winner-take-all dynamics.",
        concept: "Two-Sided Markets and Network Effects",
        definition: "Platforms create value by connecting different user groups, with network effects making the platform more valuable as more users join.",
        tableData: {
            headers: ["Platform Type", "User Groups", "Network Effect", "Monetization"],
            rows: [
                ["Social Media", "Users & Advertisers", "More users = more data", "Advertising revenue"],
                ["E-commerce", "Buyers & Sellers", "More sellers = more choice", "Transaction fees"],
                ["Ride-sharing", "Riders & Drivers", "More drivers = shorter waits", "Commission per ride"],
                ["App Stores", "Users & Developers", "More apps = more value", "Revenue sharing"]
            ]
        },
        applications: {
            individual: "Understand platform lock-in and switching costs",
            household: "Evaluate platform fees and alternatives",
            business: "Build network effects to create competitive moats",
            government: "Prevent monopolistic behavior in platform markets"
        },
        newsExample: "Amazon's marketplace generated $140B in third-party sales in 2025, demonstrating platform economics at scale."
    },
    {
        id: 51,
        category: "Microeconomics",
        title: "Scarcity and Opportunity Cost in Kenya's Agriculture",
        description: "Understanding how Kenyan farmers make choices about crop allocation given limited land and water resources.",
        concept: "Scarcity, Choice and Opportunity Cost",
        definition: "Scarcity forces economic agents to make choices, and every choice involves giving up the next best alternative (opportunity cost).",
        tableData: {
            headers: ["Crop Choice", "Expected Revenue (KSh/acre)", "Water Requirement", "Opportunity Cost"],
            rows: [
                ["Coffee", "150,000", "High", "Maize + vegetables"],
                ["Maize", "80,000", "Medium", "Coffee export earnings"],
                ["Vegetables", "120,000", "Low", "Food security"],
                ["Tea", "200,000", "Medium", "Diversified income"]
            ]
        },
        applications: {
            individual: "Prioritize spending on essential needs when income is limited",
            household: "Choose between children's education and immediate consumption",
            business: "Allocate limited capital between expansion and equipment upgrade",
            government: "Balance spending between infrastructure and social services"
        },
        newsExample: "Kenyan farmers in Meru County shifted from coffee to avocados, trading traditional crop security for higher export revenues."
    },
    {
        id: 52,
        category: "Microeconomics",
        title: "Production Possibility Curves: Kenya's Economic Choices",
        description: "Analyzing Kenya's trade-offs between agricultural production and industrial development.",
        concept: "Production Possibility Frontier (PPF)",
        definition: "Shows the maximum combinations of goods an economy can produce with available resources and technology.",
        chartData: {
            type: "line",
            labels: ["0", "20", "40", "60", "80", "100"],
            datasets: [
                {
                    label: "Current Technology",
                    data: [100, 95, 85, 70, 50, 0],
                    borderColor: "#dc2626"
                },
                {
                    label: "Improved Technology",
                    data: [120, 115, 105, 90, 70, 0],
                    borderColor: "#16a34a"
                }
            ],
            title: "Kenya: Agriculture vs Manufacturing Output"
        },
        applications: {
            individual: "Balance time between work and education for future opportunities",
            household: "Allocate income between current needs and savings",
            business: "Choose optimal mix of products given resource constraints",
            government: "Decide resource allocation between sectors for economic growth"
        },
        newsExample: "Kenya's Vision 2030 aims to shift from 70% agriculture to 50% by expanding manufacturing and services sectors."
    },
    {
        id: 53,
        category: "Supply & Demand",
        title: "Price Elasticity of Demand: Kenyan Staple Foods",
        description: "How price changes affect demand for essential goods like maize, rice, and cooking oil in Kenya.",
        concept: "Price Elasticity of Demand",
        definition: "Measures how responsive quantity demanded is to price changes. Essential goods tend to be price inelastic.",
        tableData: {
            headers: ["Product", "Price Elasticity", "Type", "Policy Implication"],
            rows: [
                ["Maize (Ugali)", "-0.3", "Inelastic", "Price controls may be justified"],
                ["Cooking Oil", "-0.5", "Inelastic", "Subsidies help poor households"],
                ["Mobile Data", "-1.8", "Elastic", "Lower prices increase access"],
                ["Luxury Cars", "-2.5", "Elastic", "High taxes don't reduce demand much"]
            ]
        },
        applications: {
            individual: "Budget more carefully for essential goods during price increases",
            household: "Substitute expensive items with cheaper alternatives",
            business: "Price luxury goods higher, keep essentials competitive",
            government: "Target subsidies on inelastic goods to help the poor"
        },
        newsExample: "When maize prices rose 40% in 2022, consumption fell only 12%, showing inelastic demand for Kenya's staple food."
    },
    {
        id: 54,
        category: "Public Policy",
        title: "Market Failure and Government Intervention in Kenya",
        description: "Examining why markets fail in developing countries and how government intervention can help.",
        concept: "Market Failure and Government Intervention",
        definition: "Markets fail when they don't allocate resources efficiently, requiring government intervention to correct these failures.",
        tableData: {
            headers: ["Market Failure Type", "Kenya Example", "Government Response", "Effectiveness"],
            rows: [
                ["Public Goods", "Rural roads", "Government construction", "High - enables trade"],
                ["Externalities", "Industrial pollution", "Environmental regulations", "Medium - enforcement issues"],
                ["Natural Monopoly", "Electricity distribution", "State-owned KPLC", "Medium - needs reform"],
                ["Information Asymmetry", "Financial services", "Central Bank regulation", "High - protects consumers"]
            ]
        },
        applications: {
            individual: "Support government programs that provide public goods",
            household: "Benefit from subsidized healthcare and education",
            business: "Comply with regulations while advocating for efficient policies",
            government: "Intervene strategically where markets fail most severely"
        },
        newsExample: "Kenya's free primary education program addressed market failure in education access, increasing enrollment from 6M to 10M students."
    },
    {
        id: 55,
        category: "Macroeconomics",
        title: "GDP and National Income: Measuring Kenya's Economy",
        description: "Understanding how Kenya's economic performance is measured and what GDP figures mean for development.",
        concept: "Gross Domestic Product (GDP)",
        definition: "The total value of goods and services produced in a country, used to measure economic size and growth.",
        chartData: {
            type: "bar",
            labels: ["Agriculture", "Manufacturing", "Services", "Construction", "Other"],
            data: [22, 8, 45, 12, 13],
            title: "Kenya's GDP by Sector (2025, %)"
        },
        applications: {
            individual: "Understand economic trends affecting job opportunities",
            household: "Plan finances based on economic growth projections",
            business: "Invest in growing sectors of the economy",
            government: "Set realistic growth targets and allocate resources accordingly"
        },
        newsExample: "Kenya's GDP grew 5.7% in 2025, driven by strong services sector performance and improved agricultural output."
    },
    {
        id: 56,
        category: "Labor Economics",
        title: "Unemployment in Kenya: Youth and Structural Challenges",
        description: "Analyzing Kenya's unemployment problem, particularly among youth, and potential solutions.",
        concept: "Structural and Cyclical Unemployment",
        definition: "Unemployment caused by mismatch between skills and jobs (structural) or economic downturns (cyclical).",
        tableData: {
            headers: ["Age Group", "Unemployment Rate", "Main Causes", "Policy Solutions"],
            rows: [
                ["15-24 years", "35%", "Skills mismatch, lack of experience", "Technical training, internships"],
                ["25-34 years", "18%", "Limited job creation", "Entrepreneurship support"],
                ["35-44 years", "8%", "Economic cycles", "Counter-cyclical policies"],
                ["45+ years", "5%", "Technology displacement", "Retraining programs"]
            ]
        },
        applications: {
            individual: "Invest in relevant skills and consider entrepreneurship",
            household: "Support youth education and skill development",
            business: "Provide training and create entry-level positions",
            government: "Align education with labor market needs"
        },
        newsExample: "Kenya's Ajira Digital Program trained 1M youth in digital skills, reducing youth unemployment in tech sector by 15%."
    },
    {
        id: 57,
        category: "Monetary Policy",
        title: "Inflation and Price Stability in Kenya",
        description: "How the Central Bank of Kenya manages inflation to maintain price stability and economic growth.",
        concept: "Inflation Targeting and Monetary Policy",
        definition: "Central banks use interest rates and money supply to keep inflation within target ranges, typically 2-8% in developing countries.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Inflation Rate (%)",
                    data: [5.2, 6.1, 7.9, 7.7, 6.8, 5.1],
                    borderColor: "#dc2626"
                },
                {
                    label: "CBK Rate (%)",
                    data: [7.0, 7.0, 8.75, 10.5, 12.0, 11.0],
                    borderColor: "#2563eb"
                }
            ],
            title: "Kenya: Inflation vs Central Bank Rate"
        },
        applications: {
            individual: "Time major purchases and savings based on inflation trends",
            household: "Choose inflation-protected investments during high inflation",
            business: "Adjust pricing strategies and inventory management",
            government: "Coordinate fiscal policy with monetary policy objectives"
        },
        newsExample: "CBK raised rates to 12% in 2024 to combat food inflation, successfully bringing it down from 7.9% to 5.1% by 2025."
    },
    {
        id: 58,
        category: "International Trade",
        title: "Kenya's Export Economy: Coffee, Tea, and Diversification",
        description: "Understanding Kenya's trade patterns and the push for export diversification beyond traditional commodities.",
        concept: "Comparative Advantage and Export Diversification",
        definition: "Countries should specialize in goods they can produce most efficiently, but diversification reduces risk from price volatility.",
        tableData: {
            headers: ["Export Category", "2020 Share", "2025 Share", "Growth Strategy"],
            rows: [
                ["Tea", "22%", "18%", "Value addition, premium brands"],
                ["Coffee", "8%", "6%", "Direct trade, specialty markets"],
                ["Horticulture", "15%", "20%", "Cold chain, new markets"],
                ["Textiles", "3%", "8%", "AGOA benefits, local cotton"],
                ["Services", "12%", "18%", "Digital exports, tourism"]
            ]
        },
        applications: {
            individual: "Develop skills in growing export sectors",
            household: "Invest in education for global market opportunities",
            business: "Explore export opportunities and value addition",
            government: "Support export diversification and market access"
        },
        newsExample: "Kenya's horticultural exports grew 35% in 2025, overtaking coffee as the second-largest agricultural export after tea."
    },
    {
        id: 59,
        category: "International Trade",
        title: "Exchange Rates and the Kenyan Shilling",
        description: "How exchange rate fluctuations affect Kenya's economy, imports, exports, and everyday prices.",
        concept: "Exchange Rate Determination and Effects",
        definition: "Exchange rates affect trade competitiveness, inflation, and debt burden, especially important for import-dependent economies.",
        chartData: {
            type: "line",
            labels: ["Jan", "Mar", "May", "Jul", "Sep", "Nov"],
            data: [118, 122, 128, 135, 142, 138],
            title: "KSh/USD Exchange Rate (2025)"
        },
        applications: {
            individual: "Time foreign currency transactions and travel",
            household: "Understand impact on fuel and food prices",
            business: "Hedge foreign exchange risk for imports/exports",
            government: "Maintain adequate foreign reserves for stability"
        },
        newsExample: "Kenyan Shilling depreciated 15% in 2025 due to global dollar strength, raising fuel costs but boosting tea export competitiveness."
    },
    {
        id: 60,
        category: "Environmental Economics",
        title: "Natural Resource Management in Kenya",
        description: "Balancing economic development with conservation of Kenya's natural resources and wildlife.",
        concept: "Sustainable Development and Resource Depletion",
        definition: "Economic growth that meets present needs without compromising future generations' ability to meet their needs.",
        tableData: {
            headers: ["Resource", "Economic Value", "Conservation Challenge", "Sustainable Solution"],
            rows: [
                ["Wildlife Tourism", "$1.2B annually", "Human-wildlife conflict", "Community conservancies"],
                ["Forests", "$3.5B ecosystem value", "Deforestation pressure", "Payment for ecosystem services"],
                ["Water", "Essential for all sectors", "Scarcity and pollution", "Efficient pricing and treatment"],
                ["Arable Land", "70% of livelihoods", "Soil degradation", "Sustainable agriculture practices"]
            ]
        },
        applications: {
            individual: "Support eco-friendly businesses and conservation efforts",
            household: "Practice resource conservation and waste reduction",
            business: "Adopt sustainable practices and circular economy principles",
            government: "Balance development with environmental protection"
        },
        newsExample: "Kenya's community conservancies generated $87M in 2025, proving that conservation can be economically viable."
    },
    {
        id: 61,
        category: "Public Policy",
        title: "Income Inequality and Redistribution in Kenya",
        description: "Examining Kenya's wealth gap and government policies to promote more equitable income distribution.",
        concept: "Income Distribution and Gini Coefficient",
        definition: "Measures how evenly income is distributed in society, with 0 being perfect equality and 1 being maximum inequality.",
        chartData: {
            type: "bar",
            labels: ["Bottom 20%", "Second 20%", "Middle 20%", "Fourth 20%", "Top 20%"],
            data: [3.5, 7.2, 12.1, 19.8, 57.4],
            title: "Kenya's Income Distribution by Quintile (%)"
        },
        applications: {
            individual: "Support progressive taxation and social programs",
            household: "Access government programs for education and healthcare",
            business: "Create inclusive employment and fair wage policies",
            government: "Design progressive tax systems and targeted transfers"
        },
        newsExample: "Kenya's Gini coefficient improved from 0.48 to 0.45 between 2020-2025 due to expanded social protection programs."
    },
    {
        id: 62,
        category: "Financial Markets",
        title: "Mobile Money Revolution: M-Pesa and Financial Inclusion",
        description: "How mobile money transformed Kenya's financial landscape and promoted financial inclusion.",
        concept: "Financial Innovation and Inclusion",
        definition: "Technology-driven financial services that extend banking to previously unbanked populations, promoting economic participation.",
        tableData: {
            headers: ["Metric", "2007 (Pre-M-Pesa)", "2025 (Current)", "Impact"],
            rows: [
                ["Banked Population", "19%", "83%", "64% increase"],
                ["Rural Access", "5%", "78%", "73% increase"],
                ["Transaction Costs", "15% of amount", "1-2%", "Massive reduction"],
                ["SME Credit Access", "12%", "45%", "33% increase"]
            ]
        },
        applications: {
            individual: "Use mobile money for savings, payments, and credit access",
            household: "Send remittances cheaply and build financial history",
            business: "Accept mobile payments and access digital credit",
            government: "Leverage mobile money for social transfers and tax collection"
        },
        newsExample: "M-Pesa processed $68B in transactions in 2025, equivalent to 60% of Kenya's GDP, demonstrating massive financial inclusion impact."
    },
    {
        id: 63,
        category: "Behavioral Economics",
        title: "Informal Economy and Economic Behavior in Kenya",
        description: "Understanding the psychology and economics of Kenya's large informal sector (Jua Kali).",
        concept: "Informal Economy and Behavioral Patterns",
        definition: "Economic activities outside formal regulation, often characterized by different behavioral patterns and survival strategies.",
        tableData: {
            headers: ["Sector", "% of Employment", "Behavioral Characteristics", "Policy Implications"],
            rows: [
                ["Street Vendors", "15%", "Risk-averse, daily survival focus", "Provide secure trading spaces"],
                ["Artisans (Jua Kali)", "12%", "Skill-based, network dependent", "Skills training and credit access"],
                ["Transport (Matatu)", "8%", "Competitive, route-based", "Regulation and safety standards"],
                ["Domestic Work", "18%", "Relationship-based trust", "Legal protection and benefits"]
            ]
        },
        applications: {
            individual: "Understand informal sector opportunities and risks",
            household: "Balance formal and informal income sources",
            business: "Integrate informal suppliers and distributors",
            government: "Formalize gradually while protecting livelihoods"
        },
        newsExample: "Kenya's Jua Kali sector contributed 34% of GDP in 2025, highlighting the importance of informal economic activities."
    },
    {
        id: 64,
        category: "Macroeconomics",
        title: "Fiscal Policy and Government Debt in Kenya",
        description: "Analyzing Kenya's government spending, taxation, and debt sustainability challenges.",
        concept: "Fiscal Policy and Debt Sustainability",
        definition: "Government use of spending and taxation to influence the economy, while maintaining sustainable debt levels for future generations.",
        chartData: {
            type: "line",
            labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
            datasets: [
                {
                    label: "Debt-to-GDP Ratio (%)",
                    data: [65, 68, 67, 69, 68, 66],
                    borderColor: "#dc2626"
                },
                {
                    label: "Budget Deficit (% GDP)",
                    data: [-8.7, -7.8, -6.2, -5.1, -4.8, -4.2],
                    borderColor: "#2563eb"
                }
            ],
            title: "Kenya's Fiscal Indicators"
        },
        applications: {
            individual: "Understand how government debt affects future tax burden",
            household: "Plan for potential changes in government services",
            business: "Anticipate fiscal policy impacts on business environment",
            government: "Balance development needs with debt sustainability"
        },
        newsExample: "Kenya's debt-to-GDP ratio stabilized at 66% in 2025 after fiscal consolidation measures reduced the budget deficit."
    },
    {
        id: 65,
        category: "Game Theory",
        title: "Collective Action in Kenyan Agriculture: Cooperatives",
        description: "How farmers overcome individual incentives to achieve collective benefits through cooperative action.",
        concept: "Collective Action and Cooperation",
        definition: "Situations where individual rational behavior leads to suboptimal outcomes, but cooperation can benefit everyone.",
        tableData: {
            headers: ["Scenario", "Individual Action", "Collective Action", "Outcome"],
            rows: [
                ["Coffee Marketing", "Sell to middlemen", "Form cooperative", "Higher prices for all"],
                ["Input Purchase", "Buy individually", "Bulk purchasing", "Lower costs for all"],
                ["Water Management", "Overuse resource", "Shared management", "Sustainable use"],
                ["Market Access", "Compete individually", "Joint marketing", "Better market power"]
            ]
        },
        applications: {
            individual: "Join cooperatives and collective action groups",
            household: "Participate in community development projects",
            business: "Form industry associations for common interests",
            government: "Support cooperative development and collective action"
        },
        newsExample: "Kenyan coffee cooperatives increased farmer incomes by 40% in 2025 by eliminating middlemen and direct export marketing."
    },
    {
        id: 66,
        category: "Microeconomics",
        title: "Market Structures in Kenya: From Perfect Competition to Monopoly",
        description: "Examining different market structures in Kenya's economy and their effects on prices and efficiency.",
        concept: "Market Structures and Competition",
        definition: "Different market organizations ranging from perfect competition to monopoly, affecting pricing, efficiency, and consumer welfare.",
        tableData: {
            headers: ["Market Structure", "Kenya Example", "Characteristics", "Consumer Impact"],
            rows: [
                ["Perfect Competition", "Vegetable markets", "Many sellers, identical products", "Lowest prices"],
                ["Monopolistic Competition", "Restaurants", "Many sellers, differentiated products", "Variety but higher prices"],
                ["Oligopoly", "Telecommunications", "Few large firms", "Potential for collusion"],
                ["Monopoly", "Kenya Power (KPLC)", "Single seller", "Highest prices, regulation needed"]
            ]
        },
        applications: {
            individual: "Understand why prices differ across markets",
            household: "Shop in competitive markets for better deals",
            business: "Differentiate products to reduce price competition",
            government: "Regulate monopolies and promote competition"
        },
        newsExample: "Kenya's Competition Authority fined telecom companies $25M in 2025 for price-fixing, promoting consumer welfare."
    },
    {
        id: 67,
        category: "International Trade",
        title: "Regional Integration: East African Community Trade",
        description: "How regional trade agreements affect Kenya's economy and integration with neighboring countries.",
        concept: "Regional Economic Integration",
        definition: "Economic cooperation between neighboring countries to reduce trade barriers and increase economic efficiency through larger markets.",
        chartData: {
            type: "bar",
            labels: ["Uganda", "Tanzania", "Rwanda", "Burundi", "South Sudan", "DRC"],
            data: [18, 15, 8, 3, 2, 4],
            title: "Kenya's Intra-EAC Trade (% of total trade)"
        },
        applications: {
            individual: "Explore job opportunities in regional markets",
            household: "Access cheaper goods from regional trade",
            business: "Expand to regional markets with reduced barriers",
            government: "Coordinate policies for regional integration benefits"
        },
        newsExample: "EAC Common Market increased Kenya's regional exports by 28% in 2025, with Uganda becoming the largest regional trade partner."
    },
    {
        id: 68,
        category: "Public Policy",
        title: "Universal Health Coverage in Kenya: Economics of Healthcare",
        description: "Analyzing the economic rationale and challenges of implementing universal health coverage in Kenya.",
        concept: "Healthcare Economics and Universal Coverage",
        definition: "Healthcare markets fail due to information asymmetries and externalities, justifying government intervention for universal access.",
        tableData: {
            headers: ["Health System Model", "Coverage", "Financing", "Kenya's Approach"],
            rows: [
                ["Private Insurance", "Limited", "Individual premiums", "Supplement to public"],
                ["Social Insurance", "Formal workers", "Payroll contributions", "NHIF expansion"],
                ["Tax-funded", "Universal", "General taxation", "UHC target model"],
                ["Mixed System", "Comprehensive", "Multiple sources", "Current transition"]
            ]
        },
        applications: {
            individual: "Understand health insurance options and benefits",
            household: "Plan for healthcare costs and insurance coverage",
            business: "Provide employee health benefits efficiently",
            government: "Design sustainable universal health coverage system"
        },
        newsExample: "Kenya's UHC pilot program reduced out-of-pocket health spending by 45% in covered counties, improving access for the poor."
    },
    {
        id: 69,
        category: "Environmental Economics",
        title: "Climate Change Economics in Kenya",
        description: "Understanding the economic costs of climate change and the economics of adaptation and mitigation in Kenya.",
        concept: "Climate Economics and Adaptation",
        definition: "Climate change creates economic costs through damage and adaptation needs, requiring cost-benefit analysis of mitigation strategies.",
        tableData: {
            headers: ["Climate Impact", "Economic Cost", "Adaptation Strategy", "Cost-Benefit Ratio"],
            rows: [
                ["Drought", "$2.8B annually", "Drought-resistant crops", "1:4"],
                ["Flooding", "$1.2B annually", "Early warning systems", "1:7"],
                ["Temperature rise", "$800M annually", "Climate-smart agriculture", "1:3"],
                ["Sea level rise", "$400M annually", "Coastal protection", "1:2"]
            ]
        },
        applications: {
            individual: "Invest in climate-resilient assets and practices",
            household: "Adopt water and energy conservation measures",
            business: "Build climate resilience into business planning",
            government: "Prioritize high-return climate adaptation investments"
        },
        newsExample: "Kenya's climate adaptation investments of $1.2B in 2025 are projected to save $4.8B in avoided climate damages by 2030."
    },
    {
        id: 70,
        category: "Macroeconomics",
        title: "Economic Development and Structural Transformation in Kenya",
        description: "Analyzing Kenya's journey from agriculture-based to service-based economy and development challenges.",
        concept: "Economic Development and Structural Change",
        definition: "The process by which economies transform from low-productivity agriculture to higher-productivity industry and services.",
        chartData: {
            type: "line",
            labels: ["1990", "2000", "2010", "2020", "2025"],
            datasets: [
                {
                    label: "Agriculture % GDP",
                    data: [35, 28, 25, 23, 22],
                    borderColor: "#16a34a"
                },
                {
                    label: "Services % GDP",
                    data: [45, 52, 58, 62, 65],
                    borderColor: "#2563eb"
                },
                {
                    label: "Manufacturing % GDP",
                    data: [12, 11, 10, 8, 8],
                    borderColor: "#dc2626"
                }
            ],
            title: "Kenya's Structural Transformation"
        },
        applications: {
            individual: "Develop skills relevant to growing economic sectors",
            household: "Diversify income sources across economic sectors",
            business: "Invest in high-growth sectors like services and technology",
            government: "Support structural transformation through education and infrastructure"
        },
        newsExample: "Kenya's services sector reached 65% of GDP in 2025, driven by fintech, telecommunications, and business process outsourcing growth."
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = economicsLessons;
}
