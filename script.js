// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.banana-cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Dramatic entry
    setTimeout(() => {
        const dramaticEntry = document.getElementById('dramaticEntry');
        dramaticEntry.style.display = 'block';
        setTimeout(() => {
            dramaticEntry.style.display = 'none';
        }, 3000);
    }, 1000);

    // Evidence cards data
    const evidenceData = [
        {
            title: "Exhibit A: The Banana Incident",
            description: "Caught on camera: Anika fighting over the last banana in the cafeteria! 🍌",
        },
        {
            title: "Exhibit B: The Morning Ritual",
            description: "Just like a baboon, Anika spends 2 hours grooming her hair every morning! 💁‍♀️",
        },
        {
            title: "Exhibit C: The Dramatic Screech",
            description: "That time Anika screamed because someone took her seat... Classic baboon behavior! 🙈",
        },
        // Add more evidence cards
    ];

    // Timeline data
    const timelineData = [
        {
            time: "7:00 AM",
            event: "Wakes up and immediately starts making baboon noises 🗣️",
        },
        {
            time: "8:00 AM",
            event: "Steals everyone's breakfast like a true baboon 🍳",
        },
        {
            time: "10:00 AM",
            event: "Creates drama in class (baboon territory marking) 🎭",
        },
        // Add more timeline events
    ];

    // Social media posts
    const socialPosts = [
        {
            username: "AnikaBaboon123",
            content: "Just hanging from the chandelier again! Teacher's not impressed 🙈 #BaboonLife",
            likes: "1M likes",
        },
        {
            username: "BaboonQueen",
            content: "When someone takes your banana 🍌 Time for revenge! 😈",
            likes: "2M likes",
        },
        // Add more social posts
    ];

    // Random funny popups
    const funnyPopups = [
        "Breaking: Anika seen practicing baboon calls in the bathroom! 🚽",
        "Alert: School considering adding trees for Anika to climb! 🌳",
        "Exclusive: Anika's secret banana stash discovered in locker! 🍌",
        // Add more popups
    ];

    function showRandomPopup() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = funnyPopups[Math.floor(Math.random() * funnyPopups.length)];
        document.getElementById('popupContainer').appendChild(popup);
        setTimeout(() => popup.remove(), 3000);
    }

    // Create floating bananas
    function createBanana() {
        const banana = document.createElement('div');
        banana.className = 'banana';
        banana.innerHTML = '🍌';
        banana.style.left = Math.random() * window.innerWidth + 'px';
        document.getElementById('bananas').appendChild(banana);
        setTimeout(() => banana.remove(), 10000);
    }

    // Initialize all components
    setInterval(showRandomPopup, 5000);
    setInterval(createBanana, 2000);

    // Add more interactive features and animations here
});

// Add functions for meme generator, photo comparison, and more interactive features
