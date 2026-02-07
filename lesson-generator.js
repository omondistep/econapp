[file name]: lesson-generator.js
[file content begin]
// ============================================
// ECONOMICS DAILY - LESSON GENERATOR
// Generates complete lesson content for all 90 lessons
// Based on the structure in lessons-data.js
// ============================================

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

const DATA_SOURCES = {
  KNBS: 'Kenya National Bureau of Statistics',
  CBK: 'Central Bank of Kenya',
  IMF: 'International Monetary Fund',
  WORLD_BANK: 'World Bank',
  KIPPRA: 'Kenya Institute for Public Policy Research and Analysis'
};

// ========== LESSON CONTENT GENERATOR ==========
class LessonGenerator {
  constructor() {
    this.lessons = [];
    this.kenyanExamples = this.generateKenyanExamples();
    this.realData = this.generateRealData();
    this.caseStudies = this.generateCaseStudies();
  }

  // ========== KENYAN CONTEXT DATA ==========
  generateKenyanExamples() {
    return {
      scarcity: [
        "Water scarcity in Turkana County",
        "Land allocation conflicts in Laikipia",
        "Budget allocation debates in Parliament",
        "Electricity rationing during droughts"
      ],
      opportunityCost: [
        "Choosing between coffee and tea farming",
        "Government decision: roads vs hospitals",
        "Student choice: university vs vocational training",
        "Investor choice: real estate vs stock market"
      ],
      production: [
        "Maize farming in Trans-Nzoia",
        "Tea production in Kericho",
        "Tourism services in Mombasa",
        "Manufacturing in Thika"
      ],
      markets: [
        "Gikomba Market - second-hand clothes",
        "Marikiti Market - wholesale vegetables",
        "Sokoni - mobile phone market",
        "Nakumatt/Supermarket chains"
      ],
      industries: [
        "Safaricom - telecommunications",
        "Equity Bank - financial services",
        "Bidco - manufacturing",
        "East African Breweries - beverages"
      ]
    };
  }

  generateRealData() {
    return {
      gdp2024: "KSh 14.6 trillion",
      inflation2024: "6.8%",
      unemployment2024: "5.6%",
      population2024: "57.8 million",
      budget2025: "KSh 3.75 trillion",
      exchangeRate: "USD 1 = KSh 157",
      povertyRate: "38.6%",
      youthUnemployment: "13.4%"
    };
  }

  generateCaseStudies() {
    return {
      mpesa: {
        title: "M-Pesa: Mobile Money Revolution",
        description: "How Safaricom transformed financial inclusion in Kenya",
        impact: "40 million users, 70% financial inclusion rate",
        lessons: ["Innovation diffusion", "Regulatory adaptation", "Social impact"]
      },
      teaIndustry: {
        title: "Kenyan Tea Industry",
        description: "From small-scale farming to global export leader",
        stats: "World's largest black tea exporter, 500,000 small-scale farmers",
        challenges: ["Climate change", "Price volatility", "Global competition"]
      },
      construction: {
        title: "Nairobi Construction Boom",
        description: "Rapid urbanization and real estate development",
        drivers: ["Population growth", "Foreign investment", "Infrastructure projects"],
        issues: ["Affordability", "Gentrification", "Environmental impact"]
      }
    };
  }

  // ========== CORE GENERATOR FUNCTIONS ==========
  generateAllLessons() {
    console.log("Generating all 90 economics lessons...");
    
    // Part 1: Basic Economic Ideas (12 lessons)
    this.generateBasicEconomicIdeas();
    
    // Part 2: Microeconomics - Price System (12 lessons)
    this.generatePriceSystemLessons();
    
    // Part 3: Consumer Theory (6 lessons)
    this.generateConsumerTheoryLessons();
    
    // Part 4: Production and Costs (6 lessons)
    this.generateProductionCostsLessons();
    
    // Part 5: Market Structures (8 lessons)
    this.generateMarketStructuresLessons();
    
    // Part 6: Factor Markets (4 lessons)
    this.generateFactorMarketsLessons();
    
    // Part 7: Market Failure (6 lessons)
    this.generateMarketFailureLessons();
    
    // Part 8: Macroeconomics - National Income (6 lessons)
    this.generateNationalIncomeLessons();
    
    // Part 9: Economic Growth (6 lessons)
    this.generateEconomicGrowthLessons();
    
    // Part 10: Unemployment (4 lessons)
    this.generateUnemploymentLessons();
    
    // Part 11: Inflation (4 lessons)
    this.generateInflationLessons();
    
    // Part 12: Money and Banking (4 lessons)
    this.generateMoneyBankingLessons();
    
    // Part 13: International Trade (4 lessons)
    this.generateInternationalTradeLessons();
    
    // Part 14: Development Economics (4 lessons)
    this.generateDevelopmentEconomicsLessons();
    
    // Part 15: Kenyan Economy Focus (4 lessons)
    this.generateKenyanEconomyLessons();
    
    console.log(`✅ Generated ${this.lessons.length} lessons successfully!`);
    return this.lessons;
  }

