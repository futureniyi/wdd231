const url = 'data/places.json';
const cards = document.querySelector('#places');

// Fetch and display places
async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data);
}

getPlaceData();

const displayPlaces = (places) => {
    const modal = document.getElementById('modal-cost');
    const modalCostText = document.getElementById('modal-cost-text');
    const modalClose = modal.querySelector('.close-btn');

    // Close modal when X is clicked
    modalClose.addEventListener('click', () => modal.close());

    // Close modal when clicking outside the dialog
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });

    places.forEach((place) => {
        const card = document.createElement('section');
        card.classList.add('place-card');

        // Title
        const title = document.createElement('h2');
        title.classList.add('place-name');
        title.textContent = place.name;

        // Address
        const address = document.createElement('address');
        address.classList.add('place-address');
        address.textContent = place.address;

        // Description
        const description = document.createElement('p');
        description.classList.add('place-description');
        description.textContent = place.description;

        // Image
        const figure = document.createElement('figure');
        const placeImage = document.createElement('img');
        placeImage.src = place.photo_url;
        placeImage.alt = `Photo of ${place.name}`;
        placeImage.loading = 'lazy';
        placeImage.classList.add('place-image');
        figure.appendChild(placeImage);

        // Learn More button
        const button = document.createElement('button');
        button.classList.add('learn-more-btn');
        button.textContent = "Learn More";

        // Show modal with cost
        button.addEventListener('click', () => {
            modalCostText.textContent = place.cost;
            modal.showModal();
        });

        // Assemble card
        card.appendChild(title);
        card.appendChild(placeImage);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);
        cards.appendChild(card);
    });
};

// Visitor message using localStorage
const messageElement = document.getElementById('visit-message');
const now = Date.now();
const msToDays = 1000 * 60 * 60 * 24;
const lastVisit = localStorage.getItem('lastVisit');
let message = '';

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const daysSince = Math.floor((now - Number(lastVisit)) / msToDays);
    if (daysSince < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysSince === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysSince} days ago.`;
    }
}

messageElement.textContent = message;
localStorage.setItem('lastVisit', now);
