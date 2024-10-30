// Импорты
import { proteinSources, activityLevels, macroRatios, goalMultipliers, recommendedDailyValues, validationLimits } from './constants.js';
import { getBMICategory, validateNumberInput, animateText, createTooltips } from './utils.js';
import { defaultRecipes } from './constants.js';
import { showRecipe } from './recipes.js';

// Основная функция инициализации
export function initCalculator() {
    const calculatorForm = document.getElementById('calorie-form');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', handleCalculatorSubmit);
        initCalculatorInputs();
        initFormValidation(); // Добавляем инициализацию валидации
    }
    initCalculatorRecipes(); // Добавить эту строку
}

// Добавьте новую функцию для валидации формы
function initFormValidation() {
    const form = document.getElementById('calorie-form');
    const submitButton = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll('input, select');
    const genderButtons = form.querySelectorAll('.gender-button');
    
    // Функция проверки всех полей
    function checkFormValidity() {
        let isValid = true;
        
        // Проверяем все инпуты и селекты
        inputs.forEach(input => {
            if (!input.value) {
                isValid = false;
            }
        });
        
        // Проверяем выбор пола
        const hasGender = Array.from(genderButtons).some(btn => 
            btn.classList.contains('active')
        );
        if (!hasGender) {
            isValid = false;
        }
        
        // Добавляем или удаляем класс ready
        if (isValid) {
            submitButton.classList.add('ready');
        } else {
            submitButton.classList.remove('ready');
        }
    }
    
    // Слушаем изменения во всех полях
    inputs.forEach(input => {
        input.addEventListener('input', checkFormValidity);
        input.addEventListener('change', checkFormValidity);
    });
    
    // Слушаем клики по кнопкам выбора пола
    genderButtons.forEach(button => {
        button.addEventListener('click', checkFormValidity);
    });
    
    // Начальная проверка
    checkFormValidity();
}


