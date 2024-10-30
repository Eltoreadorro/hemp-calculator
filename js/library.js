// library.js
import { createTooltips } from './utils.js';

export function initLibrary() {
    console.log('Initializing library...');
    initializeSearch();
    initializeModal();
    initializeBookHover();
    initializeBookGrid();
    console.log('Library initialized successfully.');
}

function initializeSearch() {
    const searchInput = document.querySelector('.search-inner input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    console.log('Search term:', searchTerm);
    // Поиск по книгам будет реализован при добавлении книг в базу
}

function initializeBookGrid() {
    const booksGrid = document.querySelector('.books-grid');
    if (!booksGrid) return;

    const book = {
        title: 'The mathematics of cannabis eat',
        author: 'Yurii Kolesnyk',
        publishedDate: '2024',
        pages: '138',
        language: 'English',
        illustrations: '9',
        description: 'This unique publication reveals a comprehensive approach to understanding hemp\'s nutritional value and its diverse applications in modern health practices. Based on scientific research and mathematical models, the book provides an in-depth analysis of hemp\'s components, including proteins, fatty acids, cannabinoids, terpenes, and flavonoids...',
        image: './images/buk.jpg',
    };

    const bookCard = createBookCard(book);
    booksGrid.innerHTML = bookCard;

    const cards = booksGrid.querySelectorAll('.book-card');
    cards.forEach(card => {
        card.addEventListener('click', () => handleBookClick(book));
    });
}

function createBookCard(book) {
    return `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}">
            <div class="book-overlay">
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
            </div>
        </div>
    `;
}

function initializeModal() {
    const modal = document.getElementById('book-modal');
    if (!modal) return;

    const closeBtn = modal.querySelector('.close-modal');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(modal));
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal(modal);
        }
    });
}

function handleBookClick(book) {
    const modal = document.getElementById('book-modal');
    if (!modal) return;

    showBookDetails(book);
    openModal(modal);
}

function showBookDetails(book) {
    const modalContent = document.querySelector('#book-modal .book-details');
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="book-info">
            <h2>Hemp Nutrition: Mathematics of Health</h2>
            <div class="book-meta">
                <span>By Yurii Kolesnyk</span>
                <span>Published: 2024</span>
                <span>138 pages</span>
                <span>English</span>
                <span>Illustrations: 9</span>
            </div>
            <div class="book-description">
                This unique publication reveals a comprehensive approach to understanding hemp's nutritional value and its diverse applications in modern health practices. Based on scientific research and mathematical models, the book provides an in-depth analysis of hemp's components, including proteins, fatty acids, cannabinoids, terpenes, and flavonoids. The author systematically explores hemp's role in addressing global health challenges, its environmental benefits, and its potential in sustainable agriculture. From ancient medicinal practices to cutting-edge scientific discoveries, the book covers everything from basic nutritional properties to advanced therapeutic applications. Special attention is given to hemp's unique protein composition, essential fatty acid ratios, and their significance in human health. The work also includes practical insights into hemp's use in medicine, agriculture, and eco-friendly industrial applications.
            </div>
            <a href="https://www.amazon.com/dp/B0DK514LQF" class="amazon-button" target="_blank">
                View on Amazon
            </a>
        </div>
    `;
}

function openModal(modal) {
    // Показываем модальное окно
    modal.style.visibility = 'visible';
    modal.style.display = 'flex'; // Добавляем это свойство
    
    // Добавляем активный класс после короткой задержки
    requestAnimationFrame(() => {
        modal.classList.add('active');
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        }
    });
}

function closeModal(modal) {
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.style.opacity = '0';
        modalContent.style.transform = 'scale(0.7)';
    }
    
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.visibility = 'hidden';
        modal.style.display = 'none';
    }, 300);
}

function initializeBookHover() {
    const bookCards = document.querySelectorAll('.book-card');
    
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const isLibraryPage = window.location.pathname.includes('library.html');
    if (isLibraryPage) {
        initLibrary();
    }
});