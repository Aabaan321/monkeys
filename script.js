// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Community cards data
    const communityData = [
        { title: 'The Drama Queens', description: 'Your specialty! 👑' },
        { title: 'The Loud Ones', description: 'Definitely you! 📢' },
        { title: 'The Snack Stealers', description: 'Reminds me of you at lunch 🍪' },
        { title: 'The Show-offs', description: 'Like you in PE! 💃' },
        { title: 'The Troublemakers', description: 'No comment... 😏' }
    ];

    // Create community cards
    const communityCards = document.getElementById('communityCards');
    communityData.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.description}</p>
        `;
        communityCards.appendChild(card);
    });

    // Image transform button
    const transformButton = document.getElementById('transformButton');
    const baboonImage = document.getElementById('baboonImage');
    let isTransformed = false;

    transformButton.addEventListener('click', () => {
        isTransformed = !isTransformed;
        if (isTransformed) {
            baboonImage.style.transform = 'rotate(360deg) scale(1.2)';
            transformButton.textContent = 'Change Back!';
        } else {
            baboonImage.style.transform = 'none';
            transformButton.textContent = 'Click to See Anika Transform!';
        }
    });

    // Random facts popup
    const facts = [
        "Anika spotted stealing snacks again! 🍪",
        "Breaking news: Anika started drama in the troop! 🎭",
        "Alert: Anika's loud laugh heard across the savanna! 😂",
        "Update: Anika crowned queen of sass! 👑"
    ];

    function showRandomFact() {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        popup.style.right = '-300px';
        popup.textContent = facts[Math.floor(Math.random() * facts.length)];
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 3000);
    }

    // Show random facts every 5 seconds
    setInterval(showRandomFact, 5000);
});
