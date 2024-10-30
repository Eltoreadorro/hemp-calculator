import { recipeCategories, defaultRecipes } from './constants.js';
import { createTooltips } from './utils.js';

let searchQuery = '';
let selectedCategory = null;
let selectedRecipe = null;

function getRecipesByCategory(categoryId) {
    return defaultRecipes.filter(recipe => recipe.category === categoryId);
}

export function initRecipes() {
    const isRecipesPage = window.location.pathname.includes('recipes.html');
    
    if (isRecipesPage) {
        initializeSearch();
        initializeCategories();
        initializeModals();
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('recipe-search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

function handleSearch(event) {
    searchQuery = event.target.value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (searchQuery.length > 0) {
        const filteredRecipes = defaultRecipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery)
        );
        
        searchResults.classList.remove('hidden');
        displaySearchResults(filteredRecipes);
    } else {
        searchResults.classList.add('hidden');
    }
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;

    searchResults.innerHTML = results.map((recipe) => `
        <div class="recipe-card" data-recipe-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="recipe-card-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            </div>
        </div>
    `).join('');

    searchResults.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = card.dataset.recipeId;
            showRecipe(recipeId);
        });
    });
}

function initializeCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = recipeCategories.map((category) => `
        <div class="category-card" data-category-id="${category.id}">
            <img src="${category.image}" alt="${category.name}">
            <div class="category-content">
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                </div>
                <span class="category-count">${getRecipesByCategory(category.id).length} recipes</span>
            </div>
        </div>
    `).join('');

    categoriesGrid.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.categoryId;
            showCategory(categoryId);
        });
    });
}

function showCategory(categoryId) {
    selectedCategory = categoryId;
    const modal = document.getElementById('category-modal');
    if (!modal) return;

    const recipes = getRecipesByCategory(categoryId);
    const category = recipeCategories.find(c => c.id === categoryId);

    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${category.name}</h2>
                <button class="close-modal">×</button>
            </div>
            <div class="category-recipes">
                ${recipes.map(recipe => `
                    <div class="recipe-card" data-recipe-id="${recipe.id}">
                        <img src="${recipe.image}" alt="${recipe.title}">
                        <div class="recipe-card-content">
                            <h3>${recipe.title}</h3>
                            <p>${recipe.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Обработчики
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeCategory);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCategory();
    });

    modal.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const recipeId = card.dataset.recipeId;
            showRecipe(recipeId);
        });
    });
}

export function showRecipe(recipeId) {
    selectedRecipe = recipeId;
    const modal = document.getElementById('recipe-modal');
    if (!modal) return;

    const recipe = defaultRecipes.find(r => r.id === recipeId);
    if (!recipe) return;

    modal.innerHTML = `
        <div class="modal-content">
            <button class="close-modal">×</button>
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>
            <div class="recipe-details">
                <h2>${recipe.title}</h2>
                <div class="recipe-info">
                    <div class="recipe-meta">
                        <p>Difficulty: ${recipe.difficulty}</p>
                        <p>Prep Time: ${recipe.prepTime}</p>
                        <p>Cook Time: ${recipe.cookTime}</p>
                        <p>Total Time: ${recipe.totalTime}</p>
                        <p>Servings: ${recipe.servings}</p>
                    </div>
                    <div class="nutrition-info">
                        <h3>Nutrition Info</h3>
                        <p>Calories: ${recipe.nutritionInfo.calories}</p>
                        <p>Protein: ${recipe.nutritionInfo.protein}g</p>
                        <p>Fats: ${recipe.nutritionInfo.fats}g</p>
                        <p>Carbs: ${recipe.nutritionInfo.carbs}g</p>
                        ${recipe.nutritionInfo.fiber ? `<p>Fiber: ${recipe.nutritionInfo.fiber}g</p>` : ''}
                    </div>
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="instructions">
                        <h3>Instructions</h3>
                        <ol>
                            ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="tips">
                        <h3>Tips</h3>
                        <ul>
                            ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="storage">
                        <h3>Storage</h3>
                        <p>${recipe.storage}</p>
                    </div>
                    <div class="variations">
                        <h3>Variations</h3>
                        <ul>
                            ${recipe.variations.map(var_ => `<li>${var_}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Добавляем обработчики
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeRecipe);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeRecipe();
    });
}

function closeCategory() {
    const modal = document.getElementById('category-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('active');
            modal.style.opacity = '';
            selectedCategory = null;
        }, 300);
    }
}

function closeRecipe() {
    const modal = document.getElementById('recipe-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.classList.remove('active');
            modal.style.opacity = '';
            selectedRecipe = null;
        }, 300);
    }
}

function initializeModals() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCategory();
            closeRecipe();
            selectedCategory = null;
            selectedRecipe = null;
        }
    });
}

document.addEventListener('DOMContentLoaded', initRecipes);