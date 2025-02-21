// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    const gameManager = new GameManager();
    const memeGenerator = new MemeGenerator();
    const notificationSystem = new NotificationSystem();
    const socialFeed = new SocialFeed();
    const customCursor = new CustomCursor();

    // Loading Screen Handler
    class LoadingScreen {
        constructor() {
            this.loadingScreen = document.querySelector('.loading-screen');
            this.init();
        }

        init() {
            setTimeout(() => {
                this.loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    this.loadingScreen.style.display = 'none';
                }, 500);
            }, 2500);
        }
    }

    // Custom Cursor
    class CustomCursor {
        constructor() {
            this.cursor = document.querySelector('.banana-cursor');
            this.init();
        }

        init() {
            document.addEventListener('mousemove', (e) => {
                this.cursor.style.left = e.clientX + 'px';
                this.cursor.style.top = e.clientY + 'px';
            });
        }
    }

    // Notification System
    class NotificationSystem {
        constructor() {
            this.container = document.getElementById('notification-center');
            this.notifications = [
                "🚨 Breaking: Anika caught doing perfect baboon impression!",
                "🍌 Alert: Banana supply running low in cafeteria",
                "😱 Live Updates: Anika's drama level reaching new heights!",
                "🎭 Exclusive: Secret baboon dance moves spotted in hallway",
                "👑 Update: Anika crowned queen of dramatic reactions"
            ];
            this.init();
        }

        init() {
            setInterval(() => this.showNotification(), 5000);
        }

        showNotification() {
            const notification = document.createElement('div');
            notification.className = 'notification animate__animated animate__slideInRight';
            notification.textContent = this.notifications[Math.floor(Math.random() * this.notifications.length)];
            this.container.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('animate__slideOutRight');
                setTimeout(() => notification.remove(), 500);
            }, 4000);
        }
    }

    // Game Manager
    class GameManager {
        constructor() {
            this.games = {
                bananaCollector: new BananaCollectorGame(),
                findAnika: new FindAnikaGame()
            };
            this.init();
        }

        init() {
            Object.values(this.games).forEach(game => game.init());
        }
    }

    // Banana Collector Game
    class BananaCollectorGame {
        constructor() {
            this.canvas = document.getElementById('gameCanvas');
            this.ctx = this.canvas.getContext('2d');
            this.score = 0;
            this.bananas = [];
            this.playerPos = { x: 100, y: 100 };
        }

        init() {
            this.canvas.width = 400;
            this.canvas.height = 400;
            this.setupControls();
            this.startGameLoop();
        }

        setupControls() {
            window.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case 'ArrowLeft': this.playerPos.x -= 10; break;
                    case 'ArrowRight': this.playerPos.x += 10; break;
                    case 'ArrowUp': this.playerPos.y -= 10; break;
                    case 'ArrowDown': this.playerPos.y += 10; break;
                }
            });
        }

        startGameLoop() {
            setInterval(() => {
                this.update();
                this.draw();
            }, 1000/60);
        }

        update() {
            // Game logic
        }

        draw() {
            // Drawing logic
        }
    }

    // Find Anika Game
    class FindAnikaGame {
        constructor() {
            this.grid = document.querySelector('.game-grid');
            this.size = 9;
            this.anikaPosition = null;
        }

        init() {
            this.createGrid();
        }

        createGrid() {
            this.grid.innerHTML = '';
            this.anikaPosition = Math.floor(Math.random() * this.size);

            for(let i = 0; i < this.size; i++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.addEventListener('click', () => this.checkCell(i));
                this.grid.appendChild(cell);
            }
        }

        checkCell(index) {
            if(index === this.anikaPosition) {
                alert('Found Anika! 🐒');
                this.createGrid();
            }
        }
    }

    // Meme Generator
    class MemeGenerator {
        constructor() {
            this.canvas = document.getElementById('memeCanvas');
            this.ctx = this.canvas.getContext('2d');
            this.init();
        }

        init() {
            this.canvas.width = 500;
            this.canvas.height = 500;
            this.setupControls();
        }

        setupControls() {
            const generateBtn = document.getElementById('generateMeme');
            const downloadBtn = document.getElementById('downloadMeme');
            const topText = document.getElementById('topText');
            const bottomText = document.getElementById('bottomText');

            generateBtn.addEventListener('click', () => {
                this.generateMeme(topText.value, bottomText.value);
            });

            downloadBtn.addEventListener('click', () => {
                this.downloadMeme();
            });
        }

        generateMeme(topText, bottomText) {
            // Meme generation logic
        }

        downloadMeme() {
            const link = document.createElement('a');
            link.download = 'anika-meme.png';
            link.href = this.canvas.toDataURL();
            link.click();
        }
    }

    // Social Feed
    class SocialFeed {
        constructor() {
            this.container = document.getElementById('socialPosts');
            this.posts = [
                {
                    username: "AnikaBaboonQueen",
                    content: "Just did my morning grooming routine 💁‍♀️ #BaboonLife",
                    image: "grooming.jpg",
                    likes: 1234,
                    comments: ["Totally baboon behavior! 😂", "Queen of the troop! 👑"]
                },
                // Add more posts
            ];
            this.init();
        }

        init() {
            this.renderPosts();
            this.setupInteractions();
        }

        renderPosts() {
            this.posts.forEach(post => {
                const postElement = this.createPostElement(post);
                this.container.appendChild(postElement);
            });
        }

        createPostElement(post) {
            const div = document.createElement('div');
            div.className = 'social-post';
            // Add post content
            return div;
        }

        setupInteractions() {
            // Like, comment, share functionality
        }
    }

    // Easter Eggs
    class EasterEggs {
        constructor() {
            this.konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
            this.konamiIndex = 0;
            this
