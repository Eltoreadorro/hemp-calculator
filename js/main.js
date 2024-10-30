import { initCalculator } from './calculator.js';
import { initLibrary } from './library.js';
import { initRecipes } from './recipes.js';
import { createTooltips } from './utils.js';

let menuCloseTimer;
let nav;
let overlay;

function initMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeMenuBtn = document.querySelector('.close-menu');
    nav = document.querySelector('.side-nav');
    overlay = document.querySelector('.overlay');
    const header = document.querySelector('header');

    menuIcon?.addEventListener('click', openMenu);
    closeMenuBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);
    nav?.addEventListener('mouseenter', stopMenuCloseTimer);
    nav?.addEventListener('mouseleave', startMenuCloseTimer);
    document.body.addEventListener('mousemove', handleMouseMove);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                const modalInstance = document.getElementById('book-modal');
                if (modalInstance) {
                    closeModal(modalInstance);
                }
            }
        }
    });

    setActiveNavLink();
}

function handleMouseMove(event) {
    nav = document.querySelector('nav');
    if (event.clientX <= 48 && !nav?.classList.contains('open')) {
        openMenu();
    }
}

function openMenu() {
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');
    sideNav?.classList.add('open');
    overlay?.classList.add('active');
}

function closeMenu() {
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');
    sideNav?.classList.remove('open');
    overlay?.classList.remove('active');
}

function startMenuCloseTimer() {
    clearTimeout(menuCloseTimer);
    menuCloseTimer = setTimeout(() => {
        closeMenu();
    }, 1500);
}

function stopMenuCloseTimer() {
    clearTimeout(menuCloseTimer);
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Новая функция для инициализации формы обратной связи
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Обработчик отправки формы
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const errorMessage = document.querySelector('.error-message');
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;

    if (!email || !message) {
        if (errorMessage) {
            errorMessage.textContent = 'Please fill in all fields';
            errorMessage.style.opacity = '1';
            setTimeout(() => {
                errorMessage.style.opacity = '0';
            }, 3000);
        }
        return;
    }

    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, message })
        });

        if (response.ok) {
            if (errorMessage) {
                errorMessage.textContent = 'Message sent successfully!';
                errorMessage.style.opacity = '1';
                setTimeout(() => {
                    errorMessage.style.opacity = '0';
                }, 3000);
            }
            e.target.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        if (errorMessage) {
            errorMessage.textContent = 'Failed to send message. Please try again.';
            errorMessage.style.opacity = '1';
            setTimeout(() => {
                errorMessage.style.opacity = '0';
            }, 3000);
        }
    }
}

// Обновленный обработчик загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initContactForm(); // Добавлена инициализация формы
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
            initCalculator();
            break;
        case 'recipes.html':
            initRecipes();
            break;
        case 'library.html':
            initLibrary();
            break;
    }

    createTooltips();
});

document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('calorie-form');
    
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');

            // Получаем значения
            const age = parseInt(document.getElementById('age').value);
            const gender = document.querySelector('.gender-button.active')?.dataset.gender;
            const weight = parseFloat(document.getElementById('weight-input').value);
            const height = parseInt(document.getElementById('height-input').value);
            const activity = document.getElementById('activity').value;
            const dietaryPreference = document.getElementById('dietary-preference').value;
            const goal = document.getElementById('goal').value;

            console.log('Form values:', {
                age,
                gender,
                weight,
                height,
                activity,
                dietaryPreference,
                goal
            });

            if (!age || !gender || !weight || !height || !activity || !dietaryPreference || !goal) {
                console.error('Missing required fields');
                return;
            }

            // Вычисляем результаты
            const results = calculateNutrition(age, gender, weight, height, activity, dietaryPreference, goal);
            console.log('Calculation results:', results);

            // Отображаем результаты
            displayResults(results);
        });
    }
});