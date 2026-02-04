// Update script to add examples to all lessons
const fs = require('fs');

// Read the current lessons data
let content = fs.readFileSync('lessons-data.js', 'utf8');

// Remove all existing newsExample lines and replace with examples
const updates = [
    // Lesson 1
    {
        old: 'newsExample: "Recent frost in Brazil\'s coffee regions reduced supply by 15%, driving global prices up 23% in January 2026."',
        new: `examples: {
            "Government": "Kenya's coffee board adjusts minimum prices to protect farmers during global price volatility",
            "Households": "Nairobi families switch to tea or reduce coffee consumption when prices rise above KSh 800/kg",
            "Firms": "Java House adjusts menu prices and portion sizes to maintain profit margins during coffee price spikes",
            "Investors": "Coffee futures traders hedge positions based on weather forecasts in major producing regions"
        }`
    },
    // Lesson 2
    {
        old: 'newsExample: "Amazon reported 70% of Black Friday 2025 purchases were unplanned, highlighting the power of behavioral triggers."',
        new: `examples: {
            "Government": "Consumer protection agencies regulate misleading 'limited time' offers and require clear pricing disclosure",
            "Households": "Kenyan families set strict Black Friday budgets and make shopping lists to avoid impulse purchases", 
            "Firms": "Jumia Kenya uses scarcity messaging and social proof to increase conversion rates during sales events",
            "Individuals": "Shoppers use apps like Honey to compare prices and avoid falling for artificial urgency tactics"
        }`
    }
];

// Apply updates
updates.forEach(update => {
    content = content.replace(update.old, update.new);
});

// Write back to file
fs.writeFileSync('lessons-data.js', content);
console.log('Updated lessons with examples');