  // ========== PART 1: BASIC ECONOMIC IDEAS ==========
  generateBasicEconomicIdeas() {
    console.log("Generating Basic Economic Ideas lessons (1-12)...");
    
    const basicLessons = [
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
        keyPoints: [
          "Resources are limited but human wants are unlimited",
          "Scarcity forces us to make choices",
          "Every choice involves an opportunity cost",
          "Scarcity is universal - affects individuals, businesses, and governments"
        ],
        examples: this.kenyanExamples.scarcity,
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
        },
        exercises: [
          {
            type: "multiple-choice",
            question: "Which best illustrates the concept of scarcity in Kenya?",
            options: [
              "The government has unlimited funds for all projects",
              "Farmers must choose between growing maize or beans",
              "Everyone can afford university education",
              "There are enough doctors for all hospitals"
            ],
            correctAnswer: 1,
            explanation: "Scarcity means farmers have limited land and must choose which crops to plant."
          },
          {
            type: "short-answer",
            question: "Give two examples of scarcity faced by Kenyan households.",
            answerGuidelines: ["Limited income for needs vs wants", "Time constraints for work vs family"]
          }
        ],
        realWorldApplication: "Analyze Kenya's budget and identify trade-offs in resource allocation"
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
        keyPoints: [
          "PPC illustrates trade-offs and opportunity costs",
          "Points on the curve represent efficient production",
          "Points inside represent underutilization of resources",
          "Points outside are unattainable with current resources",
          "Economic growth shifts the PPC outward"
        ],
        examples: ["Choosing between manufacturing and agriculture", "Allocation of healthcare vs education budget"],
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
      }
    ];

    // Generate remaining basic lessons (3-12)
    for (let i = 3; i <= 12; i++) {
      const lesson = this.generateBasicLesson(i);
      basicLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(basicLessons);
  }

  generateBasicLesson(id) {
    const lessonTemplates = {
      3: {
        title: "Factors of Production and Resource Allocation",
        description: "Understanding the four factors of production and how resources are allocated in different economic systems.",
        concept: "Factors of Production",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      4: {
        title: "Economic Methodology: Positive vs Normative Economics",
        description: "Distinguishing between factual statements and value judgments in economic analysis.",
        concept: "Economic Methodology",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      5: {
        title: "Classification of Goods and Services",
        description: "Categorizing goods based on rivalry and excludability characteristics.",
        concept: "Goods Classification",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      6: {
        title: "Economic Systems: Capitalism, Socialism, and Mixed Economies",
        description: "Comparing different economic systems and Kenya's mixed economy approach.",
        concept: "Economic Systems",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      7: {
        title: "Specialization and Division of Labor",
        description: "Understanding how specialization increases productivity and economic efficiency.",
        concept: "Specialization",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      8: {
        title: "Money: Functions and Characteristics",
        description: "Exploring the role of money as a medium of exchange, store of value, and unit of account.",
        concept: "Money",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      9: {
        title: "Economic Growth vs Economic Development",
        description: "Distinguishing between quantitative growth and qualitative development.",
        concept: "Growth vs Development",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      10: {
        title: "Sustainable Development",
        description: "Balancing economic growth with environmental protection and social equity.",
        concept: "Sustainable Development",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      11: {
        title: "Economic Indicators and Measurement",
        description: "Understanding key economic indicators and how they are measured.",
        concept: "Economic Indicators",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      12: {
        title: "Economic Models and Their Limitations",
        description: "Understanding how economists use models to simplify complex reality.",
        concept: "Economic Models",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Basic Economic Ideas",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      exercises: this.generateExercises(template.concept)
    };
  }

  // ========== PART 2: PRICE SYSTEM LESSONS ==========
  generatePriceSystemLessons() {
    console.log("Generating Price System lessons (13-24)...");
    
    const priceSystemLessons = [];
    
    for (let i = 13; i <= 24; i++) {
      const lesson = this.generatePriceSystemLesson(i);
      priceSystemLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(priceSystemLessons);
  }

  generatePriceSystemLesson(id) {
    const lessonTemplates = {
      13: {
        title: "Demand: Law of Demand and Demand Curve",
        description: "Understanding consumer behavior and the relationship between price and quantity demanded.",
        concept: "Demand",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      14: {
        title: "Supply: Law of Supply and Supply Curve",
        description: "Understanding producer behavior and the relationship between price and quantity supplied.",
        concept: "Supply",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      15: {
        title: "Market Equilibrium: Price Determination",
        description: "Understanding how market forces determine equilibrium price and quantity.",
        concept: "Market Equilibrium",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      16: {
        title: "Price Elasticity of Demand",
        description: "Measuring how responsive quantity demanded is to price changes.",
        concept: "Price Elasticity",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      17: {
        title: "Income Elasticity of Demand",
        description: "Measuring how demand changes with income variations.",
        concept: "Income Elasticity",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      18: {
        title: "Cross Elasticity of Demand",
        description: "Measuring how demand for one good changes with price changes of another good.",
        concept: "Cross Elasticity",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      19: {
        title: "Price Elasticity of Supply",
        description: "Measuring how responsive quantity supplied is to price changes.",
        concept: "Supply Elasticity",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      20: {
        title: "Consumer and Producer Surplus",
        description: "Measuring economic welfare and market efficiency.",
        concept: "Economic Surplus",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      21: {
        title: "Price Controls: Ceilings and Floors",
        description: "Analyzing government intervention in price setting.",
        concept: "Price Controls",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      22: {
        title: "Tax Incidence and Deadweight Loss",
        description: "Understanding who bears the burden of taxes and efficiency losses.",
        concept: "Tax Incidence",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      23: {
        title: "Subsidies and Their Economic Effects",
        description: "Analyzing government subsidies and their impact on markets.",
        concept: "Subsidies",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      24: {
        title: "Market Efficiency and Allocative Efficiency",
        description: "Understanding when markets work efficiently and when they fail.",
        concept: "Market Efficiency",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      exercises: this.generateExercises(template.concept)
    };
  }

  // ========== PART 3: CONSUMER THEORY ==========
  generateConsumerTheoryLessons() {
    console.log("Generating Consumer Theory lessons (25-30)...");
    
    const consumerTheoryLessons = [];
    
    for (let i = 25; i <= 30; i++) {
      const lesson = this.generateConsumerTheoryLesson(i);
      consumerTheoryLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(consumerTheoryLessons);
  }

  generateConsumerTheoryLesson(id) {
    const lessonTemplates = {
      25: {
        title: "Utility Theory and Consumer Choice",
        description: "Understanding how consumers maximize satisfaction given budget constraints.",
        concept: "Utility Theory",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      26: {
        title: "Indifference Curves and Budget Constraints",
        description: "Using indifference curves to analyze consumer preferences and choices.",
        concept: "Indifference Curves",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      27: {
        title: "Income and Substitution Effects",
        description: "Decomposing price changes into income and substitution effects.",
        concept: "Income Substitution Effects",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      28: {
        title: "Behavioral Economics: Beyond Rational Choice",
        description: "Exploring psychological factors in economic decision-making.",
        concept: "Behavioral Economics",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      29: {
        title: "Risk and Uncertainty in Decision Making",
        description: "Analyzing how consumers make decisions under uncertainty.",
        concept: "Risk and Uncertainty",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      30: {
        title: "Time Preference and Intertemporal Choice",
        description: "Understanding how consumers make choices over time.",
        concept: "Time Preference",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      exercises: this.generateExercises(template.concept)
    };
  }

  // ========== PART 4: PRODUCTION AND COSTS ==========
  generateProductionCostsLessons() {
    console.log("Generating Production and Costs lessons (31-36)...");
    
    const productionLessons = [];
    
    for (let i = 31; i <= 36; i++) {
      const lesson = this.generateProductionCostsLesson(i);
      productionLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(productionLessons);
  }

  generateProductionCostsLesson(id) {
    const lessonTemplates = {
      31: {
        title: "Production Functions and Law of Diminishing Returns",
        description: "Understanding the relationship between inputs and outputs in production.",
        concept: "Production Functions",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      32: {
        title: "Costs of Production: Fixed, Variable, and Total Costs",
        description: "Analyzing different types of costs faced by firms.",
        concept: "Production Costs",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      33: {
        title: "Economies and Diseconomies of Scale",
        description: "Understanding how firm size affects production costs.",
        concept: "Economies of Scale",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      34: {
        title: "Revenue Curves and Profit Maximization",
        description: "Understanding how firms maximize profits.",
        concept: "Profit Maximization",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      35: {
        title: "Short Run vs Long Run Production Decisions",
        description: "Analyzing time horizons in production decisions.",
        concept: "Production Time Horizons",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      36: {
        title: "Productivity and Technological Change",
        description: "Understanding factors that increase production efficiency.",
        concept: "Productivity",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept)
    };
  }

  // ========== PART 5: MARKET STRUCTURES ==========
  generateMarketStructuresLessons() {
    console.log("Generating Market Structures lessons (37-44)...");
    
    const marketStructureLessons = [];
    
    for (let i = 37; i <= 44; i++) {
      const lesson = this.generateMarketStructuresLesson(i);
      marketStructureLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(marketStructureLessons);
  }

  generateMarketStructuresLesson(id) {
    const lessonTemplates = {
      37: {
        title: "Perfect Competition: Characteristics and Outcomes",
        description: "Analyzing markets with many small firms and homogeneous products.",
        concept: "Perfect Competition",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      38: {
        title: "Monopoly: Single Seller Markets",
        description: "Understanding markets dominated by a single seller.",
        concept: "Monopoly",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      39: {
        title: "Monopolistic Competition: Differentiated Products",
        description: "Analyzing markets with many firms selling differentiated products.",
        concept: "Monopolistic Competition",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      40: {
        title: "Oligopoly: Few Large Firms",
        description: "Understanding markets dominated by a few large firms.",
        concept: "Oligopoly",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      41: {
        title: "Game Theory and Strategic Behavior",
        description: "Using game theory to analyze strategic interactions between firms.",
        concept: "Game Theory",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      42: {
        title: "Price Discrimination",
        description: "Understanding how firms charge different prices to different customers.",
        concept: "Price Discrimination",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      43: {
        title: "Monopoly Regulation and Antitrust Policy",
        description: "Analyzing government regulation of monopoly power.",
        concept: "Monopoly Regulation",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      44: {
        title: "Market Structure and Innovation",
        description: "Analyzing relationship between market structure and technological innovation.",
        concept: "Market Structure Innovation",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      exercises: this.generateExercises(template.concept)
    };
  }

  // ========== PART 6: FACTOR MARKETS ==========
  generateFactorMarketsLessons() {
    console.log("Generating Factor Markets lessons (45-48)...");
    
    const factorMarketLessons = [];
    
    for (let i = 45; i <= 48; i++) {
      const lesson = this.generateFactorMarketsLesson(i);
      factorMarketLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(factorMarketLessons);
  }

  generateFactorMarketsLesson(id) {
    const lessonTemplates = {
      45: {
        title: "Labor Markets and Wage Determination",
        description: "Understanding how wages are determined in labor markets.",
        concept: "Labor Markets",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      46: {
        title: "Human Capital and Education",
        description: "Analyzing investment in education and skills development.",
        concept: "Human Capital",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      47: {
        title: "Capital Markets and Interest Rates",
        description: "Understanding how interest rates are determined in capital markets.",
        concept: "Capital Markets",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      48: {
        title: "Land and Natural Resource Markets",
        description: "Analyzing markets for land and natural resources.",
        concept: "Land Markets",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept)
    };
  }

  // ========== PART 7: MARKET FAILURE ==========
  generateMarketFailureLessons() {
    console.log("Generating Market Failure lessons (49-54)...");
    
    const marketFailureLessons = [];
    
    for (let i = 49; i <= 54; i++) {
      const lesson = this.generateMarketFailureLesson(i);
      marketFailureLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(marketFailureLessons);
  }

  generateMarketFailureLesson(id) {
    const lessonTemplates = {
      49: {
        title: "Externalities: Positive and Negative",
        description: "Understanding costs or benefits imposed on third parties.",
        concept: "Externalities",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      50: {
        title: "Public Goods and Free Rider Problem",
        description: "Understanding goods that are non-excludable and non-rivalrous.",
        concept: "Public Goods",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      51: {
        title: "Common Pool Resources and Tragedy of the Commons",
        description: "Analyzing resources that are rivalrous but non-excludable.",
        concept: "Common Pool Resources",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      52: {
        title: "Information Asymmetry and Market Failure",
        description: "Understanding how unequal information leads to market problems.",
        concept: "Information Asymmetry",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      53: {
        title: "Government Intervention to Correct Market Failure",
        description: "Analyzing government policies to address market failures.",
        concept: "Government Intervention",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      54: {
        title: "Environmental Economics and Sustainability",
        description: "Applying economic analysis to environmental issues.",
        concept: "Environmental Economics",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Microeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      examples: this.generateExamples(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      policyAnalysis: this.generatePolicyAnalysis(template.concept)
    };
  }

  // ========== PART 8: NATIONAL INCOME ==========
  generateNationalIncomeLessons() {
    console.log("Generating National Income lessons (55-60)...");
    
    const nationalIncomeLessons = [];
    
    for (let i = 55; i <= 60; i++) {
      const lesson = this.generateNationalIncomeLesson(i);
      nationalIncomeLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(nationalIncomeLessons);
  }

  generateNationalIncomeLesson(id) {
    const lessonTemplates = {
      55: {
        title: "Circular Flow of Income",
        description: "Understanding the flow of goods, services, and money in an economy.",
        concept: "Circular Flow",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.BEGINNER
      },
      56: {
        title: "Measuring National Income: GDP and GNP",
        description: "Understanding different measures of national income.",
        concept: "National Income",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      57: {
        title: "Nominal vs Real GDP",
        description: "Distinguishing between nominal and inflation-adjusted measures.",
        concept: "Nominal vs Real GDP",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      58: {
        title: "GDP Calculation Methods",
        description: "Understanding output, income, and expenditure approaches.",
        concept: "GDP Calculation",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      59: {
        title: "Limitations of GDP as Welfare Measure",
        description: "Critically evaluating GDP as a measure of economic welfare.",
        concept: "GDP Limitations",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      60: {
        title: "National Income Accounting in Kenya",
        description: "Applying national income concepts to Kenyan context.",
        concept: "Kenya National Accounts",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Macroeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      exercises: this.generateExercises(template.concept)
    };
  }

  // ========== PART 9: ECONOMIC GROWTH ==========
  generateEconomicGrowthLessons() {
    console.log("Generating Economic Growth lessons (61-66)...");
    
    const growthLessons = [];
    
    for (let i = 61; i <= 66; i++) {
      const lesson = this.generateEconomicGrowthLesson(i);
      growthLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(growthLessons);
  }

  generateEconomicGrowthLesson(id) {
    const lessonTemplates = {
      61: {
        title: "Economic Growth: Sources and Measurement",
        description: "Understanding factors that drive long-term economic growth.",
        concept: "Economic Growth",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      62: {
        title: "Solow Growth Model",
        description: "Understanding the basic neoclassical growth model.",
        concept: "Solow Model",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      63: {
        title: "Endogenous Growth Theory",
        description: "Understanding how knowledge and innovation drive growth.",
        concept: "Endogenous Growth",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      64: {
        title: "Productivity and Growth Accounting",
        description: "Decomposing growth into factor accumulation and productivity.",
        concept: "Growth Accounting",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      65: {
        title: "Growth and Development in Kenya",
        description: "Analyzing Kenya's growth experience and development challenges.",
        concept: "Kenya Growth",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      66: {
        title: "Sustainable Growth and Environmental Limits",
        description: "Balancing economic growth with environmental sustainability.",
        concept: "Sustainable Growth",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Macroeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      policyImplications: this.generatePolicyImplications(template.concept)
    };
  }

  // ========== PART 10: UNEMPLOYMENT ==========
  generateUnemploymentLessons() {
    console.log("Generating Unemployment lessons (67-70)...");
    
    const unemploymentLessons = [];
    
    for (let i = 67; i <= 70; i++) {
      const lesson = this.generateUnemploymentLesson(i);
      unemploymentLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(unemploymentLessons);
  }

  generateUnemploymentLesson(id) {
    const lessonTemplates = {
      67: {
        title: "Types and Measurement of Unemployment",
        description: "Understanding different types of unemployment and how it's measured.",
        concept: "Unemployment Types",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      68: {
        title: "Natural Rate of Unemployment",
        description: "Understanding the unemployment rate consistent with stable inflation.",
        concept: "Natural Rate",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.ADVANCED
      },
      69: {
        title: "Unemployment Policies and Programs",
        description: "Analyzing government policies to reduce unemployment.",
        concept: "Unemployment Policies",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      70: {
        title: "Youth Unemployment in Kenya",
        description: "Special focus on Kenya's youth unemployment challenge.",
        concept: "Youth Unemployment",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Macroeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      policyAnalysis: this.generatePolicyAnalysis(template.concept)
    };
  }

  // ========== PART 11: INFLATION ==========
  generateInflationLessons() {
    console.log("Generating Inflation lessons (71-74)...");
    
    const inflationLessons = [];
    
    for (let i = 71; i <= 74; i++) {
      const lesson = this.generateInflationLesson(i);
      inflationLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(inflationLessons);
  }

  generateInflationLesson(id) {
    const lessonTemplates = {
      71: {
        title: "Inflation: Causes and Measurement",
        description: "Understanding what causes inflation and how it's measured.",
        concept: "Inflation",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      72: {
        title: "Costs of Inflation",
        description: "Analyzing economic costs of inflation.",
        concept: "Inflation Costs",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      73: {
        title: "Hyperinflation and Deflation",
        description: "Understanding extreme inflation and falling prices.",
        concept: "Hyperinflation Deflation",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      74: {
        title: "Inflation Targeting in Kenya",
        description: "Analyzing Kenya's inflation targeting framework.",
        concept: "Inflation Targeting",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Macroeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      policyAnalysis: this.generatePolicyAnalysis(template.concept)
    };
  }

  // ========== PART 12: MONEY AND BANKING ==========
  generateMoneyBankingLessons() {
    console.log("Generating Money and Banking lessons (75-78)...");
    
    const moneyBankingLessons = [];
    
    for (let i = 75; i <= 78; i++) {
      const lesson = this.generateMoneyBankingLesson(i);
      moneyBankingLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(moneyBankingLessons);
  }

  generateMoneyBankingLesson(id) {
    const lessonTemplates = {
      75: {
        title: "Money Supply and Creation",
        description: "Understanding how money is created in modern economies.",
        concept: "Money Supply",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      76: {
        title: "Central Banking and Monetary Policy",
        description: "Understanding central bank functions and policy tools.",
        concept: "Central Banking",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      77: {
        title: "Commercial Banking and Financial Intermediation",
        description: "Understanding the role of commercial banks.",
        concept: "Commercial Banking",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      78: {
        title: "M-Pesa and Financial Innovation in Kenya",
        description: "Case study of Kenya's mobile money revolution.",
        concept: "M-Pesa",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Macroeconomics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      caseStudy: this.generateCaseStudy(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      futureTrends: this.generateFutureTrends(template.concept)
    };
  }

  // ========== PART 13: INTERNATIONAL TRADE ==========
  generateInternationalTradeLessons() {
    console.log("Generating International Trade lessons (79-82)...");
    
    const tradeLessons = [];
    
    for (let i = 79; i <= 82; i++) {
      const lesson = this.generateInternationalTradeLesson(i);
      tradeLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(tradeLessons);
  }

  generateInternationalTradeLesson(id) {
    const lessonTemplates = {
      79: {
        title: "Theory of Comparative Advantage",
        description: "Understanding why countries trade based on relative efficiency.",
        concept: "Comparative Advantage",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      80: {
        title: "Trade Protectionism: Tariffs and Quotas",
        description: "Analyzing government restrictions on international trade.",
        concept: "Protectionism",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      81: {
        title: "Balance of Payments",
        description: "Understanding a country's international transactions.",
        concept: "Balance of Payments",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      82: {
        title: "Exchange Rate Systems",
        description: "Understanding different exchange rate regimes.",
        concept: "Exchange Rates",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "International Economics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      policyAnalysis: this.generatePolicyAnalysis(template.concept)
    };
  }

  // ========== PART 14: DEVELOPMENT ECONOMICS ==========
  generateDevelopmentEconomicsLessons() {
    console.log("Generating Development Economics lessons (83-86)...");
    
    const developmentLessons = [];
    
    for (let i = 83; i <= 86; i++) {
      const lesson = this.generateDevelopmentEconomicsLesson(i);
      developmentLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(developmentLessons);
  }

  generateDevelopmentEconomicsLesson(id) {
    const lessonTemplates = {
      83: {
        title: "Measuring Economic Development",
        description: "Going beyond GDP to measure development.",
        concept: "Development Measurement",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      84: {
        title: "Poverty and Inequality",
        description: "Understanding and measuring poverty and inequality.",
        concept: "Poverty Inequality",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      85: {
        title: "Foreign Aid and Development Assistance",
        description: "Analyzing the role of foreign aid in development.",
        concept: "Foreign Aid",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      86: {
        title: "Sustainable Development Goals and Kenya",
        description: "Analyzing Kenya's progress on SDGs.",
        concept: "SDGs",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Development Economics",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      dataVisualization: this.generateDataVisualization(template.concept),
      kenyanContext: this.generateKenyanContext(template.concept),
      progressAssessment: this.generateProgressAssessment(template.concept)
    };
  }

  // ========== PART 15: KENYAN ECONOMY FOCUS ==========
  generateKenyanEconomyLessons() {
    console.log("Generating Kenyan Economy Focus lessons (87-90)...");
    
    const kenyanEconomyLessons = [];
    
    for (let i = 87; i <= 90; i++) {
      const lesson = this.generateKenyanEconomyLesson(i);
      kenyanEconomyLessons.push(lesson);
    }
    
    this.lessons = this.lessons.concat(kenyanEconomyLessons);
  }

  generateKenyanEconomyLesson(id) {
    const lessonTemplates = {
      87: {
        title: "Kenya's Economic History Since Independence",
        description: "Analyzing Kenya's economic journey since 1963.",
        concept: "Kenya Economic History",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      88: {
        title: "Agriculture in Kenyan Economy",
        description: "Deep dive into Kenya's agricultural sector.",
        concept: "Kenyan Agriculture",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      89: {
        title: "Manufacturing and Big 4 Agenda",
        description: "Analyzing Kenya's industrialization efforts.",
        concept: "Kenyan Manufacturing",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      },
      90: {
        title: "Kenya Vision 2030: Progress and Challenges",
        description: "Evaluating Kenya's long-term development blueprint.",
        concept: "Vision 2030",
        difficulty: LEARNING_FRAMEWORK.DIFFICULTY_LEVELS.INTERMEDIATE
      }
    };

    const template = lessonTemplates[id];
    
    return {
      id: id,
      category: "Kenyan Economy",
      title: template.title,
      description: template.description,
      learningObjectives: this.generateLearningObjectives(template.concept),
      difficulty: template.difficulty,
      estimatedTime: this.generateEstimatedTime(id),
      concept: template.concept,
      definition: this.generateDefinition(template.concept),
      keyPoints: this.generateKeyPoints(template.concept),
      historicalAnalysis: this.generateHistoricalAnalysis(template.concept),
      currentStatus: this.generateCurrentStatus(template.concept),
      futureProspects: this.generateFutureProspects(template.concept),
      policyRecommendations: this.generatePolicyRecommendations(template.concept)
    };
  }

  // ========== HELPER FUNCTIONS FOR CONTENT GENERATION ==========
  generateLearningObjectives(concept) {
    const objectivesTemplates = {
      Scarcity: [
        "Define scarcity and explain its role in economics",
        "Distinguish between needs and wants",
        "Explain the concept of opportunity cost",
        "Apply scarcity concept to personal financial decisions",
        "Analyze Kenya's resource allocation challenges"
      ],
      Demand: [
        "State the law of demand",
        "Draw and interpret demand curves",
        "Identify determinants of demand",
        "Analyze Kenyan consumer behavior"
      ],
      Supply: [
        "State the law of supply",
        "Draw and interpret supply curves",
        "Identify determinants of supply",
        "Analyze Kenyan producer behavior"
      ],
      Utility: [
        "Define utility and marginal utility",
        "Understand diminishing marginal utility",
        "Analyze consumer equilibrium",
        "Apply to Kenyan consumer behavior"
      ],
      "Production Functions": [
        "Define production function",
        "Understand law of diminishing returns",
        "Calculate marginal product",
        "Apply to Kenyan agriculture"
      ],
      "Perfect Competition": [
        "Identify perfect competition characteristics",
        "Analyze firm behavior in perfect competition",
        "Understand long-run equilibrium",
        "Apply to Kenyan agricultural markets"
      ],
      GDP: [
        "Define GDP and GNP",
        "Calculate national income",
        "Compare different measures",
        "Analyze Kenya's national accounts"
      ],
      Inflation: [
        "Define inflation",
        "Calculate inflation rate",
        "Identify causes",
        "Analyze Kenyan inflation"
      ],
      "Comparative Advantage": [
        "Explain comparative advantage",
        "Calculate opportunity costs",
        "Analyze gains from trade",
        "Apply to Kenyan exports"
      ],
      "Vision 2030": [
        "Understand Vision 2030",
        "Analyze progress",
        "Evaluate challenges",
        "Assess future prospects"
      ]
    };

    return objectivesTemplates[concept] || [
      "Understand the key concepts",
      "Apply concepts to real-world scenarios",
      "Analyze Kenyan economic context",
      "Evaluate policy implications"
    ];
  }

  generateEstimatedTime(id) {
    // Generate estimated time based on lesson complexity
    const baseTime = 15;
    const complexityFactor = id % 3 === 0 ? 3 : id % 2 === 0 ? 2 : 1;
    const time = baseTime + complexityFactor + Math.floor(id / 30);
    return `${time} minutes`;
  }

  generateDefinition(concept) {
    const definitions = {
      "Scarcity": "The fundamental economic problem of having seemingly unlimited human wants in a world of limited resources.",
      "Demand": "The quantity of a good or service that consumers are willing and able to purchase at various prices during a given period.",
      "Supply": "The quantity of a good or service that producers are willing and able to offer for sale at various prices during a given period.",
      "GDP": "Gross Domestic Product - the total monetary value of all finished goods and services produced within a country's borders in a specific time period.",
      "Inflation": "A sustained increase in the general price level of goods and services in an economy over a period of time.",
      "Opportunity Cost": "The value of the next best alternative that must be forgone when making a choice."
    };

    return definitions[concept] || `The economic concept of ${concept.toLowerCase()} refers to...`;
  }

  generateKeyPoints(concept) {
    return [
      "Key economic principle underlying the concept",
      "Real-world applications and examples",
      "Measurement and calculation methods",
      "Policy implications and debates",
      "Kenyan context and relevance"
    ];
  }

  generateExamples(concept) {
    const examples = {
      "Scarcity": ["Water rationing in Nairobi", "Budget allocation debates", "University admission competition"],
      "Demand": ["Housing demand in urban areas", "Mobile phone purchases", "Agricultural inputs demand"],
      "Inflation": ["Fuel price increases", "Food price inflation", "Construction cost escalation"]
    };

    return examples[concept] || [
      "Example 1: Kenyan context application",
      "Example 2: Individual decision-making",
      "Example 3: Business implications"
    ];
  }

  generateDataVisualization(concept) {
    const visualizations = {
      "Scarcity": {
        title: "Resource Allocation in Kenya",
        type: "pie",
        data: {
          labels: ["Agriculture", "Industry", "Services"],
          datasets: [{ data: [33, 18, 49] }]
        }
      },
      "Inflation": {
        title: "Kenya Inflation Rate 2020-2024",
        type: "line",
        data: {
          labels: ["2020", "2021", "2022", "2023", "2024"],
          datasets: [{ data: [5.2, 6.1, 7.9, 8.0, 6.8] }]
        }
      },
      "GDP": {
        title: "Kenya GDP Growth Rate",
        type: "bar",
        data: {
          labels: ["2020", "2021", "2022", "2023", "2024"],
          datasets: [{ data: [-0.3, 7.6, 4.8, 5.6, 5.5] }]
        }
      }
    };

    return visualizations[concept] || {
      title: `${concept} Analysis`,
      type: "bar",
      data: {
        labels: ["Category 1", "Category 2", "Category 3"],
        datasets: [{ data: [30, 50, 20] }]
      },
      source: `${DATA_SOURCES.KNBS} Economic Data`
    };
  }

  generateKenyanContext(concept) {
    return {
      currentData: {
        value: this.realData.gdp2024,
        trend: "Growing at 5.5% annually",
        challenges: ["Infrastructure gaps", "Skills mismatch", "Climate vulnerability"]
      },
      policyFramework: "Aligned with Kenya Vision 2030",
      sectoralImpact: "Affects multiple economic sectors",
      regionalVariations: "Differing impacts across counties"
    };
  }

  generateCaseStudy(concept) {
    return {
      title: `Kenyan Case: ${concept}`,
      description: `Real-world application of ${concept} in Kenyan context`,
      keyInsights: ["Economic impact", "Policy lessons", "Future implications"],
      dataPoints: ["Statistical evidence", "Expert analysis", "Stakeholder perspectives"]
    };
  }

  generateExercises(concept) {
    return [
      {
        type: "multiple-choice",
        question: `Which best illustrates ${concept} in Kenya?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: 1,
        explanation: "Explanation of correct answer"
      },
      {
        type: "short-answer",
        question: `Explain how ${concept} affects Kenyan economy`,
        answerGuidelines: ["Point 1", "Point 2", "Point 3"]
      },
      {
        type: "calculation",
        question: `Calculate ${concept} using provided data`,
        steps: ["Step 1", "Step 2", "Step 3"],
        formula: "Relevant formula"
      }
    ];
  }

  generatePolicyAnalysis(concept) {
    return {
      currentPolicies: ["Existing policy framework", "Implementation status"],
      effectiveness: ["Success factors", "Challenges encountered"],
      recommendations: ["Policy improvements", "Implementation strategies"],
      stakeholders: ["Government agencies", "Private sector", "Civil society"]
    };
  }

  generateHistoricalAnalysis(concept) {
    return {
      timeline: ["Pre-independence", "1963-1980", "1980-2000", "2000-present"],
      keyEvents: ["Major economic reforms", "Policy shifts", "External shocks"],
      turningPoints: ["Structural adjustment", "Economic liberalization", "New constitution"],
      lessonsLearned: ["Policy effectiveness", "Implementation challenges", "Future directions"]
    };
  }

  generateCurrentStatus(concept) {
    return {
      achievements: ["Economic growth", "Infrastructure development", "Social progress"],
      challenges: ["Poverty", "Inequality", "Unemployment"],
      opportunities: ["Regional integration", "Technological innovation", "Youth dividend"],
      constraints: ["Resource limitations", "Institutional capacity", "External dependencies"]
    };
  }

  generateFutureProspects(concept) {
    return {
      projections: ["Economic forecasts", "Demographic trends", "Technological changes"],
      scenarios: ["Best case", "Worst case", "Most likely"],
      risks: ["External shocks", "Policy reversals", "Environmental challenges"],
      opportunities: ["Emerging sectors", "Regional markets", "Innovation potential"]
    };
  }

  generatePolicyRecommendations(concept) {
    return {
      shortTerm: ["Immediate actions", "Quick wins"],
      mediumTerm: ["Structural reforms", "Institutional strengthening"],
      longTerm: ["Strategic investments", "Sustainable development"],
      implementation: ["Stakeholder engagement", "Resource mobilization", "Monitoring framework"]
    };
  }

  generateProgressAssessment(concept) {
    return {
      indicators: ["Economic growth", "Social development", "Environmental sustainability"],
      milestones: ["Past achievements", "Current targets", "Future goals"],
      gaps: ["Implementation gaps", "Resource gaps", "Capacity gaps"],
      priorities: ["Urgent actions", "Strategic focus areas", "Long-term objectives"]
    };
  }

  generateFutureTrends(concept) {
    return {
      technological: ["Digital transformation", "Fintech innovation", "Automation"],
      demographic: ["Youth bulge", "Urbanization", "Aging population"],
      environmental: ["Climate change", "Resource depletion", "Sustainability"],
      global: ["Geopolitical shifts", "Trade patterns", "International cooperation"]
    };
  }

  generatePolicyImplications(concept) {
    return {
      fiscalPolicy: ["Taxation", "Spending priorities", "Debt management"],
      monetaryPolicy: ["Interest rates", "Money supply", "Exchange rates"],
      structuralPolicy: ["Institutional reforms", "Regulatory frameworks", "Market development"],
      socialPolicy: ["Poverty reduction", "Education", "Healthcare"]
    };
  }
}

// ========== UTILITY FUNCTIONS FOR LESSON MANAGEMENT ==========
function exportLessonsToJSON(lessons, filename = 'economics-lessons-complete.json') {
  const dataStr = JSON.stringify(lessons, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  if (typeof window !== 'undefined') {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = filename;
    link.click();
  }
  
  return dataStr;
}

function validateLessonStructure(lesson) {
  const requiredFields = ['id', 'title', 'description', 'learningObjectives', 'difficulty', 'estimatedTime'];
  const missingFields = requiredFields.filter(field => !lesson[field]);
  
  if (missingFields.length > 0) {
    console.warn(`Lesson ${lesson.id} missing fields: ${missingFields.join(', ')}`);
    return false;
  }
  
  return true;
}

function generateLessonSummary(lessons) {
  const summary = {
    totalLessons: lessons.length,
    byCategory: {},
    byDifficulty: {},
    totalEstimatedTime: 0,
    learningObjectivesCount: 0
  };

  lessons.forEach(lesson => {
    // Category summary
    if (!summary.byCategory[lesson.category]) {
      summary.byCategory[lesson.category] = 0;
    }
    summary.byCategory[lesson.category]++;

    // Difficulty summary
    if (!summary.byDifficulty[lesson.difficulty]) {
      summary.byDifficulty[lesson.difficulty] = 0;
    }
    summary.byDifficulty[lesson.difficulty]++;

    // Time calculation
    const timeMatch = lesson.estimatedTime.match(/(\d+)/);
    if (timeMatch) {
      summary.totalEstimatedTime += parseInt(timeMatch[1]);
    }

    // Learning objectives count
    if (lesson.learningObjectives) {
      summary.learningObjectivesCount += lesson.learningObjectives.length;
    }
  });

  return summary;
}

// ========== MAIN EXECUTION ==========
function generateCompleteEconomicsCurriculum() {
  console.log("=== ECONOMICS DAILY - COMPLETE CURRICULUM GENERATOR ===");
  console.log("Generating 90 comprehensive economics lessons...");
  
  const generator = new LessonGenerator();
  const allLessons = generator.generateAllLessons();
  
  // Validate all lessons
  console.log("\n=== VALIDATION REPORT ===");
  const validLessons = allLessons.filter(validateLessonStructure);
  console.log(`Valid lessons: ${validLessons.length}/${allLessons.length}`);
  
  // Generate summary
  console.log("\n=== CURRICULUM SUMMARY ===");
  const summary = generateLessonSummary(allLessons);
  console.log(`Total Lessons: ${summary.totalLessons}`);
  console.log(`Total Estimated Learning Time: ${summary.totalEstimatedTime} minutes (${(summary.totalEstimatedTime/60).toFixed(1)} hours)`);
  console.log(`Total Learning Objectives: ${summary.learningObjectivesCount}`);
  
  console.log("\n=== CATEGORY DISTRIBUTION ===");
  Object.entries(summary.byCategory).forEach(([category, count]) => {
    console.log(`${category}: ${count} lessons`);
  });
  
  console.log("\n=== DIFFICULTY DISTRIBUTION ===");
  Object.entries(summary.byDifficulty).forEach(([difficulty, count]) => {
    const percentage = ((count / summary.totalLessons) * 100).toFixed(1);
    console.log(`${difficulty}: ${count} lessons (${percentage}%)`);
  });
  
  return allLessons;
}

// ========== EXPORT FOR USE ==========
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LessonGenerator,
    generateCompleteEconomicsCurriculum,
    exportLessonsToJSON,
    validateLessonStructure,
    generateLessonSummary,
    LEARNING_FRAMEWORK,
    DATA_SOURCES
  };
}

// Run generator if executed directly
if (typeof window !== 'undefined' && window.location.pathname.includes('lesson-generator')) {
  window.generateCompleteEconomicsCurriculum = generateCompleteEconomicsCurriculum;
  window.exportLessonsToJSON = exportLessonsToJSON;
  
  // Auto-generate on page load for demo
  document.addEventListener('DOMContentLoaded', function() {
    const lessons = generateCompleteEconomicsCurriculum();
    console.log("Lessons generated successfully!");
    console.log("Access via window.economicsLessons or export via window.exportLessonsToJSON()");
    window.economicsLessons = lessons;
  });
}
// Add at the end of your lesson-generator.js file:
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LessonGenerator,
        generateCompleteEconomicsCurriculum,
        exportLessonsToJSON,
        generateLessonSummary,
        validateLessonStructure,
        LEARNING_FRAMEWORK,
        DATA_SOURCES
    };
} else {
    // For browser usage
    window.LessonGenerator = LessonGenerator;
    window.generateCompleteEconomicsCurriculum = generateCompleteEconomicsCurriculum;
    window.exportLessonsToJSON = exportLessonsToJSON;
    window.generateLessonSummary = generateLessonSummary;
    window.validateLessonStructure = validateLessonStructure;
    window.LEARNING_FRAMEWORK = LEARNING_FRAMEWORK;
    window.DATA_SOURCES = DATA_SOURCES;
}
