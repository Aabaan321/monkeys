// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Evidence Data
    const evidenceData = [
        {
            title: "The Great Banana Incident",
            description: "On a typical Tuesday morning, Anika was observed hoarding bananas in her locker. When questioned, she responded with distinct baboon-like screeches and protective posturing over her fruit collection.",
            date: "September 15, 2023"
        },
        {
            title: "The Dramatic Performance",
            description: "During drama class, Anika's portrayal of 'human teenager' was surprisingly unconvincing, with multiple instances of accidental baboon mannerisms slipping through.",
            date: "October 3, 2023"
        },
        {
            title: "The Grooming Session",
            description: "Witnessed spending two hours meticulously grooming her hair during lunch break, occasionally attempting to pick invisible bugs off nearby students.",
            date: "October 10, 2023"
        }
    ];

    // Daily Chronicles
    const dailyChronicles = [
        {
            time: "7:00 AM",
            entry: "Early morning sighting: Anika swinging from the bedroom curtains, making distinctive baboon wake-up calls."
        },
        {
            time: "12:00 PM",
            entry: "Lunch hour observation: Subject demonstrates advanced banana-peeling techniques and territorial behavior around the cafeteria table."
        },
        {
            time: "3:00 PM",
            entry: "After-school activity: Organized a troop... er, study group, with clear hierarchical baboon social structures."
        }
    ];

    // Testimonials
    const testimonials = [
        {
            witness: "Best Friend",
            quote: "I always wondered why she had such an extensive banana collection. Now it all makes sense!"
        },
        {
            witness: "Math Teacher",
            quote: "Her solutions are quite unique... often involving banana-based calculations."
        },
        {
            witness: "Gym Coach",
            quote: "Never seen anyone climb the rope quite like that... or refuse to come down for 45 minutes."
        }
    ];

    // Remove loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 2000);

    // Render Evidence
    const evidenceList = document.getElementById('evidenceList');
    evidenceData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'evidence-item';
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <small>Documented on: ${item.date}</small>
        `;
        evidenceList.appendChild(div);
    });

    // Render Chronicles
    const chroniclesSection = document.getElementById('dailyChronicles');
    dailyChronicles.forEach(chronicle => {
        const div = document.createElement('div');
        div.className = 'chronicle-entry';
        div.innerHTML = `
            <h3>${chronicle.time}</h3>
            <p>${chronicle.entry}</p>
        `;
        chroniclesSection.appendChild(div);
    });

    // Render Testimonials
    const testimonialsSection = document.getElementById('testimonialsList');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `
            <p>${testimonial.quote}</p>
            <small>- ${testimonial.witness}</small>
        `;
        testimonialsSection.appendChild(div);
    });

    // Random Notifications
    const notifications = [
        "Breaking: Anika spotted doing perfect baboon impression in biology class!",
        "Alert: Banana supply mysteriously depleted in cafeteria",
        "Update: Anika's essay on 'My Normal Human Life' raises suspicions",
        "News: Local zoo baboons claim Anika as long-lost relative"
    ];

    function showNotification() {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = notifications[Math.floor(Math.random() * notifications.length)];
        document.getElementById('notification-center').appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 4000);
    }

    setInterval(showNotification, 5000);
});
