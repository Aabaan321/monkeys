// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    const loadingScreen = new LoadingScreen();
    const customCursor = new CustomCursor();
    const notificationSystem = new NotificationSystem();
    const memeGenerator = new MemeGenerator();
    const socialFeed = new SocialFeed();
    const gameManager = new GameManager();
    const floatingElements = new FloatingElements();

    // Loading Screen Manager
    function LoadingScreen() {
        const loadingFacts = [
            "Loading Anika's banana collection... 🍌",
            "Analyzing dramatic baboon behavior... 🎭",
            "Calculating drama levels... 📊",
            "Scanning for baboon tendencies... 🔍",
            "Processing banana addiction data... 🐒"
        ];

        const loadingScreen = document.querySelector('.loading-screen');
        const factsElement = document.querySelector('.loading-facts span');
        let factIndex = 0;

        // Change loading facts every second
        const factInterval = setInterval(() => {
            factsElement.textContent = loadingFacts[factIndex];
            factIndex = (factIndex + 1) % loadingFacts.length;
        }, 1000);

        // Remove loading screen after animation
        setTimeout(() => {
            clearInterval(factInterval);
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 3000);
    }

    // Custom Banana Cursor
    function CustomCursor() {
        const cursor = document.querySelector('.banana-cursor');
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px';
            cursor.style.top = e.pageY + 'px';
        });
    }

    // Notification System
    function NotificationSystem() {
        const notifications = [
            "🚨 Breaking: Anika spotted doing perfect baboon impression!",
            "🍌 Alert: Banana supply running low in cafeteria",
            "😱 Live Updates: Anika's drama level reaching new heights!",
            "🎭 Exclusive: Secret baboon dance moves spotted in hallway",
            "👑 Update: Anika crowned queen of dramatic reactions"
        ];

        const container = document.getElementById('notification-center');

        function showNotification() {
            const notification = document.createElement('div');
            notification.className = 'notification animate__animated animate__slideInRight';
            notification.textContent = notifications[Math.floor(Math.random() * notifications.length)];
            container.appendChild(notification);

            setTimeout(() => {
                notification.classList.add('animate__slideOutRight');
                setTimeout(() => notification.remove(), 500);
            }, 4000);
        }

        // Show random notifications
        setInterval(showNotification, 5000);
    }

    // Meme Generator
    function MemeGenerator() {
        const canvas = document.getElementById('memeCanvas');
        const ctx = canvas.getContext('2d');
        const generateBtn = document.getElementById('generateMeme');
        const downloadBtn = document.getElementById('downloadMeme');
        const topTextInput = document.getElementById('topText');
        const bottomTextInput = document.getElementById('bottomText');

        canvas.width = 500;
        canvas.height = 500;

        const memeTemplates = [
            'anika-baboon1.jpg',
            'anika-baboon2.jpg',
            'dramatic-anika.jpg'
        ];

        function generateMeme() {
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 3;
                ctx.font = '40px Impact';
                ctx.textAlign = 'center';

                // Add top text
                ctx.fillText(topTextInput.value, canvas.width/2, 50);
                ctx.strokeText(topTextInput.value, canvas.width/2, 50);

                // Add bottom text
                ctx.fillText(bottomTextInput.value, canvas.width/2, canvas.height - 20);
                ctx.strokeText(bottomTextInput.value, canvas.width/2, canvas.height - 20);
            };
            img.src = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
        }

        generateBtn.addEventListener('click', generateMeme);
        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.download = 'anika-meme.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    // Social Feed
    function SocialFeed() {
        const socialPosts = [
            {
                username: "AnikaBaboonQueen",
                content: "Just did my morning grooming routine 💁‍♀️ #BaboonLife",
                likes: 1234,
                comments: ["Totally saw you picking bugs off Sarah in math class 😂"]
            },
            {
                username: "BaboonGirl2024",
                content: "When someone takes your banana 🍌 Time for revenge! 😈",
                likes: 2345,
                comments: ["Queen of the troop! 👑"]
            }
        ];

        const container = document.getElementById('socialPosts');

        socialPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'social-post animate__animated animate__fadeIn';
            postElement.innerHTML = `
                <div class="post-header">
                    <img src="profile-pic.jpg" alt="Profile" class="profile-pic">
                    <span class="post-username">@${post.username}</span>
                </div>
                <div class="post-content">${post.content}</div>
                <div class="post-actions">
                    <span>❤️ ${post.likes} likes</span>
                    <span>💭 ${post.comments.length} comments</span>
                </div>
                <div class="post-comments">
                    ${post.comments.map(comment => `<div class="comment">${comment}</div>`).join('')}
                </div>
            `;
            container.appendChild(postElement);
        });
    }

    // Game Manager
    function GameManager() {
        const bananaGame = {
            canvas: document.getElementById('gameCanvas'),
            ctx: null,
            player: { x: 50, y: 50, speed: 5 },
            bananas: [],
            score: 0,

            init() {
                this.canvas.width = 400;
                this.canvas.height = 400;
                this.ctx = this.canvas.getContext('2d');
                this.setupControls();
                this.startGame();
            },

            setupControls() {
                document.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case 'ArrowLeft': this.player.x -= this.player.speed; break;
                        case 'ArrowRight': this.player.x += this.player.speed; break;
                        case 'ArrowUp': this.player.y -= this.player.speed; break;
                        case 'ArrowDown': this.player.y += this.player.speed; break;
                    }
                });
            },

            startGame() {
                setInterval(() => {
                    this.update();
                    this.draw();
                }, 1000/60);
            },

            update() {
                // Game logic
            },

            draw() {
                // Drawing logic
            }
        };

        bananaGame.init();
    }

    // Floating Elements
    function FloatingElements() {
        const emojis = ['🍌', '🐒', '😂', '🙈', '👑'];
        const container = document.getElementById('floating-emojis');

        function createFloatingEmoji() {
            const emoji = document.createElement('div');
            emoji.className = 'floating-emoji';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * window.innerWidth + 'px';
            container.appendChild(emoji);
            setTimeout(() => emoji.remove(), 5000);
        }

        setInterval(createFloatingEmoji, 1000);
    }

    // Easter Eggs
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if(e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if(konamiIndex === konamiCode.length) {
                activateRainbowMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateRainbowMode() {
        document.body.style.animation = 'rainbow 1s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});
