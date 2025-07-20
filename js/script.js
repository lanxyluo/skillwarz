// Game Data
const games = [
    {
        id: 0,
        name: "SkillWarz",
        thumbnail: "images/skillwarz.jpg",
        iframeUrl: "https://www.crazygames.com/embed/skillwarz",
        category: "action",
        description: "SkillWarz is a fast-paced online FPS game. Join the battle, test your skills, and compete with players worldwide! No download required, play instantly in your browser.",
        features: [
            "Multiplayer FPS battles",
            "Various weapons and maps",
            "Real-time competition",
            "No download, play instantly"
        ],
        howToPlay: "Use WASD to move, mouse to aim and shoot. Join a room and start playing against other players!"
    },
    {
        id: 1,
        name: "Saloon Robbery",
        thumbnail: "images/saloon_robbery.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/SJ8X6zyPcyX",
        category: "action",
        description: "Saloon Robbery is a thrilling action game set in the wild west. Outsmart the guards, grab the loot, and escape the saloon without getting caught!",
        features: [
            "Exciting wild west robbery theme",
            "Challenging levels and clever enemies",
            "Simple tap or click controls",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Tap or click to move your character. Avoid the guards, collect all the loot, and find your way out of the saloon. Plan your moves carefully to avoid being caught!"
    },
    {
        id: 2,
        name: "Carrom Hero",
        thumbnail: "images/carrom_hero.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/H1Hgyn6XqAS",
        category: "strategy",
        description: "Carrom Hero is a fun and challenging HTML5 board game that brings the classic carrom experience to your screen. Aim, strike, and pocket all your pieces before your opponent!",
        features: [
            "Realistic carrom physics and smooth controls",
            "Multiple levels and increasing difficulty",
            "Play against AI or challenge your friends",
            "Colorful graphics and engaging sound effects"
        ],
        howToPlay: "Drag and release to aim and strike the striker. Pocket all your carrom pieces before your opponent to win the game!"
    },
    {
        id: 3,
        name: "Fruit Chop",
        thumbnail: "images/fruit_chop.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/rkWfy2pXq0r",
        category: "casual",
        description: "Fruit Chop is a fast-paced and addictive HTML5 arcade game. Slice as many fruits as you can while avoiding the bombs!",
        features: [
            "Simple swipe controls, easy to play",
            "Colorful fruit graphics and juicy effects",
            "Increasing speed and challenge",
            "Compete for the highest score with friends"
        ],
        howToPlay: "Swipe across the screen to slice fruits. Avoid slicing bombs. The more fruits you chop, the higher your score!"
    },
    {
        id: 4,
        name: "Ants Empire Evolve Sim",
        thumbnail: "images/Ants_Empire_Evolve_Sim.jpg",
        iframeUrl: "https://html5.gamedistribution.com/0358ad881309472b925f305df5e46f62/?gd_sdk_referrer_url=https://www.example.com/games/puzzle-master",
        category: "puzzle",
        description: "Puzzle Master is an engaging HTML5 puzzle game that challenges your logical thinking and problem-solving skills. Solve increasingly complex puzzles and unlock new levels!",
        features: [
            "Brain-teasing puzzle challenges",
            "Multiple difficulty levels",
            "Intuitive drag-and-drop controls",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Use your mouse or touch to drag and drop puzzle pieces. Arrange them correctly to solve each puzzle. Think strategically and plan your moves carefully!"
    },
    {
        id: 5,
        name: "Fruit Adventure",
        thumbnail: "images/fruit_adventure.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/B1fSpMkP51m",
        category: "action",
        description: "Fruit Adventure is a fast-paced HTML5 arcade game where you control a cute fruit character, dodging obstacles and collecting bonuses. Challenge your reflexes and aim for the highest score!",
        features: [
            "Simple one-touch controls，easy to pick up and play",
            "Colorful graphics and lively music",
            "Endless levels with increasing difficulty",
            "Compete for the best score with friends"
        ],
        howToPlay: "Tap or click to jump. Avoid obstacles and collect as many bonuses as possible. The longer you survive, the higher your score!"
    },
    {
        id: 6,
        name: "Bubble Wipeout",
        thumbnail: "images/bubble_wipeout.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/H1AN6fkwqJ7",
        category: "strategy",
        description: "Bubble Wipeout is a colorful and addictive HTML5 puzzle game. Match and pop bubbles to clear the board and achieve the highest score!",
        features: [
            "Simple and intuitive controls",
            "Vibrant graphics and fun sound effects",
            "Challenging levels with increasing difficulty",
            "Compete for high scores with friends"
        ],
        howToPlay: "Tap or click to shoot bubbles. Match three or more bubbles of the same color to pop them. Clear all bubbles to win the level!"
    },
    {
        id: 7,
        name: "Dodge Bot",
        thumbnail: "images/dodge_bot.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/SJ2OGpIn",
        category: "casual",
        description: "Dodge Bot is a reflex-based HTML5 game where you control a robot to dodge incoming obstacles. How long can you survive?",
        features: [
            "One-touch controls, easy to learn",
            "Minimalist graphics and smooth animations",
            "Endless gameplay with increasing difficulty",
            "Challenge your friends for the best score"
        ],
        howToPlay: "Tap or click to change the robot's direction. Avoid all obstacles and survive as long as possible!"
    },
    {
        id: 8,
        name: "Italian Brainrot Survive Parkour",
        thumbnail: "images/Italian_Brainrot_Survive_Parkour.jpg",
        iframeUrl: "https://html5.gamedistribution.com/5c5b89d12e404bf6a4979ae0c0c9a09c/?gd_sdk_referrer_url=https://www.example.com/games/logic-quest",
        category: "puzzle",
        description: "Logic Quest is a challenging HTML5 puzzle game that tests your analytical thinking and pattern recognition skills. Complete each level by solving intricate logic puzzles!",
        features: [
            "Complex logic puzzles and brain teasers",
            "Progressive difficulty system",
            "Smooth touch and mouse controls",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Analyze the puzzle patterns and use logical reasoning to find solutions. Click or tap to interact with puzzle elements. Each level requires different strategies!"
    },
    {
        id: 9,
        name: "Space Rescue Mission",
        thumbnail: "images/space_rescue_mission.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/ryN9EGAQa",
        category: "action",
        description: "Space Rescue Mission is an exciting HTML5 arcade game where you pilot a spaceship to rescue stranded astronauts while avoiding obstacles and enemies. Test your reflexes and strategy in the vastness of space!",
        features: [
            "Intuitive one-touch controls，easy to play",
            "Vivid space-themed graphics and sound effects",
            "Challenging levels with increasing difficulty",
            "Compete for high scores with friends"
        ],
        howToPlay: "Tap or click to move your spaceship. Avoid obstacles, collect power-ups, and rescue as many astronauts as possible to achieve the highest score!"
    },
    {
        id: 10,
        name: "Ludo With Friends",
        thumbnail: "images/ludo_with_friends.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/SkhljT2fdgb",
        category: "strategy",
        description: "Ludo With Friends is a classic multiplayer board game brought to life in HTML5. Roll the dice, move your tokens, and race to get all your pieces home before your opponents!",
        features: [
            "Classic ludo gameplay with modern graphics",
            "Play with friends or against AI",
            "Smooth animations and engaging sound effects",
            "Supports 2-4 players in a single game"
        ],
        howToPlay: "Roll the dice and move your tokens around the board. Get all your tokens to the home area before your opponents to win!"
    },
    {
        id: 11,
        name: "Groovy Ski",
        thumbnail: "images/groovy_ski.jpg",
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/EJaG_JfW9l",
        category: "casual",
        description: "Groovy Ski is a fun and challenging HTML5 skiing game. Guide your skier down the slope, avoid obstacles, and collect coins!",
        features: [
            "Easy tap controls for quick turns",
            "Vibrant graphics and groovy music",
            "Endless slopes with increasing speed",
            "Compete for the highest score with friends"
        ],
        howToPlay: "Tap or click to change direction. Avoid obstacles and collect as many coins as you can for a high score!"
    },
    {
        id: 12,
        name: "Summer Festivals Fashion",
        thumbnail: "images/Summer_Festivals_Fashion.jpg",
        iframeUrl: "https://html5.gamedistribution.com/10f0beef65fe40ccae23194fd95782a8/?gd_sdk_referrer_url=https://www.example.com/games/mind-bender",
        category: "puzzle",
        description: "Mind Bender is an innovative HTML5 puzzle game that pushes the boundaries of traditional puzzle solving. Experience unique challenges that will truly bend your mind!",
        features: [
            "Innovative puzzle mechanics",
            "Unique visual and audio effects",
            "Responsive design for all devices",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Explore the unique puzzle mechanics and discover new ways to solve challenges. Use your creativity and think outside the box to complete each mind-bending level!"
    },
    {
        id: 13,
        name: "Soul Roulette",
        thumbnail: "images/soul_roulette.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://itch.io/embed/3709931",
        category: "strategy",
        description: "Soul Roulette is a unique strategy game where you test your luck and tactics in a mysterious roulette of souls. Outsmart your opponents and survive the odds!",
        features: [
            "Innovative roulette-based strategy gameplay",
            "Atmospheric visuals and sound design",
            "Multiple endings and replayability",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Spin the roulette and make strategic choices to survive. Each round presents new risks and opportunities. Use your wits to outlast your opponents and achieve the best ending!"
    },
    {
        id: 14,
        name: "Tic Tac Toe",
        thumbnail: "images/tic_tac_toe.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/H1WmafkP9JQ",
        category: "strategy",
        description: "Tic Tac Toe is the classic strategy game you know and love! Challenge your friends or the computer in this timeless battle of Xs and Os.",
        features: [
            "Classic 3x3 grid gameplay",
            "Play against friends or AI",
            "Simple, intuitive controls",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Take turns placing your X or O on the grid. The first player to get three in a row—horizontally, vertically, or diagonally—wins the game!"
    },
    {
        id: 15,
        name: "Bottle Shoot",
        thumbnail: "images/bottle_shoot.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/B1fSpMkP51m",
        category: "action",
        description: "Bottle Shoot is a fast-paced action game where your goal is to break as many bottles as possible with limited shots. Test your aim and reflexes in this addictive challenge!",
        features: [
            "Simple tap or click controls",
            "Realistic bottle-breaking physics",
            "Challenging levels with increasing difficulty",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Tap or click to shoot at the bottles. Break all the bottles with the given number of shots to clear each level. Aim carefully and try to achieve the highest score!"
    },
    {
        id: 16,
        name: "Blazing Blades",
        thumbnail: "images/blazing_blades.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/UYiznUAya",
        category: "action",
        description: "Blazing Blades is a fast-paced action game. Compete for the highest score in this exciting online game! No download required, play instantly in your browser.",
        features: [
            "Seamless browser gameplay",
            "Instant action, no installation",
            "Responsive controls",
            "Compete for high scores"
        ],
        howToPlay: "Use your keyboard or touch controls to play. Follow the in-game instructions for specific actions and objectives. Try to achieve the highest score possible!"
    },
    {
        id: 17,
        name: "Jimbo Jump",
        thumbnail: "images/jimbo_jump.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/BkXW1a__",
        category: "action",
        description: "Jimbo Jump is a fast-paced action platformer where you help Jimbo leap from platform to platform, avoiding obstacles and collecting coins. How high can you go?",
        features: [
            "Simple one-tap controls",
            "Endless jumping action",
            "Challenging obstacles and power-ups",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Tap or click to make Jimbo jump. Time your jumps to land on platforms, avoid obstacles, and collect as many coins as possible for a high score!"
    },
    {
        id: 18,
        name: "City Cricket",
        thumbnail: "images/city_cricket.jpg", // 如无图片请上传，暂用占位图
        iframeUrl: "https://zv1y2i8p.play.gamezop.com/g/HJP4afkvqJQ",
        category: "strategy",
        description: "City Cricket is a strategic sports game where you lead your team to victory in exciting city cricket matches. Plan your shots, outsmart your opponents, and aim for the highest score!",
        features: [
            "Realistic city cricket experience",
            "Strategic gameplay and shot selection",
            "Challenging AI opponents",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Tap or click to play your shots. Time your swings, choose your direction, and score as many runs as possible. Outsmart the bowler and lead your team to victory!"
    },
    {
        id: 19,
        name: "3D Super Rolling Ball Race",
        thumbnail: "images/3D_Super_Rolling_Ball_Race.jpg",
        iframeUrl: "https://html5.gamedistribution.com/c77c8b1ffef242609915d126535b0ca9/?gd_sdk_referrer_url=https://www.example.com/games/3d-super-rolling-ball-race",
        category: "puzzle",
        description: "Puzzle Adventure is an exciting HTML5 puzzle game that combines brain-teasing challenges with adventure elements. Solve puzzles to progress through mysterious worlds and unlock new levels!",
        features: [
            "Engaging puzzle mechanics with adventure elements",
            "Multiple worlds and environments to explore",
            "Progressive difficulty system",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Use your mouse or touch to interact with puzzle elements. Think strategically to solve each challenge and advance through the adventure. Each level presents unique puzzles that require creative thinking!"
    },
    {
        id: 20,
        name: "Yummy Tales 3",
        thumbnail: "images/Yummy_Tales_3.jpg",
        iframeUrl: "https://html5.gamedistribution.com/09fa640bb18d4853842e529b615a7dad/?gd_sdk_referrer_url=https://www.example.com/games/yummy-tales-3",
        category: "puzzle",
        description: "Brain Training Challenge is a comprehensive puzzle game designed to enhance your cognitive skills. Test your memory, logic, and problem-solving abilities with various brain-training exercises!",
        features: [
            "Multiple brain training exercises",
            "Memory and logic challenges",
            "Progress tracking system",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Complete various brain training exercises by following the on-screen instructions. Test your memory, solve logic puzzles, and challenge your cognitive abilities. Track your progress and improve your skills!"
    },
    {
        id: 21,
        name: "Crazy Goose Simulator",
        thumbnail: "images/Crazy_Goose_Simulator.jpg",
        iframeUrl: "https://html5.gamedistribution.com/f29467fbb55f4f4fbe4f3263a827195f/?gd_sdk_referrer_url=https://www.example.com/games/crazy-goose-simulator",
        category: "puzzle",
        description: "Mind Puzzle Quest is an innovative puzzle game that pushes the boundaries of traditional puzzle solving. Experience unique challenges that will truly test your mental agility and creativity!",
        features: [
            "Innovative puzzle mechanics",
            "Unique visual and audio effects",
            "Responsive design for all devices",
            "No download, play instantly in your browser"
        ],
        howToPlay: "Explore the unique puzzle mechanics and discover new ways to solve challenges. Use your creativity and think outside the box to complete each mind-bending level. Each puzzle requires a different approach!"
    }
];

// DOM Elements
const gamesGrid = document.getElementById('games-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
// 移除modal相关DOM元素
// const gameModal = document.getElementById('gameModal');
// const gameModalTitle = document.getElementById('gameModalTitle');
// const gameIframe = document.getElementById('gameIframe');
// const fullscreenBtn = document.getElementById('fullscreenBtn');

// Current filter
let currentCategory = 'all';

// 记录当前选中游戏id
let selectedGameId = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadGames(currentCategory);
    setupEventListeners();
    setupSmoothScrolling();
    renderDefaultMainGame();
    // 主推SkillWarz按钮切换主展示区
    const playSkillWarzBtn = document.getElementById('playSkillWarzBtn');
    if (playSkillWarzBtn) {
        playSkillWarzBtn.addEventListener('click', function() {
            const skillwarzGame = games.find(g => g.name === "SkillWarz");
            if (skillwarzGame) {
                selectedGameId = skillwarzGame.id;
                switchMainGame(skillwarzGame);
            }
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
            <div class="no-games text-center w-100">
                <i class="fas fa-gamepad fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No games found in this category</h4>
                <p class="text-muted">Try selecting a different category or check back later for new games.</p>
            </div>
        `;
        return;
    }
    gamesToShow.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

// 渲染主展示区：介绍卡片
function renderMainGameIntro(game) {
    let html = `<div class='main-game-card d-flex flex-row align-items-center justify-content-between mx-auto bg-dark text-light p-4 rounded-4 shadow-lg mb-4' style='max-width:1100px;min-height:340px;'>`;
    html += `<div class='main-game-content flex-grow-1 pe-4'>`;
    html += `<h1 class='main-game-title mb-4'>${game.name}</h1>`;
    html += `<div class='mb-3'><button class='btn btn-featured-play btn-lg px-5 py-3 fw-bold' id='mainPlayBtn'><i class='fas fa-play me-2'></i>PLAY GAME</button></div>`;
    html += `</div>`;
    html += `<div class='main-game-img-wrap text-center'>`;
    html += `<img src='${game.thumbnail}' alt='${game.name}' class='main-game-img rounded-circle shadow' style='width:220px;height:220px;object-fit:cover;border:8px solid #28a745;'>`;
    html += `</div></div>`;
    document.getElementById('main-game-content').innerHTML = html;
    document.getElementById('mainPlayBtn').onclick = function() {
        renderMainGameIframe(game);
    };
}
// 渲染主展示区：iframe游玩区
function renderMainGameIframe(game) {
    let html = `<div class='main-game-iframe-area bg-dark text-light p-4 rounded-4 shadow-lg mb-4' style='max-width:1100px;margin:0 auto;'>`;
    html += `<div class='d-flex justify-content-between align-items-center mb-3'>`;
    html += `<h2 class='mb-0'>${game.name}</h2>`;
    html += `<button class='btn btn-outline-light' id='backToIntroBtn'><i class='fas fa-arrow-left me-2'></i>Back</button>`;
    html += `</div>`;
    html += `<div class='main-game-iframe-container'><iframe src='${game.iframeUrl}' frameborder='0' allowfullscreen style='width:100%;height:480px;border-radius:1rem;'></iframe></div>`;
    html += `</div>`;
    document.getElementById('main-game-content').innerHTML = html;
    // 绑定返回按钮事件
    document.getElementById('backToIntroBtn').onclick = function() {
        renderMainGameIntro(game);
    };
}
// 切换主展示区和介绍区（始终先显示介绍卡片）
function switchMainGame(game) {
    renderMainGameIntro(game);
    renderMainGameInfoArea(game);
    // 平滑滚动到主卡片区域顶部
    const mainGameArea = document.getElementById('main-game-area');
    if (mainGameArea) {
        mainGameArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
// 页面加载时默认显示第一个游戏介绍卡片
function renderDefaultMainGame() {
    if (games.length > 0) {
        selectedGameId = games[0].id;
        switchMainGame(games[0]);
    } else {
        document.getElementById('main-game-content').innerHTML = '<div class="text-center text-muted">No game selected.</div>';
        document.getElementById('main-game-info-content').innerHTML = '';
    }
}

// 渲染主介绍区（只在底部显示）
function renderMainGameInfoArea(game) {
    let html = `<div class='main-game-info-area bg-dark text-light p-4 rounded-4 shadow-lg mb-4' style='max-width:1100px;margin:0 auto;'>`;
    html += `<h3 class='mb-3' style='color:#28a745;font-weight:700;'>About ${game.name}</h3>`;
    if (game.description) html += `<p class='mb-2'>${game.description}</p>`;
    if (game.features && game.features.length) {
        html += `<div class='mb-2'><strong>Features:</strong><ul class='mb-1'>`;
        game.features.forEach(f => { html += `<li>${f}</li>`; });
        html += `</ul></div>`;
    }
    if (game.howToPlay) html += `<p class='mb-2'><strong>How to Play:</strong> ${game.howToPlay}</p>`;
    html += `</div>`;
    document.getElementById('main-game-info-content').innerHTML = html;
}

// 修改createGameCard，直接返回.game-card元素
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
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
    `;
    card.addEventListener('click', () => {
        selectedGameId = game.id;
        switchMainGame(game);
    });
    return card;
}

// 页面加载时默认显示第一个游戏
function renderDefaultGameDetail() {
    if (games.length > 0) {
        selectedGameId = games[0].id;
        renderGameDetail(games[0]);
    } else {
        document.getElementById('game-detail-area').innerHTML = '<div class="text-center text-muted">No game selected.</div>';
    }
}

// 渲染游戏详情和iframe到#game-detail-area
function renderGameDetail(game) {
    selectedGameId = game.id;
    let html = `<div class='game-details-area bg-dark text-light p-4 rounded-4 shadow-lg mb-4' style='max-width:900px;margin:0 auto;'>`;
    html += `<div class='row align-items-center mb-4'>`;
    html += `<div class='col-md-4 text-center mb-3 mb-md-0'><img src='${game.thumbnail}' alt='${game.name}' class='img-fluid rounded shadow' style='max-width:100%;border-radius:1.5rem;max-height:220px;'></div>`;
    html += `<div class='col-md-8'>`;
    html += `<h2 class='mb-2'>${game.name}</h2>`;
    html += `<span class='badge bg-success mb-2'>${capitalizeFirst(game.category)}</span>`;
    if (game.description) html += `<p class='mb-2'>${game.description}</p>`;
    if (game.features && game.features.length) {
        html += `<div class='mb-2'><strong>Features:</strong><ul class='mb-1'>`;
        game.features.forEach(f => { html += `<li>${f}</li>`; });
        html += `</ul></div>`;
    }
    if (game.howToPlay) html += `<p class='mb-2'><strong>How to Play:</strong> ${game.howToPlay}</p>`;
    html += `</div></div>`;
    html += `<div class='game-iframe-container mt-3'><iframe src='${game.iframeUrl}' frameborder='0' allowfullscreen style='width:100%;height:480px;border-radius:1rem;'></iframe></div>`;
    html += `</div>`;
    document.getElementById('game-detail-area').innerHTML = html;
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
    // 移除fullscreenBtn、modal相关事件
    // Keyboard shortcuts、Mobile touch等可保留
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
    // if (e.key === 'Escape') {
    //     const modal = bootstrap.Modal.getInstance(gameModal);
    //     if (modal) {
    //         modal.hide();
    //     }
    // }
    
    // F key for fullscreen (when modal is open)
    // if (e.key === 'f' || e.key === 'F') {
    //     if (gameModal.classList.contains('show')) {
    //         toggleFullscreen();
    //     }
    // }
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
    // gameModal.addEventListener('shown.bs.modal', function() {
    //     const gameId = this.querySelector('#gameIframe').dataset.gameId;
    //     const gameName = this.querySelector('#gameModalTitle').textContent;
    //     trackGamePlay(gameId, gameName);
    // });
}

// Initialize tracking
addGameTracking(); 