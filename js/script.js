// Game Data
const games = [
    {
        id: 0,
        name: "SkillWarz",
        thumbnail: "https://www.crazygames.com/games/skillwarz/cover-1582631588697.png", // 官方封面
        iframeUrl: "https://www.crazygames.com/embed/skillwarz",
        category: "action"
    },
    {
        id: 1,
        name: "Space Invaders",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Space+Invaders",
        iframeUrl: "https://example.com/space-invaders",
        category: "action"
    },
    {
        id: 2,
        name: "Chess Master",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Chess+Master",
        iframeUrl: "https://example.com/chess-master",
        category: "strategy"
    },
    {
        id: 3,
        name: "Bubble Pop",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Bubble+Pop",
        iframeUrl: "https://example.com/bubble-pop",
        category: "casual"
    },
    {
        id: 4,
        name: "Racing Legends",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Racing+Legends",
        iframeUrl: "https://example.com/racing-legends",
        category: "racing"
    },
    {
        id: 5,
        name: "Zombie Survival",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Zombie+Survival",
        iframeUrl: "https://example.com/zombie-survival",
        category: "action"
    },
    {
        id: 6,
        name: "Tower Defense",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Tower+Defense",
        iframeUrl: "https://example.com/tower-defense",
        category: "strategy"
    },
    {
        id: 7,
        name: "Puzzle Quest",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Puzzle+Quest",
        iframeUrl: "https://example.com/puzzle-quest",
        category: "casual"
    },
    {
        id: 8,
        name: "Drift Racing",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Drift+Racing",
        iframeUrl: "https://example.com/drift-racing",
        category: "racing"
    },
    {
        id: 9,
        name: "Ninja Warrior",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Ninja+Warrior",
        iframeUrl: "https://example.com/ninja-warrior",
        category: "action"
    },
    {
        id: 10,
        name: "Civilization",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Civilization",
        iframeUrl: "https://example.com/civilization",
        category: "strategy"
    },
    {
        id: 11,
        name: "Candy Crush",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Candy+Crush",
        iframeUrl: "https://example.com/candy-crush",
        category: "casual"
    },
    {
        id: 12,
        name: "Formula 1",
        thumbnail: "https://via.placeholder.com/300x200/28a745/ffffff?text=Formula+1",
        iframeUrl: "https://example.com/formula-1",
        category: "racing"
    }
];

// DOM Elements
const gamesGrid = document.getElementById('games-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const gameModal = document.getElementById('gameModal');
const gameModalTitle = document.getElementById('gameModalTitle');
const gameIframe = document.getElementById('gameIframe');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Current filter
let currentCategory = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadGames(currentCategory);
    setupEventListeners();
    setupSmoothScrolling();
    // 新增：主推SkillWarz按钮事件
    const playSkillWarzBtn = document.getElementById('playSkillWarzBtn');
    if (playSkillWarzBtn) {
        playSkillWarzBtn.addEventListener('click', function() {
            // SkillWarz游戏信息
            const skillwarzGame = {
                name: "SkillWarz",
                iframeUrl: "https://www.crazygames.com/embed/skillwarz"
            };
            gameModalTitle.textContent = skillwarzGame.name;
            gameIframe.src = skillwarzGame.iframeUrl;
            const modal = new bootstrap.Modal(gameModal);
            modal.show();
        });
    }
});

// Load games based on category
function loadGames(category) {
    const filteredGames = category === 'all' 
        ? games 
        : games.filter(game => game.category === category);
    
    displayGames(filteredGames);
}

