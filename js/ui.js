// ui.js
import { createTooltips, animateText } from './utils.js';
import { recommendedDailyValues } from './constants.js';
import { calculatePercentageOfRDV } from './utils.js';

export function displayResults(results) {
    console.log('Displaying results:', results);
    
    const resultHtml = `
        <h3 class="animated-text"><span>Calculation Results:</span></h3>
        <p class="animated-text"><span>Your recommended daily calorie intake: 
            <span class="tooltip-trigger" data-tooltip="Calories are units of energy needed to fuel your body">
                ${results.calories} kcal
            </span></span>
        </p>
        <p class="animated-text"><span>Your BMI: 
            <span class="tooltip-trigger" data-tooltip="Body Mass Index is a measure of body fat based on height and weight">
                ${results.bmi}
            </span> (${results.bmiCategory})</span>
        </p>
        <p class="animated-text"><span>Your daily macronutrient needs:</span></p>
        <ul>
            <li class="animated-text"><span>Protein: 
                <span class="tooltip-trigger" data-tooltip="Protein is essential for muscle growth and repair. Hemp seeds are an excellent source of plant-based protein.">
                    ${results.proteinNeeds}g
                </span></span>
            </li>
            <li class="animated-text"><span>Fat: 
                <span class="tooltip-trigger" data-tooltip="Fats are important for hormone production and nutrient absorption. Hemp oil is rich in healthy omega-3 and omega-6 fatty acids.">
                    ${results.fatNeeds}g
                </span></span>
            </li>
            <li class="animated-text"><span>Carbohydrates: 
                <span class="tooltip-trigger" data-tooltip="Carbs are the body's main source of energy. Whole grains and vegetables are good sources of complex carbohydrates.">
                    ${results.carbNeeds}g
                </span></span>
            </li>
        </ul>
    `;

    const additionalHempInfo = `
        <h4 class="animated-text"><span>Additional Hemp Nutrition Information:</span></h4>
        <ul>
            <li class="animated-text"><span>Omega-3: 
                <span class="tooltip-trigger" data-tooltip="Important fatty acids for heart and brain health. RDV: Recommended Daily Value">
                    ${results.hempNutrients.omega3.toFixed(2)}g
                </span>
                (${calculatePercentageOfRDV(results.hempNutrients.omega3, recommendedDailyValues.omega3)}% of RDV)
            </span></li>
            <li class="animated-text"><span>Omega-6: 
                <span class="tooltip-trigger" data-tooltip="Supports skin health and metabolism. RDV: Recommended Daily Value">
                    ${results.hempNutrients.omega6.toFixed(2)}g
                </span>
                (${calculatePercentageOfRDV(results.hempNutrients.omega6, recommendedDailyValues.omega6)}% of RDV)
            </span></li>
            <li class="animated-text"><span>Omega-9: 
                <span class="tooltip-trigger" data-tooltip="Helps reduce inflammation in the body. No established RDV.">
                    ${results.hempNutrients.omega9.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>GLA: 
                <span class="tooltip-trigger" data-tooltip="Helps reduce inflammation and supports skin health">
                    ${results.hempNutrients.gla.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>Arginine: 
                <span class="tooltip-trigger" data-tooltip="Amino acid important for muscle growth and wound healing">
                    ${results.hempNutrients.arginine.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>Edestin: 
                <span class="tooltip-trigger" data-tooltip="Easily digestible protein unique to hemp">
                    ${results.hempNutrients.edestin.toFixed(2)}g
                </span>
            </span></li>
            <li class="animated-text"><span>Meso-Inositol: 
                <span class="tooltip-trigger" data-tooltip="Supports nervous system health">
                    ${results.hempNutrients.mesoInositol.toFixed(2)}g
                </span>
            </span></li>
        </ul>
    `;

    const resultElement = document.getElementById('result');
    const recommendationsElement = document.getElementById('recommendations');
    const resultsContainer = document.querySelector('.results-container');
    
    if (resultElement && recommendationsElement && resultsContainer) {
        resultElement.innerHTML = resultHtml;
        recommendationsElement.innerHTML = additionalHempInfo;
        resultsContainer.classList.add('visible');
        
        setTimeout(() => {
            animateText();
            createTooltips();
        }, 100);
        
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }
}

export function initFormControls() {
    const genderButtons = document.querySelectorAll('.gender-button');
    if (genderButtons) {
        genderButtons.forEach(button => {
            button.addEventListener('click', () => {
                genderButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    initRangeInputs();
}

function initRangeInputs() {
    const ranges = [
        { slider: 'weight', input: 'weight-input', default: 70 },
        { slider: 'height', input: 'height-input', default: 170 }
    ];

    ranges.forEach(({ slider, input, default: defaultValue }) => {
        const sliderElement = document.getElementById(slider);
        const inputElement = document.getElementById(input);
        
        if (sliderElement && inputElement) {
            sliderElement.value = inputElement.value || defaultValue;
            inputElement.value = sliderElement.value;

            sliderElement.addEventListener('input', () => {
                inputElement.value = sliderElement.value;
            });

            inputElement.addEventListener('input', () => {
                sliderElement.value = inputElement.value;
            });
        }
    });
}

export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'flex';
        loader.style.opacity = '1';
    }
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
}

export function showError(message) {
    const errorElement = document.querySelector('.error-message');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.opacity = '1';
        setTimeout(() => {
            errorElement.style.opacity = '0';
        }, 3000);
    }
}

export function handleModalClose(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}