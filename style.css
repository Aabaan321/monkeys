/* style.css */
:root {
    --primary-color: #ff69b4;
    --secondary-color: #4a90e2;
    --background-color: #fce4ec;
    --banana-yellow: #ffd700;
    --text-color: #333;
    --card-bg: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --gradient-1: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    --gradient-2: linear-gradient(135deg, var(--banana-yellow), var(--primary-color));
}

/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--background-color);
    font-family: 'Comic Sans MS', cursive;
    color: var(--text-color);
    cursor: none;
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Loading Screen */
.loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-1);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.loading-text {
    font-size: 2em;
    margin-bottom: 20px;
    animation: bounce 1s infinite;
}

.progress-bar {
    width: 80%;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar::after {
    content: '';
    display: block;
    width: 0%;
    height: 100%;
    background: var(--banana-yellow);
    animation: loading 2s ease-in-out forwards;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--card-bg);
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
    z-index: 100;
    box-shadow: 0 2px 10px var(--shadow-color);
}

.nav-item {
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-item:hover {
    background: var(--gradient-1);
    color: white;
    transform: scale(1.1);
}

/* Header Styles */
.mega-header {
    margin-top: 70px;
    padding: 40px;
    background: var(--gradient-1);
    border-radius: 20px;
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.main-title {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.header-alert {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    animation: blink 1s infinite;
}

/* Flip Card Styles */
.flip-card {
    perspective: 1000px;
    height: 400px;
    margin: 20px 0;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 15px;
    padding: 20px;
    background: var(--card-bg);
    box-shadow: 0 4px 8px var(--shadow-color);
}

.flip-card-back {
    transform: rotateY(180deg);
    background: var(--gradient-2);
    color: white;
}

/* Evidence Gallery */
.evidence-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

.gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px var(--shadow-color);
    transition: transform 0.3s;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

/* Social Feed */
.social-feed {
    max-width: 600px;
    margin: 40px auto;
}

.social-post {
    background: var(--card-bg);
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px var(--shadow-color);
}

.post-header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.post-content {
    margin: 10px 0;
}

.post-image {
    width: 100%;
    border-radius: 10px;
    margin: 10px 0;
}

/* Games Section */
.game-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.game-card {
    background: var(--card-bg);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px var(--shadow-color);
}

/* Meme Generator */
.meme-workspace {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
}

.meme-controls {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

/* Floating Elements */
.floating-emoji {
    position: fixed;
    font-size: 2em;
    pointer-events: none;
    animation: float 5s linear infinite;
}

.banana-cursor {
    width: 30px;
    height: 30px;
    background-image: url('banana.png');
    background-size: contain;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
}

/* Notifications */
.notification-center {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
}

.notification {
    background: var(--card-bg);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px var(--shadow-color);
    animation: slideIn 0.5s ease-out;
}

/* Animations */
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes loading {
    0% { width: 0%; }
    100% { width: 100%; }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes float {
    0% { transform: translateY(100vh) rotate(0deg); }
    100% { transform: translateY(-100px) rotate(360deg); }
}

@keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-wrap: wrap;
    }
    
    .main-title {
        font-size: 1.8em;
    }
    
    .game-container {
        grid-template-columns: 1fr;
    }
    
    .meme-controls {
        flex-direction: column;
    }
}

/* Button Styles */
button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: var(--gradient-1);
    color: white;
    cursor: pointer;
    transition: transform 0.3s;
}

button:hover {
    transform: scale(1.1);
}

/* Input Styles */
input[type="text"] {
    padding: 10px;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    font-family: inherit;
}

/* Additional Effects */
.rainbow-text {
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    color: transparent;
    animation: rainbow 5s linear infinite;
}

@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

/* Easter Egg Elements */
.secret-button {
    opacity: 0;
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.secret-button:hover {
    opacity: 1;
}