// Display games in the grid
function displayGames(gamesToShow) {
    gamesGrid.innerHTML = '';
    
    if (gamesToShow.length === 0) {
        gamesGrid.innerHTML = `
            <div class="col-12 text-center">
                <div class="no-games">
                    <i class="fas fa-gamepad fa-3x text-muted mb-3"></i>
                    <h4 class="text-muted">No games found in this category</h4>
                    <p class="text-muted">Try selecting a different category or check back later for new games.</p>
                </div>
            </div>
        `;
        return;
    }
    
    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// Create a game card element
function createGameCard(game) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 col-sm-12';
    
    col.innerHTML = `
        <div class="game-card" data-game-id="${game.id}">
            <div class="game-thumbnail">
                <img src="${game.thumbnail}" alt="${game.name}" loading="lazy">
                <div class="game-overlay">
                    <button class="play-btn">
                        <i class="fas fa-play me-2"></i>Play Now
                    </button>
                </div>
            </div>
            <div class="game-info">
                <h3 class="game-title">${game.name}</h3>
                <span class="game-category">${capitalizeFirst(game.category)}</span>
            </div>
        </div>
    `;
    
    // Add click event to game card
    col.querySelector('.game-card').addEventListener('click', () => {
        openGameModal(game);
    });
    
    return col;
}

// Open game modal
function openGameModal(game) {
    gameModalTitle.textContent = game.name;
    gameIframe.src = game.iframeUrl;
    
    const modal = new bootstrap.Modal(gameModal);
    modal.show();
    
    // Add loading state
    gameIframe.onload = function() {
        // Remove loading state if needed
    };
}

// Setup event listeners
function setupEventListeners() {
    // Category filter buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            filterGames(category);
        });
    });
    
    // Fullscreen button
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // Modal close event
    gameModal.addEventListener('hidden.bs.modal', function () {
        gameIframe.src = '';
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Mobile touch events
    setupMobileTouchEvents();
}

// Filter games by category
function filterGames(category) {
    // Update active button
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update current category
    currentCategory = category;
    
    // Load filtered games
    loadGames(category);
    
    // Smooth scroll to games section
    document.getElementById('games').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Toggle fullscreen mode
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        gameIframe.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Handle keyboard shortcuts
function handleKeyboardShortcuts(e) {
    // ESC key to close modal
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(gameModal);
        if (modal) {
            modal.hide();
        }
    }
    
    // F key for fullscreen (when modal is open)
    if (e.key === 'f' || e.key === 'F') {
        if (gameModal.classList.contains('show')) {
            toggleFullscreen();
        }
    }
}

// Setup mobile touch events
function setupMobileTouchEvents() {
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could be used for navigation
            } else {
                // Swipe down - could be used for navigation
            }
        }
    }
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility functions
function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 17, 23, 0.98)';
    } else {
        header.style.background = 'rgba(13, 17, 23, 0.95)';
    }
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Game search functionality
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search games...';
    searchInput.className = 'form-control mb-3';
    searchInput.id = 'gameSearch';
    
    const searchContainer = document.querySelector('.category-filter');
    searchContainer.insertBefore(searchInput, searchContainer.firstChild);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredGames = games.filter(game => 
            game.name.toLowerCase().includes(searchTerm) ||
            game.category.toLowerCase().includes(searchTerm)
        );
        displayGames(filteredGames);
    });
}

// Initialize search (uncomment to enable)
// setupSearch();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
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

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations or effects can go here
}, 10));

// Add loading animation for game cards
function addLoadingAnimation() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize loading animations
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
});

// Error handling for iframe loading
function handleIframeError() {
    gameIframe.addEventListener('error', function() {
        this.innerHTML = `
            <div class="text-center p-5">
                <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                <h4>Game Loading Error</h4>
                <p>Sorry, this game is currently unavailable. Please try again later.</p>
                <button class="btn btn-primary" onclick="location.reload()">Retry</button>
            </div>
        `;
    });
}

// Initialize error handling
handleIframeError();

// Analytics tracking (placeholder)
function trackGamePlay(gameId, gameName) {
    // This would integrate with your analytics service
    console.log(`Game played: ${gameName} (ID: ${gameId})`);
}

// Add tracking to game modal
function addGameTracking() {
    gameModal.addEventListener('shown.bs.modal', function() {
        const gameId = this.querySelector('#gameIframe').dataset.gameId;
        const gameName = this.querySelector('#gameModalTitle').textContent;
        trackGamePlay(gameId, gameName);
    });
}

// Initialize tracking
addGameTracking(); 