// Рекомендуемые дневные значения RDV 
export const recommendedDailyValues = {
    omega3: 1.6,    // граммы
    omega6: 17,     // граммы
    protein: 50,    // граммы
    lysine: 2.1,    // граммы
    methionine: 1.1 // граммы
};

// Источники белка и их питательные свойства
export const proteinSources = {
    hemp: { 
        protein: 30, 
        lysine: 1.4, 
        methionine: 0.8,
        omega3: 2.0,
        omega6: 6.0,
        omega9: 1.5,
        gla: 1.34,
        arginine: 6.5,
        edestin: 24.4,
        mesoInositol: 0.15,
        tooltip: "Hemp seeds are a complete protein source, rich in omega-3 and omega-6 fatty acids."
    },
    pea: { 
        protein: 25, 
        lysine: 1.8, 
        methionine: 0.3,
        omega3: 0.1,
        omega6: 0.6,
        omega9: 0.4,
        gla: 0,
        arginine: 2.2,
        edestin: 0,
        mesoInositol: 0,
        tooltip: "Pea protein is easily digestible and rich in branched-chain amino acids (BCAAs)."
    },
    rice: { 
        protein: 7, 
        lysine: 0.3, 
        methionine: 0.3,
        omega3: 0.02,
        omega6: 0.2,
        omega9: 0.3,
        gla: 0,
        arginine: 0.6,
        edestin: 0,
        mesoInositol: 0,
        tooltip: "Rice protein is hypoallergenic and good for those with food sensitivities."
    },
    quinoa: { 
        protein: 14, 
        lysine: 0.8, 
        methionine: 0.4,
        omega3: 0.2,
        omega6: 0.9,
        omega9: 0.7,
        gla: 0,
        arginine: 1.1,
        edestin: 0,
        mesoInositol: 0,
        tooltip: "Quinoa is a complete protein and provides all nine essential amino acids."
    },
    chia: { 
        protein: 17, 
        lysine: 0.9, 
        methionine: 0.6,
        omega3: 5.0,
        omega6: 1.7,
        omega9: 0.7,
        gla: 0,
        arginine: 2.1,
        edestin: 0,
        mesoInositol: 0,
        tooltip: "Chia seeds are high in protein, fiber, and omega-3 fatty acids."
    }
};

// Коэффициенты активности
export const activityLevels = {
    sedentary: 1.2,      // Малоподвижный образ жизни
    lightlyActive: 1.375, // Легкая активность
    moderatelyActive: 1.55, // Умеренная активность
    veryActive: 1.725,   // Высокая активность
    extraActive: 1.9     // Очень высокая активность
};

// Цели и их коэффициенты для калорий
export const goalMultipliers = {
    lose: 0.85,     // Снижение веса
    maintain: 1,    // Поддержание веса
    gain: 1.15      // Набор веса
};

// Соотношения макронутриентов для разных целей
export const macroRatios = {
    lose: {
        protein: 0.3,
        fat: 0.35,
        carbs: 0.35},
    maintain: {
        protein: 0.25,
        fat: 0.3,
        carbs: 0.45
    },
    gain: {
        protein: 0.25,
        fat: 0.3,
        carbs: 0.45
    }
};

// Коэффициенты калорийности макронутриентов
export const macroCalories = {
    protein: 4, // ккал/г
    fat: 9,     // ккал/г
    carbs: 4    // ккал/г
};

// Формулы для расчета BMR (базального метаболизма)
export const bmrFormulas = {
    male: {
        constant: 88.36,
        weightMultiplier: 13.4,
        heightMultiplier: 4.8,
        ageMultiplier: 5.7
    },
    female: {
        constant: 447.6,
        weightMultiplier: 9.2,
        heightMultiplier: 3.1,
        ageMultiplier: 4.3
    }
};

// Границы значений для валидации
export const validationLimits = {
    age: {
        min: 0,
        max: 120
    },
    weight: {
        min: 20,
        max: 300
    },
    height: {
        min: 100,
        max: 250
    }
};

// Категории рецептов
export const recipeCategories = [
    { 
        id: 'breakfast',
        name: 'Breakfast',
        image: './images/breakfast.jpg',
        description: 'Start your day with energy-packed hemp breakfasts. High in protein and healthy fats for sustained energy.'
    },
    { 
        id: 'smoothies',
        name: 'Smoothies & Drinks',
        image: './images/smoothies.jpg',
        description: 'Refreshing and nutritious beverages featuring hemp seeds and protein powder.'
    },
    { 
        id: 'protein',
        name: 'Protein Foods',
        image: './images/protein.jpg',
        description: 'Plant-based protein-rich meals with hemp. Perfect for vegetarians and fitness enthusiasts.'
    },
    { 
        id: 'snacks',
        name: 'Healthy Snacks',
        image: './images/snacks.jpg',
        description: 'Nutrient-dense snacks for any time of day. Quick, easy, and satisfying.'
    },
    { 
        id: 'desserts',
        name: 'Healthy Desserts',
        image: './images/desserts.jpg',
        description: 'Guilt-free treats made with hemp seeds. Natural sweetness with added benefits.'
    },
    { 
        id: 'spreads',
        name: 'Spreads & Sauces',
        image: './images/spreads.jpg',
        description: 'Versatile hemp-based spreads and sauces to enhance any dish.'
    },
    { 
        id: 'fitness',
        name: 'Fitness Food',
        image: './images/fitness.jpg',
        description: 'Pre and post workout meals optimized for performance and recovery.'
    },
    { 
        id: 'keto',
        name: 'Keto & Low-Carb',
        image: './images/keto.jpg',
        description: 'Low-carb recipes featuring hemp, perfect for ketogenic and low-carb diets.'
    }
];

