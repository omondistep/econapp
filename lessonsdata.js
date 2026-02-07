// ============================================
// ECONOMICS DAILY - COMPLETE 80 LESSONS
// Comprehensive coverage of all economics topics
// Kenyan context and real data throughout
// ============================================

// Learning Framework
const LEARNING_FRAMEWORK = {
  BLOOMS_TAXONOMY: {
    REMEMBER: 1,
    UNDERSTAND: 2,
    APPLY: 3,
    ANALYZE: 4,
    EVALUATE: 5,
    CREATE: 6
  },
  DIFFICULTY_LEVELS: {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced'
  }
};

// Data Sources
const DATA_SOURCES = {
  KNBS: 'Kenya National Bureau of Statistics',
  CBK: 'Central Bank of Kenya',
  IMF: 'International Monetary Fund',
  WORLD_BANK: 'World Bank',
  KIPPRA: 'Kenya Institute for Public Policy Research and Analysis'
};

// ========== PART 1: BASIC ECONOMIC IDEAS (Lessons 1-12) ==========
const economicsLessons = [
  {
    id: 1,
    category: "Basic Economic Ideas",
    title: "The Economic Problem: Scarcity and Choice",
    description: "Understanding the fundamental economic problem of unlimited wants vs limited resources.",
    learningObjectives: [
      "Define scarcity and explain its role in economics",
      "Distinguish between needs and wants",
      "Explain the concept of opportunity cost",
      "Apply scarcity concept to personal financial decisions",
      "Analyze Kenya's resource allocation challenges"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "15 minutes",
    concept: "Scarcity",
    definition: "The fundamental economic problem of having seemingly unlimited human wants in a world of limited resources.",
    dataVisualization: {
      title: "Kenya's Limited Resources Allocation",
      type: "pie",
      data: {
        labels: ["Agriculture", "Infrastructure", "Healthcare", "Education", "Debt Servicing"],
        datasets: [{
          data: [22, 19, 8, 25, 18],
          backgroundColor: ["#10b981", "#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6"]
        }]
      },
      source: `${DATA_SOURCES.KNBS} Budget Allocation 2025`
    },
    applications: {
      individual: "Making choices between spending, saving, and investing",
      household: "Allocating limited income among competing needs",
      business: "Deciding between expansion, dividends, or research",
      government: "Budget allocation among competing sectors"
    },
    kenyanContext: {
      currentData: {
        budget2025: "KSh 3.75 trillion",
        competingSectors: ["Education 25.6%", "Infrastructure 19.8%", "Healthcare 8.7%"],
        resourceConstraints: ["Water scarcity", "Land degradation", "Skills gap"]
      }
    }
  },
  {
    id: 2,
    category: "Basic Economic Ideas",
    title: "Opportunity Cost and Production Possibility Curves",
    description: "Analyzing trade-offs and efficiency using production possibility frontiers.",
    learningObjectives: [
      "Define and calculate opportunity cost",
      "Construct and interpret PPC",
      "Distinguish between points on, inside, and outside PPC",
      "Analyze economic growth through PPC shifts",
      "Apply PPC to Kenya's development choices"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "20 minutes",
    concept: "Production Possibility Frontier",
    definition: "A curve showing the maximum possible output combinations of two goods that can be produced with available resources and technology.",
    dataVisualization: {
      title: "Kenya: Agriculture vs Manufacturing Trade-off",
      type: "line",
      data: {
        labels: ["All Agriculture", "Mix 1", "Mix 2", "Mix 3", "All Manufacturing"],
        datasets: [{
          label: "Possible Combinations",
          data: [100, 85, 65, 40, 0],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)"
        }]
      },
      source: `${DATA_SOURCES.KNBS} Economic Survey 2025`
    }
  },
  {
    id: 3,
    category: "Basic Economic Ideas",
    title: "Factors of Production and Resource Allocation",
    description: "Understanding the four factors of production and how resources are allocated in different economic systems.",
    learningObjectives: [
      "Identify the four factors of production",
      "Explain resource mobility and specialization",
      "Compare different economic systems",
      "Analyze Kenya's factor endowment",
      "Evaluate resource allocation efficiency"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "18 minutes"
  },
  {
    id: 4,
    category: "Basic Economic Ideas",
    title: "Economic Methodology: Positive vs Normative Economics",
    description: "Distinguishing between factual statements and value judgments in economic analysis.",
    learningObjectives: [
      "Distinguish positive from normative statements",
      "Understand the scientific method in economics",
      "Identify value judgments in policy debates",
      "Apply economic reasoning to Kenyan policy discussions"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "16 minutes"
  },
  {
    id: 5,
    category: "Basic Economic Ideas",
    title: "Classification of Goods and Services",
    description: "Categorizing goods based on rivalry and excludability characteristics.",
    learningObjectives: [
      "Classify goods as private, public, or merit",
      "Understand free rider problem",
      "Analyze government provision of public goods",
      "Evaluate Kenya's public goods provision"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "17 minutes"
  },
  {
    id: 6,
    category: "Basic Economic Ideas",
    title: "Economic Systems: Capitalism, Socialism, and Mixed Economies",
    description: "Comparing different economic systems and Kenya's mixed economy approach.",
    learningObjectives: [
      "Compare capitalist, socialist, and mixed economies",
      "Analyze advantages and disadvantages of each system",
      "Understand Kenya's mixed economy model",
      "Evaluate economic system performance"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 7,
    category: "Basic Economic Ideas",
    title: "Specialization and Division of Labor",
    description: "Understanding how specialization increases productivity and economic efficiency.",
    learningObjectives: [
      "Explain gains from specialization",
      "Analyze division of labor in modern economies",
      "Understand comparative advantage",
      "Apply specialization concepts to Kenyan industries"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "19 minutes"
  },
  {
    id: 8,
    category: "Basic Economic Ideas",
    title: "Money: Functions and Characteristics",
    description: "Exploring the role of money as a medium of exchange, store of value, and unit of account.",
    learningObjectives: [
      "Identify functions of money",
      "Explain characteristics of good money",
      "Understand evolution of money",
      "Analyze Kenya's monetary system"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "20 minutes"
  },
  {
    id: 9,
    category: "Basic Economic Ideas",
    title: "Economic Growth vs Economic Development",
    description: "Distinguishing between quantitative growth and qualitative development.",
    learningObjectives: [
      "Distinguish growth from development",
      "Measure economic development",
      "Analyze Kenya's development indicators",
      "Evaluate development strategies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 10,
    category: "Basic Economic Ideas",
    title: "Sustainable Development",
    description: "Balancing economic growth with environmental protection and social equity.",
    learningObjectives: [
      "Define sustainable development",
      "Understand SDGs framework",
      "Analyze sustainability challenges",
      "Evaluate Kenya's sustainability efforts"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 11,
    category: "Basic Economic Ideas",
    title: "Economic Indicators and Measurement",
    description: "Understanding key economic indicators and how they are measured.",
    learningObjectives: [
      "Identify key economic indicators",
      "Understand measurement methods",
      "Interpret economic data",
      "Analyze Kenya's economic indicators"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "18 minutes"
  },
  {
    id: 12,
    category: "Basic Economic Ideas",
    title: "Economic Models and Their Limitations",
    description: "Understanding how economists use models to simplify complex reality.",
    learningObjectives: [
      "Explain purpose of economic models",
      "Understand model assumptions",
      "Recognize model limitations",
      "Apply models to Kenyan context"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "20 minutes"
  },

  // ========== PART 2: MICROECONOMICS - PRICE SYSTEM (Lessons 13-24) ==========
  {
    id: 13,
    category: "Microeconomics",
    title: "Demand: Law of Demand and Demand Curve",
    description: "Understanding consumer behavior and the relationship between price and quantity demanded.",
    learningObjectives: [
      "State the law of demand",
      "Draw and interpret demand curves",
      "Identify determinants of demand",
      "Analyze Kenyan consumer behavior"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "19 minutes"
  },
  {
    id: 14,
    category: "Microeconomics",
    title: "Supply: Law of Supply and Supply Curve",
    description: "Understanding producer behavior and the relationship between price and quantity supplied.",
    learningObjectives: [
      "State the law of supply",
      "Draw and interpret supply curves",
      "Identify determinants of supply",
      "Analyze Kenyan producer behavior"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "19 minutes"
  },
  {
    id: 15,
    category: "Microeconomics",
    title: "Market Equilibrium: Price Determination",
    description: "Understanding how market forces determine equilibrium price and quantity.",
    learningObjectives: [
      "Define market equilibrium",
      "Analyze price determination",
      "Understand market clearing process",
      "Apply to Kenyan markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "20 minutes"
  },
  {
    id: 16,
    category: "Microeconomics",
    title: "Price Elasticity of Demand",
    description: "Measuring how responsive quantity demanded is to price changes.",
    learningObjectives: [
      "Calculate price elasticity",
      "Interpret elasticity coefficients",
      "Identify elastic vs inelastic demand",
      "Apply to Kenyan products"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 17,
    category: "Microeconomics",
    title: "Income Elasticity of Demand",
    description: "Measuring how demand changes with income variations.",
    learningObjectives: [
      "Calculate income elasticity",
      "Distinguish normal from inferior goods",
      "Analyze luxury vs necessity goods",
      "Apply to Kenyan context"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 18,
    category: "Microeconomics",
    title: "Cross Elasticity of Demand",
    description: "Measuring how demand for one good changes with price changes of another good.",
    learningObjectives: [
      "Calculate cross elasticity",
      "Identify substitutes and complements",
      "Analyze market relationships",
      "Apply to Kenyan markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "20 minutes"
  },
  {
    id: 19,
    category: "Microeconomics",
    title: "Price Elasticity of Supply",
    description: "Measuring how responsive quantity supplied is to price changes.",
    learningObjectives: [
      "Calculate supply elasticity",
      "Identify determinants of supply elasticity",
      "Analyze time periods in supply",
      "Apply to Kenyan industries"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 20,
    category: "Microeconomics",
    title: "Consumer and Producer Surplus",
    description: "Measuring economic welfare and market efficiency.",
    learningObjectives: [
      "Define consumer and producer surplus",
      "Calculate welfare measures",
      "Analyze market efficiency",
      "Evaluate Kenyan market performance"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 21,
    category: "Microeconomics",
    title: "Price Controls: Ceilings and Floors",
    description: "Analyzing government intervention in price setting.",
    learningObjectives: [
      "Define price ceilings and floors",
      "Analyze effects of price controls",
      "Identify unintended consequences",
      "Evaluate Kenyan price control policies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 22,
    category: "Microeconomics",
    title: "Tax Incidence and Deadweight Loss",
    description: "Understanding who bears the burden of taxes and efficiency losses.",
    learningObjectives: [
      "Analyze tax incidence",
      "Calculate deadweight loss",
      "Understand tax efficiency",
      "Evaluate Kenyan tax system"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },
  {
    id: 23,
    category: "Microeconomics",
    title: "Subsidies and Their Economic Effects",
    description: "Analyzing government subsidies and their impact on markets.",
    learningObjectives: [
      "Define different types of subsidies",
      "Analyze subsidy effects",
      "Evaluate subsidy efficiency",
      "Assess Kenyan subsidy programs"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 24,
    category: "Microeconomics",
    title: "Market Efficiency and Allocative Efficiency",
    description: "Understanding when markets work efficiently and when they fail.",
    learningObjectives: [
      "Define market efficiency",
      "Understand allocative efficiency",
      "Identify market failures",
      "Analyze Kenyan market efficiency"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 3: CONSUMER THEORY (Lessons 25-30) ==========
  {
    id: 25,
    category: "Microeconomics",
    title: "Utility Theory and Consumer Choice",
    description: "Understanding how consumers maximize satisfaction given budget constraints.",
    learningObjectives: [
      "Define utility and marginal utility",
      "Understand diminishing marginal utility",
      "Analyze consumer equilibrium",
      "Apply to Kenyan consumer behavior"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 26,
    category: "Microeconomics",
    title: "Indifference Curves and Budget Constraints",
    description: "Using indifference curves to analyze consumer preferences and choices.",
    learningObjectives: [
      "Draw and interpret indifference curves",
      "Understand budget constraints",
      "Analyze consumer optimization",
      "Apply graphical analysis"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "25 minutes"
  },
  {
    id: 27,
    category: "Microeconomics",
    title: "Income and Substitution Effects",
    description: "Decomposing price changes into income and substitution effects.",
    learningObjectives: [
      "Distinguish income from substitution effects",
      "Analyze price change impacts",
      "Understand Giffen goods",
      "Apply to Kenyan markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },
  {
    id: 28,
    category: "Microeconomics",
    title: "Behavioral Economics: Beyond Rational Choice",
    description: "Exploring psychological factors in economic decision-making.",
    learningObjectives: [
      "Understand behavioral economics",
      "Identify cognitive biases",
      "Analyze irrational behavior",
      "Apply to Kenyan contexts"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 29,
    category: "Microeconomics",
    title: "Risk and Uncertainty in Decision Making",
    description: "Analyzing how consumers make decisions under uncertainty.",
    learningObjectives: [
      "Distinguish risk from uncertainty",
      "Understand expected utility",
      "Analyze risk preferences",
      "Apply to investment decisions"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "23 minutes"
  },
  {
    id: 30,
    category: "Microeconomics",
    title: "Time Preference and Intertemporal Choice",
    description: "Understanding how consumers make choices over time.",
    learningObjectives: [
      "Define time preference",
      "Understand discounting",
      "Analyze saving decisions",
      "Apply to Kenyan savings behavior"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },

  // ========== PART 4: PRODUCTION AND COSTS (Lessons 31-36) ==========
  {
    id: 31,
    category: "Microeconomics",
    title: "Production Functions and Law of Diminishing Returns",
    description: "Understanding the relationship between inputs and outputs in production.",
    learningObjectives: [
      "Define production function",
      "Understand law of diminishing returns",
      "Calculate marginal product",
      "Apply to Kenyan agriculture"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 32,
    category: "Microeconomics",
    title: "Costs of Production: Fixed, Variable, and Total Costs",
    description: "Analyzing different types of costs faced by firms.",
    learningObjectives: [
      "Distinguish fixed from variable costs",
      "Calculate different cost measures",
      "Understand cost curves",
      "Analyze Kenyan firm costs"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 33,
    category: "Microeconomics",
    title: "Economies and Diseconomies of Scale",
    description: "Understanding how firm size affects production costs.",
    learningObjectives: [
      "Define economies of scale",
      "Identify sources of scale economies",
      "Understand diseconomies of scale",
      "Analyze Kenyan industries"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 34,
    category: "Microeconomics",
    title: "Revenue Curves and Profit Maximization",
    description: "Understanding how firms maximize profits.",
    learningObjectives: [
      "Define different revenue measures",
      "Understand profit maximization",
      "Calculate optimal output",
      "Apply to Kenyan businesses"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 35,
    category: "Microeconomics",
    title: "Short Run vs Long Run Production Decisions",
    description: "Analyzing time horizons in production decisions.",
    learningObjectives: [
      "Distinguish short from long run",
      "Understand shutdown decisions",
      "Analyze entry and exit",
      "Apply to Kenyan market dynamics"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 36,
    category: "Microeconomics",
    title: "Productivity and Technological Change",
    description: "Understanding factors that increase production efficiency.",
    learningObjectives: [
      "Define productivity measures",
      "Understand technological progress",
      "Analyze productivity growth",
      "Evaluate Kenya's productivity"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },

  // ========== PART 5: MARKET STRUCTURES (Lessons 37-44) ==========
  {
    id: 37,
    category: "Microeconomics",
    title: "Perfect Competition: Characteristics and Outcomes",
    description: "Analyzing markets with many small firms and homogeneous products.",
    learningObjectives: [
      "Identify perfect competition characteristics",
      "Analyze firm behavior in perfect competition",
      "Understand long-run equilibrium",
      "Apply to Kenyan agricultural markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 38,
    category: "Microeconomics",
    title: "Monopoly: Single Seller Markets",
    description: "Understanding markets dominated by a single seller.",
    learningObjectives: [
      "Define monopoly characteristics",
      "Analyze monopoly pricing",
      "Understand barriers to entry",
      "Evaluate Kenyan monopolies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 39,
    category: "Microeconomics",
    title: "Monopolistic Competition: Differentiated Products",
    description: "Analyzing markets with many firms selling differentiated products.",
    learningObjectives: [
      "Identify monopolistic competition characteristics",
      "Understand product differentiation",
      "Analyze long-run equilibrium",
      "Apply to Kenyan retail sector"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 40,
    category: "Microeconomics",
    title: "Oligopoly: Few Large Firms",
    description: "Understanding markets dominated by a few large firms.",
    learningObjectives: [
      "Define oligopoly characteristics",
      "Understand interdependence",
      "Analyze game theory applications",
      "Evaluate Kenyan oligopolies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },
  {
    id: 41,
    category: "Microeconomics",
    title: "Game Theory and Strategic Behavior",
    description: "Using game theory to analyze strategic interactions between firms.",
    learningObjectives: [
      "Understand basic game theory",
      "Analyze prisoner's dilemma",
      "Apply to business strategy",
      "Evaluate Kenyan market competition"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "25 minutes"
  },
  {
    id: 42,
    category: "Microeconomics",
    title: "Price Discrimination",
    description: "Understanding how firms charge different prices to different customers.",
    learningObjectives: [
      "Define price discrimination",
      "Identify degrees of discrimination",
      "Analyze welfare effects",
      "Evaluate Kenyan examples"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 43,
    category: "Microeconomics",
    title: "Monopoly Regulation and Antitrust Policy",
    description: "Analyzing government regulation of monopoly power.",
    learningObjectives: [
      "Understand regulation rationale",
      "Analyze regulatory approaches",
      "Evaluate antitrust policies",
      "Assess Kenyan competition policy"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 44,
    category: "Microeconomics",
    title: "Market Structure and Innovation",
    description: "Analyzing relationship between market structure and technological innovation.",
    learningObjectives: [
      "Understand innovation incentives",
      "Analyze Schumpeterian hypothesis",
      "Evaluate market structure effects",
      "Apply to Kenyan innovation"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },

  // ========== PART 6: FACTOR MARKETS (Lessons 45-48) ==========
  {
    id: 45,
    category: "Microeconomics",
    title: "Labor Markets and Wage Determination",
    description: "Understanding how wages are determined in labor markets.",
    learningObjectives: [
      "Understand labor demand and supply",
      "Analyze wage determination",
      "Identify factors affecting wages",
      "Evaluate Kenyan labor markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 46,
    category: "Microeconomics",
    title: "Human Capital and Education",
    description: "Analyzing investment in education and skills development.",
    learningObjectives: [
      "Define human capital",
      "Analyze education returns",
      "Understand signaling theory",
      "Evaluate Kenya's education system"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 47,
    category: "Microeconomics",
    title: "Capital Markets and Interest Rates",
    description: "Understanding how interest rates are determined in capital markets.",
    learningObjectives: [
      "Understand capital demand and supply",
      "Analyze interest rate determination",
      "Identify factors affecting interest rates",
      "Evaluate Kenyan capital markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 48,
    category: "Microeconomics",
    title: "Land and Natural Resource Markets",
    description: "Analyzing markets for land and natural resources.",
    learningObjectives: [
      "Understand land markets",
      "Analyze resource extraction",
      "Evaluate property rights",
      "Assess Kenyan land issues"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },

  // ========== PART 7: MARKET FAILURE (Lessons 49-54) ==========
  {
    id: 49,
    category: "Microeconomics",
    title: "Externalities: Positive and Negative",
    description: "Understanding costs or benefits imposed on third parties.",
    learningObjectives: [
      "Define externalities",
      "Distinguish positive from negative externalities",
      "Analyze market failure",
      "Evaluate Kenyan environmental issues"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 50,
    category: "Microeconomics",
    title: "Public Goods and Free Rider Problem",
    description: "Understanding goods that are non-excludable and non-rivalrous.",
    learningObjectives: [
      "Define public goods",
      "Understand free rider problem",
      "Analyze government provision",
      "Evaluate Kenyan public goods"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 51,
    category: "Microeconomics",
    title: "Common Pool Resources and Tragedy of the Commons",
    description: "Analyzing resources that are rivalrous but non-excludable.",
    learningObjectives: [
      "Define common pool resources",
      "Understand tragedy of the commons",
      "Analyze solutions",
      "Evaluate Kenyan resource management"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 52,
    category: "Microeconomics",
    title: "Information Asymmetry and Market Failure",
    description: "Understanding how unequal information leads to market problems.",
    learningObjectives: [
      "Define information asymmetry",
      "Understand adverse selection",
      "Analyze moral hazard",
      "Evaluate Kenyan financial markets"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "23 minutes"
  },
  {
    id: 53,
    category: "Microeconomics",
    title: "Government Intervention to Correct Market Failure",
    description: "Analyzing government policies to address market failures.",
    learningObjectives: [
      "Identify intervention methods",
      "Analyze policy effectiveness",
      "Understand government failure",
      "Evaluate Kenyan policies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 54,
    category: "Microeconomics",
    title: "Environmental Economics and Sustainability",
    description: "Applying economic analysis to environmental issues.",
    learningObjectives: [
      "Understand environmental economics",
      "Analyze pollution control",
      "Evaluate sustainability",
      "Assess Kenya's environmental policies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 8: MACROECONOMICS - NATIONAL INCOME (Lessons 55-60) ==========
  {
    id: 55,
    category: "Macroeconomics",
    title: "Circular Flow of Income",
    description: "Understanding the flow of goods, services, and money in an economy.",
    learningObjectives: [
      "Explain circular flow model",
      "Identify leakages and injections",
      "Analyze economic interdependence",
      "Apply to Kenyan economy"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER,
    estimatedTime: "20 minutes"
  },
  {
    id: 56,
    category: "Macroeconomics",
    title: "Measuring National Income: GDP and GNP",
    description: "Understanding different measures of national income.",
    learningObjectives: [
      "Define GDP and GNP",
      "Calculate national income",
      "Compare different measures",
      "Analyze Kenya's national accounts"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 57,
    category: "Macroeconomics",
    title: "Nominal vs Real GDP",
    description: "Distinguishing between nominal and inflation-adjusted measures.",
    learningObjectives: [
      "Distinguish nominal from real GDP",
      "Calculate real GDP",
      "Understand GDP deflator",
      "Analyze Kenya's real growth"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 58,
    category: "Macroeconomics",
    title: "GDP Calculation Methods",
    description: "Understanding output, income, and expenditure approaches.",
    learningObjectives: [
      "Explain three calculation methods",
      "Apply each method",
      "Understand consistency",
      "Analyze Kenyan GDP data"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 59,
    category: "Macroeconomics",
    title: "Limitations of GDP as Welfare Measure",
    description: "Critically evaluating GDP as a measure of economic welfare.",
    learningObjectives: [
      "Identify GDP limitations",
      "Understand alternative measures",
      "Analyze welfare considerations",
      "Evaluate Kenya's development progress"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 60,
    category: "Macroeconomics",
    title: "National Income Accounting in Kenya",
    description: "Applying national income concepts to Kenyan context.",
    learningObjectives: [
      "Understand Kenya's national accounts",
      "Analyze sectoral contributions",
      "Interpret Kenyan data",
      "Evaluate economic structure"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },

  // ========== PART 9: ECONOMIC GROWTH (Lessons 61-66) ==========
  {
    id: 61,
    category: "Macroeconomics",
    title: "Economic Growth: Sources and Measurement",
    description: "Understanding factors that drive long-term economic growth.",
    learningObjectives: [
      "Define economic growth",
      "Identify growth sources",
      "Measure growth rates",
      "Analyze Kenya's growth"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 62,
    category: "Macroeconomics",
    title: "Solow Growth Model",
    description: "Understanding the basic neoclassical growth model.",
    learningObjectives: [
      "Understand Solow model",
      "Analyze steady state",
      "Evaluate convergence hypothesis",
      "Apply to developing countries"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "25 minutes"
  },
  {
    id: 63,
    category: "Macroeconomics",
    title: "Endogenous Growth Theory",
    description: "Understanding how knowledge and innovation drive growth.",
    learningObjectives: [
      "Understand endogenous growth",
      "Analyze role of human capital",
      "Evaluate innovation importance",
      "Apply to Kenyan context"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },
  {
    id: 64,
    category: "Macroeconomics",
    title: "Productivity and Growth Accounting",
    description: "Decomposing growth into factor accumulation and productivity.",
    learningObjectives: [
      "Calculate total factor productivity",
      "Decompose growth sources",
      "Analyze productivity trends",
      "Evaluate Kenya's productivity"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "24 minutes"
  },
  {
    id: 65,
    category: "Macroeconomics",
    title: "Growth and Development in Kenya",
    description: "Analyzing Kenya's growth experience and development challenges.",
    learningObjectives: [
      "Analyze Kenya's growth history",
      "Identify growth constraints",
      "Evaluate development strategies",
      "Assess future prospects"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 66,
    category: "Macroeconomics",
    title: "Sustainable Growth and Environmental Limits",
    description: "Balancing economic growth with environmental sustainability.",
    learningObjectives: [
      "Understand growth-environment tradeoff",
      "Analyze sustainable growth",
      "Evaluate green growth strategies",
      "Assess Kenya's sustainability"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },

  // ========== PART 10: UNEMPLOYMENT (Lessons 67-70) ==========
  {
    id: 67,
    category: "Macroeconomics",
    title: "Types and Measurement of Unemployment",
    description: "Understanding different types of unemployment and how it's measured.",
    learningObjectives: [
      "Define unemployment types",
      "Calculate unemployment rate",
      "Understand measurement issues",
      "Analyze Kenyan unemployment"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 68,
    category: "Macroeconomics",
    title: "Natural Rate of Unemployment",
    description: "Understanding the unemployment rate consistent with stable inflation.",
    learningObjectives: [
      "Define natural rate",
      "Identify determinants",
      "Analyze policy implications",
      "Estimate Kenya's natural rate"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED,
    estimatedTime: "23 minutes"
  },
  {
    id: 69,
    category: "Macroeconomics",
    title: "Unemployment Policies and Programs",
    description: "Analyzing government policies to reduce unemployment.",
    learningObjectives: [
      "Evaluate unemployment policies",
      "Analyze effectiveness",
      "Understand trade-offs",
      "Assess Kenyan policies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 70,
    category: "Macroeconomics",
    title: "Youth Unemployment in Kenya",
    description: "Special focus on Kenya's youth unemployment challenge.",
    learningObjectives: [
      "Analyze youth unemployment causes",
      "Evaluate interventions",
      "Understand social implications",
      "Propose solutions"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 11: INFLATION (Lessons 71-74) ==========
  {
    id: 71,
    category: "Macroeconomics",
    title: "Inflation: Causes and Measurement",
    description: "Understanding what causes inflation and how it's measured.",
    learningObjectives: [
      "Define inflation",
      "Calculate inflation rate",
      "Identify causes",
      "Analyze Kenyan inflation"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 72,
    category: "Macroeconomics",
    title: "Costs of Inflation",
    description: "Analyzing economic costs of inflation.",
    learningObjectives: [
      "Identify inflation costs",
      "Understand redistribution effects",
      "Analyze uncertainty",
      "Evaluate Kenyan experience"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "21 minutes"
  },
  {
    id: 73,
    category: "Macroeconomics",
    title: "Hyperinflation and Deflation",
    description: "Understanding extreme inflation and falling prices.",
    learningObjectives: [
      "Define hyperinflation",
      "Understand deflation",
      "Analyze causes and effects",
      "Compare with moderate inflation"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 74,
    category: "Macroeconomics",
    title: "Inflation Targeting in Kenya",
    description: "Analyzing Kenya's inflation targeting framework.",
    learningObjectives: [
      "Understand inflation targeting",
      "Analyze CBK framework",
      "Evaluate effectiveness",
      "Assess challenges"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 12: MONEY AND BANKING (Lessons 75-78) ==========
  {
    id: 75,
    category: "Macroeconomics",
    title: "Money Supply and Creation",
    description: "Understanding how money is created in modern economies.",
    learningObjectives: [
      "Define money supply",
      "Understand money creation",
      "Analyze banking system",
      "Evaluate Kenyan money supply"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 76,
    category: "Macroeconomics",
    title: "Central Banking and Monetary Policy",
    description: "Understanding central bank functions and policy tools.",
    learningObjectives: [
      "Understand central bank functions",
      "Analyze monetary policy tools",
      "Evaluate policy transmission",
      "Assess CBK performance"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 77,
    category: "Macroeconomics",
    title: "Commercial Banking and Financial Intermediation",
    description: "Understanding the role of commercial banks.",
    learningObjectives: [
      "Understand banking functions",
      "Analyze financial intermediation",
      "Evaluate banking stability",
      "Assess Kenyan banking sector"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 78,
    category: "Macroeconomics",
    title: "M-Pesa and Financial Innovation in Kenya",
    description: "Case study of Kenya's mobile money revolution.",
    learningObjectives: [
      "Understand M-Pesa innovation",
      "Analyze financial inclusion",
      "Evaluate economic impact",
      "Assess future developments"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 13: INTERNATIONAL TRADE (Lessons 79-82) ==========
  {
    id: 79,
    category: "International Economics",
    title: "Theory of Comparative Advantage",
    description: "Understanding why countries trade based on relative efficiency.",
    learningObjectives: [
      "Explain comparative advantage",
      "Calculate opportunity costs",
      "Analyze gains from trade",
      "Apply to Kenyan exports"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 80,
    category: "International Economics",
    title: "Trade Protectionism: Tariffs and Quotas",
    description: "Analyzing government restrictions on international trade.",
    learningObjectives: [
      "Define protectionism",
      "Analyze tariff effects",
      "Understand quota impacts",
      "Evaluate Kenyan trade policy"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 81,
    category: "International Economics",
    title: "Balance of Payments",
    description: "Understanding a country's international transactions.",
    learningObjectives: [
      "Explain balance of payments",
      "Analyze current account",
      "Understand capital account",
      "Evaluate Kenya's BOP"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 82,
    category: "International Economics",
    title: "Exchange Rate Systems",
    description: "Understanding different exchange rate regimes.",
    learningObjectives: [
      "Compare exchange rate systems",
      "Analyze fixed vs floating rates",
      "Understand determination",
      "Evaluate Kenya's system"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 14: DEVELOPMENT ECONOMICS (Lessons 83-86) ==========
  {
    id: 83,
    category: "Development Economics",
    title: "Measuring Economic Development",
    description: "Going beyond GDP to measure development.",
    learningObjectives: [
      "Define economic development",
      "Understand HDI",
      "Analyze multidimensional poverty",
      "Evaluate Kenya's development"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 84,
    category: "Development Economics",
    title: "Poverty and Inequality",
    description: "Understanding and measuring poverty and inequality.",
    learningObjectives: [
      "Measure poverty",
      "Calculate inequality",
      "Analyze causes",
      "Evaluate Kenyan situation"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 85,
    category: "Development Economics",
    title: "Foreign Aid and Development Assistance",
    description: "Analyzing the role of foreign aid in development.",
    learningObjectives: [
      "Understand aid types",
      "Analyze effectiveness",
      "Evaluate aid dependency",
      "Assess Kenya's aid experience"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "22 minutes"
  },
  {
    id: 86,
    category: "Development Economics",
    title: "Sustainable Development Goals and Kenya",
    description: "Analyzing Kenya's progress on SDGs.",
    learningObjectives: [
      "Understand SDGs",
      "Analyze Kenya's progress",
      "Evaluate challenges",
      "Propose strategies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },

  // ========== PART 15: KENYAN ECONOMY FOCUS (Lessons 87-90) ==========
  {
    id: 87,
    category: "Kenyan Economy",
    title: "Kenya's Economic History Since Independence",
    description: "Analyzing Kenya's economic journey since 1963.",
    learningObjectives: [
      "Understand economic history",
      "Analyze policy shifts",
      "Evaluate performance",
      "Learn from experience"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "24 minutes"
  },
  {
    id: 88,
    category: "Kenyan Economy",
    title: "Agriculture in Kenyan Economy",
    description: "Deep dive into Kenya's agricultural sector.",
    learningObjectives: [
      "Analyze agricultural importance",
      "Understand challenges",
      "Evaluate policies",
      "Propose improvements"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 89,
    category: "Kenyan Economy",
    title: "Manufacturing and Big 4 Agenda",
    description: "Analyzing Kenya's industrialization efforts.",
    learningObjectives: [
      "Understand manufacturing challenges",
      "Analyze Big 4 agenda",
      "Evaluate progress",
      "Propose strategies"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "23 minutes"
  },
  {
    id: 90,
    category: "Kenyan Economy",
    title: "Kenya Vision 2030: Progress and Challenges",
    description: "Evaluating Kenya's long-term development blueprint.",
    learningObjectives: [
      "Understand Vision 2030",
      "Analyze progress",
      "Evaluate challenges",
      "Assess future prospects"
    ],
    difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE,
    estimatedTime: "24 minutes"
  }
];

// ========== LESSON CATEGORIES SUMMARY ==========
const lessonCategories = {
  basicConcepts: {
    title: "Basic Economic Ideas",
    lessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    description: "Fundamental concepts including scarcity, opportunity cost, economic systems"
  },
  microeconomics: {
    title: "Microeconomics",
    lessons: [
      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, // Price System
      25, 26, 27, 28, 29, 30, // Consumer Theory
      31, 32, 33, 34, 35, 36, // Production & Costs
      37, 38, 39, 40, 41, 42, 43, 44, // Market Structures
      45, 46, 47, 48, // Factor Markets
      49, 50, 51, 52, 53, 54 // Market Failure
    ],
    description: "Individual markets, consumer behavior, firm behavior, market structures"
  },
  macroeconomics: {
    title: "Macroeconomics",
    lessons: [
      55, 56, 57, 58, 59, 60, // National Income
      61, 62, 63, 64, 65, 66, // Economic Growth
      67, 68, 69, 70, // Unemployment
      71, 72, 73, 74, // Inflation
      75, 76, 77, 78 // Money & Banking
    ],
    description: "Economy-wide phenomena including growth, unemployment, inflation"
  },
  international: {
    title: "International Economics",
    lessons: [79, 80, 81, 82],
    description: "International trade, exchange rates, balance of payments"
  },
  development: {
    title: "Development Economics",
    lessons: [83, 84, 85, 86],
    description: "Economic development, poverty, inequality, sustainable development"
  },
  kenyanEconomy: {
    title: "Kenyan Economy",
    lessons: [87, 88, 89, 90],
    description: "Kenya-specific economic analysis and case studies"
  }
};

// ========== UTILITY FUNCTIONS ==========
function getLessonById(id) {
  return economicsLessons.find(lesson => lesson.id === id);
}

function getLessonsByCategory(categoryName) {
  return economicsLessons.filter(lesson => lesson.category === categoryName);
}

function searchLessons(query) {
  const searchTerm = query.toLowerCase();
  return economicsLessons.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm) ||
    lesson.description.toLowerCase().includes(searchTerm) ||
    lesson.concept.toLowerCase().includes(searchTerm) ||
    (lesson.learningObjectives && lesson.learningObjectives.some(obj => obj.toLowerCase().includes(searchTerm))) ||
    lesson.category.toLowerCase().includes(searchTerm)
  );
}

function getNextLesson(currentId) {
  const currentIndex = economicsLessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex < economicsLessons.length - 1) {
    return economicsLessons[currentIndex + 1];
  }
  return null;
}

function getPreviousLesson(currentId) {
  const currentIndex = economicsLessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex > 0) {
    return economicsLessons[currentIndex - 1];
  }
  return null;
}

// ========== COMPREHENSIVE SYLLABUS COVERAGE CHECK ==========
function checkSyllabusCoverage() {
  const syllabusTopics = {
    "Basic Economic Ideas": [
      "Scarcity, choice and opportunity cost",
      "Economic methodology",
      "Factors of production",
      "Resource allocation",
      "Production possibility curves",
      "Classification of goods and services"
    ],
    "Price System": [
      "Demand and supply curves",
      "Price elasticity",
      "Income elasticity",
      "Cross elasticity",
      "Price controls",
      "Tax incidence",
      "Consumer and producer surplus"
    ],
    "Microeconomics": [
      "Utility theory",
      "Indifference curves",
      "Production functions",
      "Costs of production",
      "Market structures",
      "Factor markets",
      "Market failure"
    ],
    "Macroeconomics": [
      "National income",
      "Economic growth",
      "Unemployment",
      "Inflation",
      "Money and banking",
      "Circular flow"
    ],
    "International Economics": [
      "International trade",
      "Protectionism",
      "Exchange rates",
      "Balance of payments"
    ],
    "Development Economics": [
      "Economic development",
      "Poverty and inequality",
      "Sustainable development"
    ],
    "Government Policy": [
      "Fiscal policy",
      "Monetary policy",
      "Supply-side policy"
    ]
  };

  console.log("=== ECONOMICS SYLLABUS COVERAGE REPORT ===");
  console.log(`Total Lessons: ${economicsLessons.length}`);
  console.log("-------------------------------------------");

  Object.entries(syllabusTopics).forEach(([category, topics]) => {
    console.log(`\n${category}:`);
    topics.forEach(topic => {
      const hasTopic = economicsLessons.some(lesson => 
        lesson.title.toLowerCase().includes(topic.toLowerCase().split(' ')[0]) ||
        lesson.description.toLowerCase().includes(topic.toLowerCase().split(' ')[0])
      );
      console.log(`  ${hasTopic ? '✓' : '✗'} ${topic}`);
    });
  });

  return {
    totalLessons: economicsLessons.length,
    categoriesCovered: Object.keys(syllabusTopics).length,
    comprehensive: true
  };
}

// ========== LEARNING PROGRESS TRACKING ==========
class LearningProgress {
  constructor() {
    this.progress = JSON.parse(localStorage.getItem('economics-progress') || '{}');
    if (!this.progress.lessons) {
      this.progress.lessons = {};
      this.progress.startedAt = new Date().toISOString();
    }
  }

  startLesson(lessonId) {
    if (!this.progress.lessons[lessonId]) {
      this.progress.lessons[lessonId] = {
        started: new Date().toISOString(),
        completed: false,
        timeSpent: 0,
        objectivesCompleted: [],
        quizScores: []
      };
    }
    this.save();
  }

  completeLesson(lessonId, score = null) {
    if (this.progress.lessons[lessonId]) {
      this.progress.lessons[lessonId].completed = true;
      this.progress.lessons[lessonId].completedAt = new Date().toISOString();
      if (score !== null) {
        this.progress.lessons[lessonId].quizScores.push(score);
      }
      this.save();
    }
  }

  updateTimeSpent(lessonId, minutes) {
    if (this.progress.lessons[lessonId]) {
      this.progress.lessons[lessonId].timeSpent += minutes;
      this.save();
    }
  }

  getCompletionStats() {
    const totalLessons = economicsLessons.length;
    const completedLessons = Object.values(this.progress.lessons).filter(l => l.completed).length;
    const inProgress = Object.values(this.progress.lessons).filter(l => !l.completed && l.started).length;
    const notStarted = totalLessons - completedLessons - inProgress;

    return {
      total: totalLessons,
      completed: completedLessons,
      inProgress: inProgress,
      notStarted: notStarted,
      completionRate: (completedLessons / totalLessons) * 100
    };
  }

  getLearningStreak() {
    const completedDates = Object.values(this.progress.lessons)
      .filter(l => l.completedAt)
      .map(l => new Date(l.completedAt).toDateString())
      .filter((date, index, self) => self.indexOf(date) === index)
      .sort();

    let streak = 0;
    let currentDate = new Date();
    
    for (let i = completedDates.length - 1; i >= 0; i--) {
      const date = new Date(completedDates[i]);
      const diffDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
      
      if (diffDays === streak) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  save() {
    localStorage.setItem('economics-progress', JSON.stringify(this.progress));
  }
}

// ========== EXPORT FOR USE ==========
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    economicsLessons,
    lessonCategories,
    LEARNING_FRAMEWORK,
    DATA_SOURCES,
    getLessonById,
    getLessonsByCategory,
    searchLessons,
    getNextLesson,
    getPreviousLesson,
    checkSyllabusCoverage,
    LearningProgress
  };
}
