// Функции для расчетов
export function calculatePercentageOfRDV(value, rdv) {
    return ((value / rdv) * 100).toFixed(1);
}

export function calculateRatio(a, b) {
    return (a / b).toFixed(2);
}

export function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
}

// Функции для UI
export function createTooltips() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    
    tooltipTriggers.forEach(trigger => {
        if (!trigger.querySelector('.tooltip')) {
            const tooltipText = trigger.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('span');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            trigger.appendChild(tooltipElement);
        }
    });
}

export function animateText() {
    const animatedElements = document.querySelectorAll('.animated-text > span');
    animatedElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.display = 'inline-block';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Функции для обработки событий
export function handleHeaderTransparency() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 60) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

export function handleMouseMove(event) {
    const nav = document.querySelector('nav');
    if (event.clientX <= 48 && !nav.classList.contains('open')) {
        openMenu();
    }
}

// Валидация
export function validateNumberInput(value, min, max) {
    const number = parseFloat(value);
    return !isNaN(number) && number >= min && number <= max;
}

// Форматирование
export function formatNumber(value, decimals = 1) {
    return Number(value).toFixed(decimals);
}

// Вспомогательные функции для DOM
export function createElement(tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;
    return element;
}

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Управление загрузчиком
export function showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.add('visible');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) loader.classList.remove('visible');
}

// Управление ошибками
export function showError(message, duration = 3000) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-message';
    errorContainer.textContent = message;
    document.body.appendChild(errorContainer);

    setTimeout(() => {
        errorContainer.remove();
    }, duration);
}

// Дебаунс и тротлинг
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Функции для работы с локальным хранилищем
export function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('Error saving to localStorage:', e);
        return false;
    }
}

export function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (e) {
        console.error('Error reading from localStorage:', e);
        return null;
    }
}

// Вспомогательные функции для валидации
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidAge(age) {
    return validateNumberInput(age, validationLimits.age.min, validationLimits.age.max);
}

export function isValidWeight(weight) {
    return validateNumberInput(weight, validationLimits.weight.min, validationLimits.weight.max);
}

export function isValidHeight(height) {
    return validateNumberInput(height, validationLimits.height.min, validationLimits.height.max);
}