// Рецепты - обновить существующие defaultRecipes
export const defaultRecipes = [
    // BREAKFAST CATEGORY
    {
        id: 'hemp-morning-porridge',
        title: 'Hemp Morning Porridge',
        category: 'breakfast',
        image: './images/hemp-morning-porridge.jpg',
        description: 'A warm, creamy porridge packed with hemp protein and healthy fats.',
        difficulty: 'easy',
        prepTime: '10 min',
        cookTime: '15 min',
        totalTime: '25 min',
        servings: 2,
        nutritionInfo: {
            calories: 250,
            protein: 15,
            fats: 12,
            carbs: 20,
            fiber: 6
        },
        ingredients: [
            '1 cup hemp seeds (soaked overnight)',
            '2 cups water or plant-based milk',
            '1 tbsp honey or maple syrup',
            '1/4 tsp sea salt',
            '1/2 tsp cinnamon'
        ],
        instructions: [
            'Soak hemp seeds overnight (8-12 hours)',
            'Drain and rinse the seeds',
            'Heat liquid to boil',
            'Add seeds and reduce heat',
            'Simmer for 12-15 minutes',
            'Add sweetener and serve'
        ],
        tips: [
            'Use plant-based milk for creamier texture',
            'Add fresh fruits for extra flavor',
            'Adjust liquid ratio for desired consistency'
        ],
        storage: 'Store in refrigerator for up to 3 days',
        variations: [
            'Add cocoa powder for chocolate version',
            'Mix in banana for natural sweetness',
            'Top with nuts and seeds for extra crunch'
        ]
    },
    // New Recipe 1
    {
        id: 'hemp-protein-pancakes',
        title: 'Hemp Protein Pancakes',
        category: 'breakfast',
        image: './images/hemp-protein-pancakes.jpg',
        description: 'Fluffy, protein-rich pancakes perfect for a nutritious breakfast.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '20 min',
        totalTime: '35 min',
        servings: 4,
        nutritionInfo: {
            calories: 280,
            protein: 18,
            fats: 12,
            carbs: 24,
            fiber: 5
        },
        ingredients: [
            '1 cup whole wheat flour',
            '1/4 cup hemp protein powder',
            '2 tbsp hemp seeds',
            '2 large eggs',
            '1 1/4 cups almond milk',
            '1 tbsp maple syrup',
            '2 tsp baking powder',
            '1/4 tsp salt',
            '1 tsp vanilla extract',
            '2 tbsp melted coconut oil'
        ],
        instructions: [
            'In a large bowl, whisk together flour, hemp protein, baking powder, and salt',
            'In a separate bowl, beat eggs, then add milk, maple syrup, and vanilla',
            'Pour wet ingredients into dry ingredients, add melted coconut oil',
            'Whisk until just combined - small lumps are okay',
            'Heat non-stick griddle or pan to 350°F (175°C)',
            'Pour 1/4 cup batter for each pancake',
            'Cook until bubbles form (2-3 minutes)',
            'Flip and cook additional 1-2 minutes until golden',
            'Keep warm in 200°F (95°C) oven while cooking remaining pancakes'
        ],
        tips: [
            'Do not overmix the batter - this ensures fluffy pancakes',
            'Let batter rest for 5 minutes before cooking',
            'Wait for bubbles to form before flipping',
            'Use a non-stick pan or griddle for best results'
        ],
        storage: 'Store in airtight container for up to 3 days. Freeze for up to 1 month.',
        variations: [
            'Add blueberries or banana slices to batter',
            'Include chocolate chips for a treat',
            'Make them savory with herbs and omit sweetener',
            'Use pumpkin puree for fall flavor'
        ]
    },
    // New Recipe 2
    {
        id: 'hemp-breakfast-bars',
        title: 'Hemp Breakfast Bars',
        category: 'breakfast',
        image: './images/hemp-breakfast-bars.jpg',
        description: 'No-bake breakfast bars loaded with hemp seeds, nuts, and natural sweetness.',
        difficulty: 'easy',
        prepTime: '20 min',
        cookTime: '0 min',
        totalTime: '2 hrs 20 min (including setting time)',
        servings: 12,
        nutritionInfo: {
            calories: 245,
            protein: 10,
            fats: 15,
            carbs: 22,
            fiber: 4
        },
        ingredients: [
            '2 cups old-fashioned oats',
            '1 cup hemp seeds',
            '1/2 cup chopped almonds',
            '1/2 cup pumpkin seeds',
            '1/3 cup honey or maple syrup',
            '1/2 cup almond butter',
            '1/4 cup coconut oil',
            '1 tsp vanilla extract',
            '1/2 tsp cinnamon',
            '1/4 tsp sea salt'
        ],
        instructions: [
            'Line a 9x9 inch pan with parchment paper',
            'Toast oats and nuts at 350°F (175°C) for 10 minutes',
            'Mix toasted ingredients with hemp seeds in a large bowl',
            'In a small saucepan, combine honey, almond butter, and coconut oil',
            'Heat mixture over low heat until fully combined',
            'Add vanilla, cinnamon, and salt to liquid mixture',
            'Pour warm mixture over dry ingredients and mix thoroughly',
            'Press firmly into prepared pan',
            'Refrigerate for at least 2 hours until set',
            'Cut into 12 bars'
        ],
        tips: [
            'Toast oats and nuts for enhanced flavor',
            'Press mixture very firmly for bars that hold together',
            'Use wet hands to prevent sticking when pressing mixture',
            'Keep refrigerated for best texture'
        ],
        storage: 'Store in airtight container in refrigerator for up to 1 week or freeze for up to 3 months',
        variations: [
            'Add dried cranberries or raisins',
            'Use different nut butters',
            'Drizzle with dark chocolate',
            'Add protein powder for extra protein boost'
        ]
    },

    {
        id: 'green-hemp-smoothie',
        title: 'Green Hemp Smoothie',
        category: 'smoothies',
        image: './images/green-hemp-smoothie.jpg',
        description: 'Energy-packed green smoothie with hemp seeds and protein.',
        difficulty: 'easy',
        prepTime: '5 min',
        cookTime: '0 min',
        totalTime: '5 min',
        servings: 1,
        nutritionInfo: {
            calories: 180,
            protein: 12,
            fats: 8,
            carbs: 22,
            fiber: 5
        },
        ingredients: [
            '2 tbsp hemp seeds',
            '1 banana',
            '1 cup spinach',
            '1 cup almond milk',
            '1 tbsp hemp protein powder',
            'Ice cubes'
        ],
        instructions: [
            'Add all ingredients to blender',
            'Blend until smooth (about 60 seconds)',
            'Add more milk if too thick',
            'Pour and serve immediately'
        ],
        tips: [
            'Use frozen banana for thicker texture',
            'Add ice for colder drink',
            'Adjust liquid for desired consistency'
        ],
        storage: 'Best consumed immediately. Can be stored for up to 12 hours in refrigerator.',
        variations: [
            'Add berries for antioxidants',
            'Include mango for tropical flavor',
            'Mix in cocoa powder for chocolate version'
        ]
    },
    // New Recipe 1
    {
        id: 'golden-hemp-latte',
        title: 'Golden Hemp Latte',
        category: 'smoothies',
        image: './images/golden-hemp-latte.jpg',
        description: 'A warming, anti-inflammatory drink combining turmeric, hemp, and aromatic spices.',
        difficulty: 'easy',
        prepTime: '5 min',
        cookTime: '5 min',
        totalTime: '10 min',
        servings: 2,
        nutritionInfo: {
            calories: 120,
            protein: 5,
            fats: 7,
            carbs: 10,
            fiber: 2
        },
        ingredients: [
            '2 cups plant-based milk',
            '2 tbsp hemp seeds',
            '1 tsp ground turmeric',
            '1/2 tsp ground ginger',
            '1/4 tsp ground cinnamon',
            '1/8 tsp ground black pepper',
            '1 tbsp honey or maple syrup',
            '1 tsp coconut oil',
            'Optional: 1 shot espresso'
        ],
        instructions: [
            'Blend hemp seeds with 1/2 cup of milk until smooth',
            'Heat remaining milk in a small saucepan over medium heat (do not boil)',
            'Add turmeric, ginger, cinnamon, and black pepper',
            'Whisk in blended hemp milk',
            'Add honey and coconut oil',
            'Heat until steaming (165°F/74°C)',
            'Whisk or blend with frother until foamy',
            'Pour into mugs and sprinkle with extra cinnamon'
        ],
        tips: [
            'Add black pepper to enhance turmeric absorption',
            'Use a milk frother for extra foam',
            'Strain through fine mesh if smoother texture desired',
            'Can be made as iced version'
        ],
        storage: 'Best served immediately. Can store base mixture without milk for 3 days.',
        variations: [
            'Add espresso shot for dirty golden latte',
            'Use matcha instead of turmeric for green version',
            'Add cardamom for chai-like flavor',
            'Make iced by cooling and serving over ice'
        ]
    },
    // New Recipe 2
    {
        id: 'berry-hemp-protein-shake',
        title: 'Berry Hemp Protein Shake',
        category: 'smoothies',
        image: './images/berry-hemp-protein-shake.jpg',
        description: 'A protein-rich post-workout shake featuring mixed berries and hemp.',
        difficulty: 'easy',
        prepTime: '5 min',
        cookTime: '0 min',
        totalTime: '5 min',
        servings: 2,
        nutritionInfo: {
            calories: 220,
            protein: 20,
            fats: 9,
            carbs: 25,
            fiber: 8
        },
        ingredients: [
            '2 cups mixed frozen berries',
            '2 scoops (60g) hemp protein powder',
            '2 tbsp hemp seeds',
            '1 1/2 cups coconut water',
            '1/2 cup Greek yogurt',
            '1 tbsp honey (optional)',
            '1/2 cup ice cubes',
            '1 tsp vanilla extract'
        ],
        instructions: [
            'Add coconut water and yogurt to blender first',
            'Add protein powder, hemp seeds, and frozen berries',
            'Add vanilla extract and honey if using',
            'Blend on high for 60-90 seconds until smooth',
            'Add ice and blend for additional 30 seconds',
            'Check consistency and add more liquid if needed',
            'Pour into glasses and serve immediately'
        ],
        tips: [
            'Layer ingredients as listed for best blending',
            'Use frozen berries instead of fresh for thicker shake',
            'Pre-portion berries in freezer bags for convenience',
            'Add greens for extra nutrition without changing taste'
        ],
        storage: 'Best consumed immediately. Can be stored in refrigerator for up to 4 hours.',
        variations: [
            'Use different frozen fruit combinations',
            'Add spinach or kale for green boost',
            'Include chia seeds for extra omega-3s',
            'Make with plant-based yogurt for vegan version'
        ]
    },

    {
        id: 'hemp-veggie-burgers',
        title: 'Hemp Veggie Burgers',
        category: 'protein',
        image: './images/hemp-veggie-burgers.jpg',
        description: 'Protein-packed veggie burgers made with hemp seeds and fresh vegetables.',
        difficulty: 'medium',
        prepTime: '20 min',
        cookTime: '15 min',
        totalTime: '35 min',
        servings: 4,
        nutritionInfo: {
            calories: 260,
            protein: 18,
            fats: 14,
            carbs: 22,
            fiber: 6
        },
        ingredients: [
            '1 cup black beans, mashed',
            '1/2 cup hemp seeds',
            '1/2 cup grated carrot',
            '1/4 cup minced onion',
            '2 cloves garlic, minced',
            '1 tbsp ground flax + 3 tbsp water',
            '1 tsp cumin',
            '1/2 tsp smoked paprika',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Mix ground flax with water, let sit for 5 minutes',
            'Mash beans in a large bowl',
            'Add all other ingredients and mix well',
            'Form into 4 patties',
            'Chill for 30 minutes if possible',
            'Heat pan with oil over medium heat',
            'Cook 5-7 minutes each side',
            'Rest for 5 minutes before serving'
        ],
        tips: [
            'Dont overmix to keep texture',
            'Make thinner patties for crispier result',
            'Can be baked at 375°F for 20-25 minutes'
        ],
        storage: 'Keep in fridge for 3 days or freeze for up to 2 months.',
        variations: [
            'Add chopped mushrooms for umami flavor',
            'Mix in different spices for variety',
            'Use different beans as base'
        ]
    },
    // New Recipe 1
    {
        id: 'hemp-tofu-scramble',
        title: 'Hemp Tofu Scramble',
        category: 'protein',
        image: './images/hemp-tofu-scramble.jpg',
        description: 'A protein-rich breakfast scramble combining tofu and hemp seeds with fresh vegetables.',
        difficulty: 'easy',
        prepTime: '10 min',
        cookTime: '15 min',
        totalTime: '25 min',
        servings: 3,
        nutritionInfo: {
            calories: 240,
            protein: 22,
            fats: 16,
            carbs: 12,
            fiber: 5
        },
        ingredients: [
            '1 block (14 oz) firm tofu, drained and crumbled',
            '1/4 cup hemp seeds',
            '1 cup baby spinach',
            '1/2 red bell pepper, diced',
            '1/4 cup red onion, finely diced',
            '2 cloves garlic, minced',
            '2 tbsp nutritional yeast',
            '1 tsp ground turmeric',
            '1/2 tsp ground cumin',
            '1/4 tsp black salt (kala namak) or regular salt',
            '2 tbsp olive oil',
            'Black pepper to taste'
        ],
        instructions: [
            'Press tofu for 10 minutes to remove excess water',
            'Heat olive oil in a large skillet over medium heat (350°F/175°C)',
            'Add onion and bell pepper, sauté for 3-4 minutes',
            'Add garlic, cook for 1 minute until fragrant',
            'Crumble tofu into the pan',
            'Add turmeric, cumin, nutritional yeast, and salt',
            'Cook for 5-7 minutes, stirring occasionally',
            'Add hemp seeds and spinach, cook until spinach wilts',
            'Taste and adjust seasonings as needed',
            'Serve hot, garnished with extra hemp seeds'
        ],
        tips: [
            'Use black salt (kala namak) for eggy flavor',
            'Dont overwork the tofu - keep some texture',
            'Press tofu well for better texture',
            'Add black pepper with turmeric for better absorption'
        ],
        storage: 'Store in airtight container in refrigerator for up to 3 days. Reheat in pan or microwave.',
        variations: [
            'Add mushrooms for extra umami',
            'Include diced tomatoes for more moisture',
            'Spice it up with chili flakes or hot sauce',
            'Wrap in tortilla for breakfast burrito'
        ]
    },
    // New Recipe 2
    {
        id: 'hemp-quinoa-power-bowl',
        title: 'Hemp Quinoa Power Bowl',
        category: 'protein',
        image: './images/hemp-quinoa-power-bowl.jpg',
        description: 'A nutrient-dense bowl combining quinoa, hemp seeds, and roasted vegetables.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '30 min',
        totalTime: '45 min',
        servings: 4,
        nutritionInfo: {
            calories: 380,
            protein: 15,
            fats: 18,
            carbs: 45,
            fiber: 8
        },
        ingredients: [
            '1 cup quinoa, rinsed',
            '1/2 cup hemp seeds',
            '2 cups mixed vegetables (sweet potato, broccoli, chickpeas)',
            '2 cups kale, chopped',
            '1 avocado, sliced',
            '1/4 cup hemp seed oil vinaigrette',
            '2 tbsp lemon juice',
            '2 cloves garlic, minced',
            '1 tbsp maple syrup',
            '1 tsp ground cumin',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C)',
            'Cook quinoa according to package instructions',
            'Toss vegetables with oil, cumin, salt, and pepper',
            'Roast vegetables for 25-30 minutes, stirring halfway',
            'Make dressing: whisk hemp oil, lemon juice, garlic, maple syrup',
            'Massage kale with 1 tbsp of dressing',
            'Assemble bowls: quinoa base, roasted veggies, kale',
            'Top with hemp seeds and avocado',
            'Drizzle with remaining dressing',
            'Serve warm or at room temperature'
        ],
        tips: [
            'Prep vegetables in similar sizes for even roasting',
            'Toast hemp seeds lightly for enhanced flavor',
            'Make extra dressing for other salads',
            'Cook quinoa in vegetable broth for more flavor'
        ],
        storage: 'Store components separately in refrigerator for up to 4 days. Assemble before serving.',
        variations: [
            'Use different grain bases (brown rice, farro)',
            'Vary seasonal vegetables',
            'Add tofu or tempeh for extra protein',
            'Make it spicy with sriracha or chili flakes'
        ]
    },

    {
        id: 'hemp-energy-balls',
        title: 'Hemp Energy Balls',
        category: 'snacks',
        image: './images/hemp-energy-balls.jpg',
        description: 'No-bake energy balls perfect for pre-workout or healthy snacking.',
        difficulty: 'easy',
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '15 min + 1 hr chilling',
        servings: 12,
        nutritionInfo: {
            calories: 120,
            protein: 6,
            fats: 7,
            carbs: 12,
            fiber: 3
        },
        ingredients: [
            '1 cup dates, pitted',
            '1/2 cup hemp seeds',
            '1/2 cup hemp protein powder',
            '1/4 cup almond butter',
            '2 tbsp cocoa powder',
            '1 tbsp maple syrup',
            'Pinch of sea salt',
            'Optional: extra hemp seeds for rolling'
        ],
        instructions: [
            'Process dates until they form a paste',
            'Add remaining ingredients',
            'Process until well combined',
            'Roll into 12 balls',
            'Optional: roll in extra hemp seeds',
            'Refrigerate for 1 hour before serving'
        ],
        tips: [
            'If mixture is too dry, add a splash of water',
            'Use wet hands to prevent sticking',
            'Store in freezer for firmer texture'
        ],
        storage: 'Store in fridge for up to 1 week or freezer for 2 months.',
        variations: [
            'Add vanilla extract for different flavor',
            'Mix in dried cranberries',
            'Use different nut butters'
        ]
    },
    // New Recipe 1
    {
        id: 'hemp-seed-crackers',
        title: 'Hemp Seed Crackers',
        category: 'snacks',
        image: './images/hemp-seed-crackers.jpg',
        description: 'Crispy, savory crackers packed with hemp seeds and herbs.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '25 min',
        totalTime: '40 min',
        servings: 24,
        nutritionInfo: {
            calories: 45,
            protein: 3,
            fats: 4,
            carbs: 2,
            fiber: 1
        },
        ingredients: [
            '1 cup hemp seeds',
            '1/2 cup ground flaxseed',
            '1/4 cup chia seeds',
            '1/4 cup sesame seeds',
            '1 cup water',
            '1 tsp garlic powder',
            '1 tsp dried rosemary',
            '1 tsp dried thyme',
            '1/2 tsp sea salt',
            '1/4 tsp black pepper'
        ],
        instructions: [
            'Preheat oven to 325°F (165°C)',
            'Mix all seeds in a large bowl',
            'Add water and let sit for 10 minutes to gel',
            'Add seasonings and mix well',
            'Line baking sheet with parchment paper',
            'Spread mixture evenly (1/8 inch thick)',
            'Score into crackers with knife',
            'Bake for 20-25 minutes until edges golden',
            'Turn off oven, leave crackers inside for 10 minutes',
            'Cool completely before breaking apart'
        ],
        tips: [
            'Use wet hands or spatula to spread mixture',
            'Score deeply but not through parchment',
            'Watch edges carefully to prevent burning',
            'Must cool completely for maximum crispiness'
        ],
        storage: 'Store in airtight container at room temperature for up to 2 weeks.',
        variations: [
            'Try different herb combinations',
            'Add nutritional yeast for cheesy flavor',
            'Spice it up with red pepper flakes',
            'Make them salt & vinegar flavored'
        ]
    },
    // New Recipe 2
    {
        id: 'roasted-hemp-trail-mix',
        title: 'Roasted Hemp Trail Mix',
        category: 'snacks',
        image: './images/roasted-hemp-trail-mix.jpg',
        description: 'A nutrient-dense trail mix combining roasted nuts, hemp seeds, and dried fruit.',
        difficulty: 'easy',
        prepTime: '10 min',
        cookTime: '15 min',
        totalTime: '25 min',
        servings: 10,
        nutritionInfo: {
            calories: 180,
            protein: 8,
            fats: 12,
            carbs: 14,
            fiber: 4
        },
        ingredients: [
            '1 cup hemp seeds',
            '1 cup raw almonds',
            '1/2 cup pumpkin seeds',
            '1/2 cup walnuts',
            '1/2 cup dried cranberries',
            '1/4 cup dried blueberries',
            '2 tbsp maple syrup',
            '1 tbsp coconut oil',
            '1 tsp cinnamon',
            '1/2 tsp sea salt'
        ],
        instructions: [
            'Preheat oven to 300°F (150°C)',
            'Line baking sheet with parchment paper',
            'Mix nuts and seeds in large bowl',
            'Melt coconut oil and combine with maple syrup',
            'Pour over nuts/seeds, add cinnamon and salt',
            'Spread on baking sheet in single layer',
            'Roast for 12-15 minutes, stirring halfway',
            'Let cool completely (15-20 minutes)',
            'Mix in dried fruit',
            'Store in airtight container'
        ],
        tips: [
            'Watch carefully as nuts can burn quickly',
            'Add dried fruit only after cooling',
            'Toast in small batches for best results',
            'Rotate pan halfway through for even roasting'
        ],
        storage: 'Store in airtight container at room temperature for up to 1 month.',
        variations: [
            'Add dark chocolate chips after cooling',
            'Use different dried fruits',
            'Try different spice combinations',
            'Make it savory with herbs instead of cinnamon'
        ]
    },

    {
        id: 'hemp-chocolate-brownies',
        title: 'Hemp Chocolate Brownies',
        category: 'desserts',
        image: './images/hemp-chocolate-brownies.jpg',
        description: 'Rich, fudgy brownies made healthier with hemp seeds and natural sweeteners.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '25 min',
        totalTime: '40 min',
        servings: 16,
        nutritionInfo: {
            calories: 180,
            protein: 6,
            fats: 12,
            carbs: 16,
            fiber: 4
        },
        ingredients: [
            '1 cup almond flour',
            '1/2 cup hemp protein powder',
            '1/2 cup cocoa powder',
            '1/4 cup hemp seeds',
            '1/2 cup maple syrup',
            '2 large eggs',
            '1/2 cup coconut oil, melted',
            '1/4 cup almond milk',
            '1 tsp vanilla extract',
            '1/2 tsp baking soda',
            '1/4 tsp salt',
            '1/3 cup dark chocolate chips'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C)',
            'Line 8x8 inch pan with parchment paper',
            'Mix dry ingredients in large bowl',
            'Whisk wet ingredients in separate bowl',
            'Combine wet and dry ingredients',
            'Fold in chocolate chips',
            'Pour into prepared pan',
            'Sprinkle extra hemp seeds on top',
            'Bake for 22-25 minutes until set',
            'Cool completely before cutting'
        ],
        tips: [
            'Don`t overbake - center should be slightly fudgy',
            'Use room temperature eggs',
            'Let cool completely for clean cuts',
            'Check with toothpick - should have few crumbs'
        ],
        storage: 'Store in airtight container at room temperature for 3 days or refrigerate for 1 week.',
        variations: [
            'Add nuts for extra crunch',
            'Swirl in nut butter before baking',
            'Make mint chocolate by adding peppermint extract',
            'Top with coconut flakes'
        ]
    },
    {
        id: 'hemp-halva',
        title: 'Hemp Seed Halva',
        category: 'desserts',
        image: './images/hemp-halva.jpg',
        description: 'A healthy twist on traditional halva using hemp seeds and honey.',
        difficulty: 'medium',
        prepTime: '20 min',
        cookTime: '5 min',
        totalTime: '3 hrs 25 min (including setting time)',
        servings: 12,
        nutritionInfo: {
            calories: 200,
            protein: 8,
            fats: 14,
            carbs: 18,
            fiber: 3
        },
        ingredients: [
            '2 cups hemp seeds',
            '1 cup tahini',
            '3/4 cup honey',
            '1 tsp vanilla extract',
            '1/4 tsp sea salt',
            'Optional: 1/4 cup pistachios, chopped'
        ],
        instructions: [
            'Line a 9x5 inch loaf pan with parchment paper',
            'Toast hemp seeds at 325°F (165°C) for 5-7 minutes',
            'Heat honey in saucepan until it reaches 240°F (116°C)',
            'Whisk tahini until smooth and slightly warm',
            'Slowly pour hot honey into tahini while whisking',
            'Fold in hemp seeds and vanilla',
            'Pour into prepared pan',
            'Top with pistachios if using',
            'Refrigerate for at least 3 hours',
            'Cut into slices with sharp knife'
        ],
        tips: [
            'Use candy thermometer for honey temperature',
            'Warm tahini slightly for better mixing',
            'Refrigerate until completely set',
            'Cut while cold for clean slices'
        ],
        storage: 'Store in airtight container in refrigerator for up to 2 weeks.',
        variations: [
            'Add cocoa powder for chocolate version',
            'Mix in different nuts',
            'Swirl in nut butter',
            'Add cinnamon or cardamom'
        ]
    },
    {
        id: 'hemp-cookie-dough-bites',
        title: 'Hemp Cookie Dough Bites',
        category: 'desserts',
        image: './images/hemp-cookie-dough-bites.jpg',
        description: 'Edible cookie dough bites made healthy with hemp seeds and natural sweeteners.',
        difficulty: 'easy',
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '45 min (including chilling)',
        servings: 18,
        nutritionInfo: {
            calories: 110,
            protein: 4,
            fats: 7,
            carbs: 10,
            fiber: 2
        },
        ingredients: [
            '1 cup almond flour',
            '1/2 cup hemp seeds',
            '1/4 cup hemp protein powder',
            '1/3 cup maple syrup',
            '1/4 cup almond butter',
            '2 tbsp coconut oil, melted',
            '1 tsp vanilla extract',
            '1/4 tsp salt',
            '1/3 cup mini chocolate chips',
            'Optional: almond milk if needed'
        ],
        instructions: [
            'Mix almond flour, hemp seeds, and protein powder',
            'In separate bowl, combine maple syrup, almond butter, and coconut oil',
            'Add vanilla and salt to wet ingredients',
            'Combine wet and dry ingredients',
            'If too dry, add almond milk 1 tsp at a time',
            'Fold in chocolate chips',
            'Roll into 18 balls',
            'Refrigerate for 30 minutes',
            'Optional: roll in hemp seeds or cocoa'
        ],
        tips: [
            'Use wet hands to roll balls',
            'Mixture should be slightly sticky',
            'Keep refrigerated for best texture',
            'Can be frozen for longer storage'
        ],
        storage: 'Store in airtight container in refrigerator for 1 week or freeze for up to 3 months.',
        variations: [
            'Add cinnamon for snickerdoodle flavor',
            'Use different chocolate chips',
            'Roll in coconut flakes',
            'Add peanut butter for PB cookie dough'
        ]
    },

    {
        id: 'hemp-pesto',
        title: 'Hemp Seed Pesto',
        category: 'spreads',
        image: './images/hemp-pesto.jpg',
        description: 'A nutrient-rich twist on classic pesto using hemp seeds instead of pine nuts.',
        difficulty: 'easy',
        prepTime: '10 min',
        cookTime: '0 min',
        totalTime: '10 min',
        servings: 8,
        nutritionInfo: {
            calories: 120,
            protein: 4,
            fats: 11,
            carbs: 3,
            fiber: 1
        },
        ingredients: [
            '2 cups fresh basil leaves, packed',
            '1/2 cup hemp seeds',
            '2 cloves garlic',
            '1/2 cup extra virgin olive oil',
            '1/4 cup nutritional yeast',
            '1 tbsp lemon juice',
            '1/2 tsp sea salt',
            '1/4 tsp black pepper',
            'Optional: 2-3 tbsp water for desired consistency'
        ],
        instructions: [
            'Lightly toast hemp seeds in dry pan over medium heat (2-3 minutes)',
            'Let hemp seeds cool completely',
            'Add basil and garlic to food processor, pulse to chop',
            'Add hemp seeds and nutritional yeast, pulse to combine',
            'With processor running, slowly drizzle in olive oil',
            'Add lemon juice, salt, and pepper',
            'Process until desired consistency',
            'Taste and adjust seasonings',
            'Add water if needed for thinner consistency'
        ],
        tips: [
            'Use fresh, dry basil leaves',
            'Toast hemp seeds for enhanced flavor',
            'Add oil slowly to emulsify properly',
            'Adjust thickness with water or oil'
        ],
        storage: 'Store in airtight container in refrigerator for up to 1 week. Can be frozen in ice cube trays for up to 3 months.',
        variations: [
            'Use different herbs (cilantro, parsley, mint)',
            'Add sun-dried tomatoes for red pesto',
            'Make it spicy with red pepper flakes',
            'Use different oils (avocado, hemp seed oil)'
        ]
    },
    {
        id: 'hemp-hummus',
        title: 'Creamy Hemp Hummus',
        category: 'spreads',
        image: './images/hemp-hummus.jpg',
        description: 'A protein-boosted hummus featuring hemp seeds and traditional Mediterranean flavors.',
        difficulty: 'easy',
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '15 min',
        servings: 10,
        nutritionInfo: {
            calories: 150,
            protein: 7,
            fats: 10,
            carbs: 12,
            fiber: 4
        },
        ingredients: [
            '1 15-oz can chickpeas, drained and rinsed',
            '1/2 cup hemp seeds',
            '1/4 cup tahini',
            '1/4 cup lemon juice',
            '3 cloves garlic, minced',
            '1/4 cup olive oil',
            '1/2 tsp ground cumin',
            '1/2 tsp sea salt',
            '1/4 cup ice-cold water',
            'Optional toppings: hemp seeds, olive oil, paprika'
        ],
        instructions: [
            'Remove chickpea skins for extra smooth hummus (optional)',
            'Add chickpeas to food processor, process until powdery',
            'Add hemp seeds, process until well combined',
            'Add tahini, lemon juice, and garlic',
            'Process while slowly drizzling in olive oil',
            'Add cumin and salt',
            'With machine running, drizzle in ice water',
            'Process for 3-5 minutes until very smooth',
            'Taste and adjust seasonings',
            'Garnish with toppings before serving'
        ],
        tips: [
            'Use ice-cold water for fluffier texture',
            'Remove chickpea skins for smoothest result',
            'Process longer for creamier hummus',
            'Let flavors meld for 30 minutes before serving'
        ],
        storage: 'Store in airtight container in refrigerator for up to 5 days.',
        variations: [
            'Add roasted red peppers',
            'Mix in herbs like basil or cilantro',
            'Make it spicy with harissa or sriracha',
            'Add roasted garlic for deeper flavor'
        ]
    },

    {
        id: 'pre-workout-hemp-bars',
        title: 'Pre-Workout Hemp Energy Bars',
        category: 'fitness',
        image: './images/pre-workout-hemp-bars.jpg',
        description: 'Energy-packed bars perfect for fueling your workout, rich in complex carbs and protein.',
        difficulty: 'medium',
        prepTime: '20 min',
        cookTime: '25 min',
        totalTime: '45 min',
        servings: 12,
        nutritionInfo: {
            calories: 240,
            protein: 12,
            fats: 14,
            carbs: 28,
            fiber: 5
        },
        ingredients: [
            '1 cup rolled oats',
            '1/2 cup hemp protein powder',
            '1/2 cup hemp seeds',
            '1/4 cup chia seeds',
            '1/4 cup pumpkin seeds',
            '1/3 cup honey or maple syrup',
            '1/2 cup almond butter',
            '1/4 cup coconut oil',
            '1 tsp vanilla extract',
            '1/2 tsp cinnamon',
            '1/4 tsp salt',
            '1/3 cup dried cranberries'
        ],
        instructions: [
            'Preheat oven to 325°F (165°C)',
            'Line 9x9 inch pan with parchment paper',
            'Toast oats and seeds at 325°F for 8-10 minutes',
            'Mix all dry ingredients in large bowl',
            'Heat honey, almond butter, and coconut oil until melted (120°F/49°C)',
            'Add vanilla to wet ingredients',
            'Combine wet and dry ingredients',
            'Press firmly into prepared pan',
            'Bake for 20-25 minutes until edges golden',
            'Cool completely before cutting'
        ],
        tips: [
            'Press mixture very firmly for bars that hold together',
            'Let cool completely before cutting',
            'Store in fridge for firmer texture',
            'Eat 30-60 minutes before workout'
        ],
        storage: 'Store in airtight container in fridge for up to 1 week or freeze for up to 3 months.',
        variations: [
            'Add dark chocolate chips after cooling',
            'Use different dried fruits',
            'Add espresso powder for caffeine boost',
            'Make them nut-free with sunflower seed butter'
        ]
    },
    {
        id: 'post-workout-recovery-shake',
        title: 'Post-Workout Recovery Shake',
        category: 'fitness',
        image: './images/post-workout-recovery-shake.jpg',
        description: 'A nutrient-rich shake designed for optimal post-workout recovery.',
        difficulty: 'easy',
        prepTime: '5 min',
        cookTime: '0 min',
        totalTime: '5 min',
        servings: 2,
        nutritionInfo: {
            calories: 320,
            protein: 25,
            fats: 12,
            carbs: 35,
            fiber: 8
        },
        ingredients: [
            '2 scoops (60g) hemp protein powder',
            '1 frozen banana',
            '1 cup frozen cherries',
            '2 cups coconut water',
            '1 tbsp hemp seeds',
            '1 tbsp chia seeds',
            '1 inch fresh ginger',
            '1 tsp maca powder',
            '1/2 cup Greek yogurt',
            'Handful of spinach',
            'Ice cubes as needed'
        ],
        instructions: [
            'Add liquids to blender first',
            'Add protein powder and seeds',
            'Add frozen fruits and vegetables',
            'Add remaining ingredients',
            'Blend on high for 60-90 seconds',
            'Add ice if thicker consistency desired',
            'Blend additional 30 seconds if needed',
            'Serve immediately while cold'
        ],
        tips: [
            'Drink within 30 minutes post-workout',
            'Use frozen banana for creamier texture',
            'Add more liquid for desired consistency',
            'Pre-portion ingredients for quick preparation'
        ],
        storage: 'Best consumed immediately. Can be stored in fridge for up to 4 hours.',
        variations: [
            'Add beet powder for nitric oxide boost',
            'Use different frozen fruits',
            'Add collagen powder for joint support',
            'Make it vegan with plant-based yogurt'
        ]
    },
    {
        id: 'muscle-building-hemp-bowl',
        title: 'Muscle Building Hemp Power Bowl',
        category: 'fitness',
        image: './images/muscle-building-hemp-bowl.jpg',
        description: 'High-protein bowl perfect for muscle recovery and growth.',
        difficulty: 'medium',
        prepTime: '20 min',
        cookTime: '30 min',
        totalTime: '50 min',
        servings: 4,
        nutritionInfo: {
            calories: 450,
            protein: 32,
            fats: 18,
            carbs: 42,
            fiber: 12
        },
        ingredients: [
            '1 cup quinoa',
            '2 cups mixed vegetables (broccoli, sweet potato, Brussels sprouts)',
            '1 can black beans, drained',
            '1/2 cup hemp seeds',
            '4 tbsp hemp protein powder',
            '1 block extra-firm tofu',
            '2 tbsp tamari sauce',
            '1 tbsp olive oil',
            'For sauce:',
            '1/4 cup tahini',
            '2 tbsp lemon juice',
            '1 tbsp maple syrup',
            'Water to thin'
        ],
        instructions: [
            'Preheat oven to 400°F (200°C)',
            'Cook quinoa according to package instructions',
            'Press tofu for 15 minutes, cube and marinate in tamari',
            'Roast vegetables tossed in oil at 400°F for 25-30 minutes',
            'Bake marinated tofu at same temperature for 20-25 minutes',
            'Make sauce: whisk tahini, lemon, maple syrup; thin with water',
            'Heat black beans with hemp protein powder',
            'Assemble bowls: quinoa base, vegetables, tofu, beans',
            'Top with hemp seeds and sauce',
            'Serve hot'
        ],
        tips: [
            'Prep components in advance',
            'Press tofu thoroughly for better texture',
            'Season vegetables well before roasting',
            'Make extra for meal prep'
        ],
        storage: 'Store components separately in airtight containers for up to 4 days.',
        variations: [
            'Use different grains (brown rice, farro)',
            'Swap tofu for tempeh or seitan',
            'Change up vegetables seasonally',
            'Try different sauces'
        ]
    },

    {
        id: 'keto-hemp-bread',
        title: 'Keto Hemp Bread',
        category: 'keto',
        image: './images/keto-hemp-bread.jpg',
        description: 'Low-carb, grain-free bread made with hemp and almond flour. Perfect for sandwiches and toast.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '45 min',
        totalTime: '1 hour',
        servings: 12,
        nutritionInfo: {
            calories: 180,
            protein: 8,
            fats: 15,
            carbs: 4,
            fiber: 3,
            netCarbs: 1
        },
        ingredients: [
            '2 cups almond flour',
            '1/2 cup hemp seeds',
            '1/4 cup hemp protein powder',
            '1/4 cup psyllium husk powder',
            '2 tsp baking powder',
            '1 tsp sea salt',
            '4 large eggs',
            '1/4 cup olive oil',
            '1 cup warm water',
            '2 tbsp apple cider vinegar',
            'Optional: additional hemp seeds for topping'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C)',
            'Line 9x5 inch loaf pan with parchment paper',
            'Mix all dry ingredients in large bowl',
            'In separate bowl, whisk eggs, oil, and vinegar',
            'Add warm water to wet ingredients',
            'Combine wet and dry ingredients until well mixed',
            'Let batter sit for 5 minutes to thicken',
            'Pour into prepared pan',
            'Sprinkle extra hemp seeds on top if desired',
            'Bake for 45-50 minutes until golden',
            'Test with toothpick for doneness',
            'Cool completely before slicing (at least 2 hours)'
        ],
        tips: [
            'Let cool completely for best texture',
            'Use fresh psyllium husk powder',
            'Dont skip the vinegar - it helps with rise',
            'Store in refrigerator to maintain freshness'
        ],
        storage: 'Store in airtight container in refrigerator for up to 5 days or freeze slices for up to 3 months.',
        variations: [
            'Add herbs for savory version',
            'Include garlic powder for flavor',
            'Mix in seeds for more texture',
            'Make into rolls instead of loaf'
        ]
    },
    {
        id: 'keto-hemp-fat-bombs',
        title: 'Keto Hemp Fat Bombs',
        category: 'keto',
        image: './images/keto-hemp-fat-bomb.jpg',
        description: 'High-fat, low-carb energy bites perfect for keto diet maintenance.',
        difficulty: 'easy',
        prepTime: '15 min',
        cookTime: '0 min',
        totalTime: '2 hours (including freezing)',
        servings: 24,
        nutritionInfo: {
            calories: 120,
            protein: 3,
            fats: 12,
            carbs: 2,
            fiber: 1,
            netCarbs: 1
        },
        ingredients: [
            '1 cup coconut oil, softened',
            '1/2 cup hemp seeds',
            '1/2 cup almond butter',
            '1/4 cup cocoa powder',
            '1/4 cup hemp protein powder',
            '3 tbsp powdered erythritol',
            '1 tsp vanilla extract',
            '1/4 tsp sea salt',
            'Optional: 1/4 cup sugar-free chocolate chips'
        ],
        instructions: [
            'Line mini muffin tin with paper liners',
            'Beat coconut oil until creamy',
            'Add almond butter and beat until combined',
            'Mix in hemp seeds, cocoa, protein powder',
            'Add erythritol, vanilla, and salt',
            'Mix until well combined',
            'Divide mixture into 24 portions',
            'Top with chocolate chips if using',
            'Freeze for at least 2 hours',
            'Store in freezer'
        ],
        tips: [
            'Keep ingredients at room temperature for mixing',
            'Use silicon molds for easy removal',
            'Adjust sweetener to taste',
            'Let sit for 1-2 minutes before eating'
        ],
        storage: 'Store in airtight container in freezer for up to 2 months. Thaw 1-2 minutes before eating.',
        variations: [
            'Add peppermint extract for mint chocolate',
            'Use different nut butters',
            'Mix in berries for fruit version',
            'Add MCT oil for extra ketones'
        ]
    },
    {
        id: 'keto-hemp-crackers',
        title: 'Low-Carb Hemp Seed Crackers',
        category: 'keto',
        image: './images/low-carb_hemp_seeds.jpg',
        description: 'Crispy, savory crackers perfect for keto-friendly snacking.',
        difficulty: 'medium',
        prepTime: '15 min',
        cookTime: '25 min',
        totalTime: '40 min',
        servings: 30,
        nutritionInfo: {
            calories: 45,
            protein: 2,
            fats: 4,
            carbs: 1,
            fiber: 1,
            netCarbs: 0
        },
        ingredients: [
            '1 cup hemp seeds',
            '1/2 cup almond flour',
            '1/4 cup ground flaxseed',
            '2 tbsp chia seeds',
            '1 large egg',
            '2 tbsp olive oil',
            '1/2 tsp garlic powder',
            '1/2 tsp onion powder',
            '1/2 tsp sea salt',
            '1/4 tsp black pepper',
            'Optional: 1 tbsp everything bagel seasoning'
        ],
        instructions: [
            'Preheat oven to 325°F (165°C)',
            'Mix all dry ingredients in bowl',
            'Whisk egg and oil in separate bowl',
            'Combine wet and dry ingredients',
            'Place dough between two pieces parchment paper',
            'Roll very thin (1/8 inch)',
            'Remove top parchment',
            'Score into crackers',
            'Sprinkle with extra seasoning if using',
            'Bake for 20-25 minutes until edges golden',
            'Let cool completely for maximum crispness'
        ],
        tips: [
            'Roll as thin as possible for crispy crackers',
            'Watch edges carefully to prevent burning',
            'Break apart after completely cool',
            'Store with paper towel to maintain crispness'
        ],
        storage: 'Store in airtight container at room temperature for up to 1 week.',
        variations: [
            'Add different herbs and spices',
            'Make cheese flavored with nutritional yeast',
            'Add crushed nuts for extra crunch',
            'Sprinkle with seeds before baking'
        ]
    },
];