// Функция инициализации инпутов
function initCalculatorInputs() {
    const genderButtons = document.querySelectorAll('.gender-button');
    const weightInput = document.getElementById('weight-input');
    const weightSlider = document.getElementById('weight');
    const heightInput = document.getElementById('height-input');
    const heightSlider = document.getElementById('height');

    if (genderButtons) {
        genderButtons.forEach(button => {
            button.addEventListener('click', function() {
                genderButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    if (weightInput && weightSlider) {
        weightSlider.addEventListener('input', () => weightInput.value = weightSlider.value);
        weightInput.addEventListener('input', () => weightSlider.value = weightInput.value);
        weightSlider.value = weightInput.value || 70;
        weightInput.value = weightSlider.value;
    }

    if (heightInput && heightSlider) {
        heightSlider.addEventListener('input', () => heightInput.value = heightSlider.value);
        heightInput.addEventListener('input', () => heightSlider.value = heightInput.value);
        heightSlider.value = heightInput.value || 170;
        heightInput.value = heightSlider.value;
    }
}

// Обработчик отправки формы
function handleCalculatorSubmit(e) {
    e.preventDefault();
    
    const submitButton = e.target.querySelector('button[type="submit"]');

    // Получение значений из формы
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('.gender-button.active')?.dataset.gender;
    const weight = parseFloat(document.getElementById('weight-input').value);
    const height = parseInt(document.getElementById('height-input').value);
    const activity = document.getElementById('activity').value;
    const dietaryPreference = document.getElementById('dietary-preference').value;
    const goal = document.getElementById('goal').value;

     // Если форма не готова, прерываем выполнение
     if (!submitButton.classList.contains('ready')) {
        showError('Please fill in all fields');
        return;
    }

    // Валидация
    if (!validateInputs(age, gender, weight, height, activity, dietaryPreference, goal)) {
        return;
    }

    // Расчет результатов
    const results = calculateNutrition(age, gender, weight, height, activity, dietaryPreference, goal);
    
    // Отображение результатов
    displayResults(results);
}

// Функция валидации
function validateInputs(age, gender, weight, height, activity, dietaryPreference, goal) {
    if (!age || !gender || !weight || !height || !activity || !dietaryPreference || !goal) {
        showError('Please fill in all fields');
        return false;
    }

    if (!validateNumberInput(age, validationLimits.age.min, validationLimits.age.max)) {
        showError(`Age should be between ${validationLimits.age.min} and ${validationLimits.age.max}`);
        return false;
    }

    if (!validateNumberInput(weight, validationLimits.weight.min, validationLimits.weight.max)) {
        showError(`Weight should be between ${validationLimits.weight.min} and ${validationLimits.weight.max} kg`);
        return false;
    }

    if (!validateNumberInput(height, validationLimits.height.min, validationLimits.height.max)) {
        showError(`Height should be between ${validationLimits.height.min} and ${validationLimits.height.max} cm`);
        return false;
    }

    return true;
}


function calculateHempProteinNeeds(weight, activity, dietaryPreference) {
    const baseProteinPerKg = activity === 'veryActive' || activity === 'extraActive' ? 2.0 : 1.6;
    const totalProteinNeed = weight * baseProteinPerKg;
    
    let hempProteinRatio;
    switch(dietaryPreference) {
        case 'high-lysine':
            hempProteinRatio = 0.3;
            break;
        case 'high-methionine':
            hempProteinRatio = 0.4;
            break;
        default: // balanced
            hempProteinRatio = 0.35;
    }
    
    return Math.round(totalProteinNeed * hempProteinRatio);
}

// Функция расчета нутриентов
function calculateNutrition(age, gender, weight, height, activity, dietaryPreference, goal) {
    // Расчет базового метаболизма (BMR)
    let bmr;
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }

    // Расчет калорий с учетом активности
    const activityMultipliers = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
    };
    
    let calories = Math.round(bmr * activityMultipliers[activity]);

    // Корректировка калорий в зависимости от цели
    if (goal === 'lose') {
        calories *= 0.85;
    } else if (goal === 'gain') {
        calories *= 1.15;
    }

    // Расчет макронутриентов
    let macros;
    if (goal === 'lose') {
        macros = {
            protein: Math.round((calories * 0.3) / 4),
            fat: Math.round((calories * 0.35) / 9),
            carbs: Math.round((calories * 0.35) / 4)
        };
    } else {
        macros = {
            protein: Math.round((calories * 0.25) / 4),
            fat: Math.round((calories * 0.3) / 9),
            carbs: Math.round((calories * 0.45) / 4)
        };
    }

    // Расчет BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    const bmiCategory = getBMICategory(bmi);

    // Расчет протеиновой смеси
    const activityLevel = activityMultipliers[activity] > 1.55 ? 'high' : 'moderate';
    const proteinResults = calculateReferenceProteinUnit(weight, activityLevel, dietaryPreference);
    const hempNutrients = calculateAdditionalHempNutrients(proteinResults.proteinMix.hemp);

    return {
        calories: Math.round(calories),
        bmi: bmi,
        bmiCategory: bmiCategory,
        macros: macros,
        proteinMix: proteinResults.proteinMix,
        lysine: proteinResults.totalLysine,
        methionine: proteinResults.totalMethionine,
        hempNutrients: hempNutrients
    };
}


// Функция расчета белковых источников
function calculateReferenceProteinUnit(weight, activityLevel, dietaryPreference) {
    const proteinNeedPerKg = activityLevel === 'high' ? 1.6 : 1.2;
    const totalProteinNeed = weight * proteinNeedPerKg;

    let idealRatios;
    if (dietaryPreference === 'balanced') {
        idealRatios = { hemp: 0.3, pea: 0.3, rice: 0.2, quinoa: 0.1, chia: 0.1 };
    } else if (dietaryPreference === 'high-lysine') {
        idealRatios = { hemp: 0.2, pea: 0.4, rice: 0.1, quinoa: 0.2, chia: 0.1 };
    } else if (dietaryPreference === 'high-methionine') {
        idealRatios = { hemp: 0.4, pea: 0.2, rice: 0.2, quinoa: 0.1, chia: 0.1 };
    }

    let proteinMix = {};
    let totalLysine = 0;
    let totalMethionine = 0;

    for (let source in idealRatios) {
        const proteinAmount = totalProteinNeed * idealRatios[source];
        const sourceAmount = (proteinAmount / (proteinSources[source].protein / 100)).toFixed(0);
        proteinMix[source] = sourceAmount;
        totalLysine += (sourceAmount / 100) * proteinSources[source].lysine;
        totalMethionine += (sourceAmount / 100) * proteinSources[source].methionine;
    }

    return {
        totalProteinNeed: Math.round(totalProteinNeed),
        proteinMix: proteinMix,
        totalLysine: totalLysine.toFixed(2),
        totalMethionine: totalMethionine.toFixed(2)
    };
}

// Функция расчета дополнительных нутриентов конопли
function calculateAdditionalHempNutrients(hempAmount) {
    const hemp = proteinSources.hemp;
    const hempRatio = hempAmount / 100;

    return {
        omega3: hemp.omega3 * hempRatio,
        omega6: hemp.omega6 * hempRatio,
        omega9: hemp.omega9 * hempRatio,
        omegaRatio: {
            omega3: 1,
            omega6: (hemp.omega6 * hempRatio) / (hemp.omega3 * hempRatio),
            omega9: (hemp.omega9 * hempRatio) / (hemp.omega3 * hempRatio)
        },
        gla: hemp.gla * hempRatio,
        arginine: hemp.arginine * hempRatio,
        glaArgRatio: (hemp.gla * hempRatio) / (hemp.arginine * hempRatio),
        edestin: hemp.edestin * hempRatio,
        mesoInositol: hemp.mesoInositol * hempRatio
    };
}

// Функция для подсчета процента от RDV
function calculatePercentageOfRDV(value, rdv) {
    return ((value / rdv) * 100).toFixed(1);
}

// Функция отображения результатов
function displayResults(results) {
    console.log('Starting displayResults with:', results);
    
    const resultElement = document.getElementById('result');
    const recommendationsElement = document.getElementById('recommendations');
    const resultsContainer = document.querySelector('.results-container');
    
    console.log('Found elements:', {
        resultElement: !!resultElement,
        recommendationsElement: !!recommendationsElement,
        resultsContainer: !!resultsContainer
    });

    let resultHtml = `
        <h3 class="animated-text"><span>Calculation Results:</span></h3>
        <p class="animated-text"><span>Daily Calorie Intake: 
            <span class="tooltip-trigger" data-tooltip="Recommended daily calories based on your parameters">
                ${results.calories} kcal
            </span></span>
        </p>
        <p class="animated-text"><span>BMI: 
            <span class="tooltip-trigger" data-tooltip="Body Mass Index - measure of body fat based on height and weight">
                ${results.bmi}
            </span> (${results.bmiCategory})</span>
        </p>
        <p class="animated-text"><span>Daily Macronutrient Needs:</span></p>
        <ul>
            <li class="animated-text"><span>Protein: 
                <span class="tooltip-trigger" data-tooltip="Essential for muscle growth and repair">
                    ${results.macros.protein}g
                </span></span>
            </li>
            <li class="animated-text"><span>Fat: 
                <span class="tooltip-trigger" data-tooltip="Important for hormone production and nutrient absorption">
                    ${results.macros.fat}g
                </span></span>
            </li>
            <li class="animated-text"><span>Carbs: 
                <span class="tooltip-trigger" data-tooltip="Primary energy source for your body">
                    ${results.macros.carbs}g
                </span></span>
            </li>
        </ul>
    `;

    let hempNutrientsHtml = `
        <h4 class="animated-text"><span>Hemp Nutrition Information:</span></h4>
        <ul>`;

    if (results.hempNutrients) {
        hempNutrientsHtml += `
            <li class="animated-text"><span>Omega-3: 
                <span class="tooltip-trigger" data-tooltip="Essential fatty acid for heart and brain health.">
                    ${results.hempNutrients.omega3.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>Omega-6: 
                <span class="tooltip-trigger" data-tooltip="Essential fatty acid for growth and development.">
                    ${results.hempNutrients.omega6.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>Omega-9: 
                <span class="tooltip-trigger" data-tooltip="Non-essential fatty acid that supports heart health">
                    ${results.hempNutrients.omega9.toFixed(2)}g
                </span>
            </span></li>`;
    }

    hempNutrientsHtml += `</ul>`;

   let proteinMixHtml = `
    <h4 class="animated-text"><span>Recommended Protein Sources Mix:</span></h4>
    <ul>`;

// Добавляем проверку на наличие proteinMix
if (results.proteinMix) {
    for (let source in results.proteinMix) {
        proteinMixHtml += `
            <li class="animated-text"><span>
                <span class="tooltip-trigger" data-tooltip="${proteinSources[source].tooltip}">
                    ${source}: ${results.proteinMix[source]}g (provides ${(results.proteinMix[source] * proteinSources[source].protein / 100).toFixed(1)}g protein)
                </span>
            </span></li>`;
    }
}

proteinMixHtml += `</ul>`;

    if (resultElement && recommendationsElement && resultsContainer) {
        resultElement.innerHTML = resultHtml;
        recommendationsElement.innerHTML = hempNutrientsHtml + proteinMixHtml;
        resultsContainer.classList.add('visible');
        
        setTimeout(() => {
            animateText();
            createTooltips();
        }, 100);
        
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция отображения ошибок
function showError(message) {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.opacity = '1';
        setTimeout(() => {
            errorElement.style.opacity = '0';
        }, 3000);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initCalculator);

function initCalculatorRecipes() {
    const recipesSection = document.querySelector('.calculator-recipes');
    if (!recipesSection) return;

    const randomRecipes = getRandomRecipes(defaultRecipes, 4);
    const recipeGrid = recipesSection.querySelector('.calculator-recipe-grid');
    
    if (recipeGrid) {
        recipeGrid.innerHTML = randomRecipes.map(recipe => `
            <div class="recipe-card" data-recipe-id="${recipe.id}">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-card-content">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                </div>
            </div>
        `).join('');

        recipeGrid.querySelectorAll('.recipe-card').forEach(card => {
            card.addEventListener('click', () => {
                const recipeId = card.dataset.recipeId;
                showRecipe(recipeId);
            });
        });
    }
}

function getRandomRecipes(recipes, count) {
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
