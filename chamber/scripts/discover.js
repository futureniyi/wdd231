const url = 'data/places.json';
const cards = document.querySelector('#places');

async function getPlaceData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    displayPlaces(data); 
}

getPlaceData();

const displayPlaces = (places) => {
    places.forEach((place) => {
        // Create card container
        const card = document.createElement('section');
        card.classList.add('place-card');

        // Place name
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

        // Figure element with image
        const figure = document.createElement('figure');

        const placeImage = document.createElement('img');
        placeImage.setAttribute('src', place.photo_url);
        placeImage.setAttribute('alt', `Photo of ${place.name}`);
        placeImage.setAttribute('loading', 'lazy');
        placeImage.setAttribute('width', '300');
        placeImage.setAttribute('height', '200');
        placeImage.classList.add('place-image');

        figure.appendChild(placeImage);

        // Learn More button
        const button = document.createElement('button');
        button.classList.add('learn-more-btn');
        button.textContent = "Learn More";

        // Assemble card
        card.appendChild(title);
        card.appendChild(placeImage);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        // Add card to container
        cards.appendChild(card);
    });
};

// const PlaceCost = document.createElement('p');
// caption.classList.add('place-cost');
// caption.textContent = place.cost;

const messageElement = document.getElementById('visit-message');
const now = Date.now();
const msToDays = 1000 * 60 * 60 * 24; // milliseconds in a day

// Get the last visit timestamp from localStorage
const lastVisit = localStorage.getItem('lastVisit');
let message = '';

if (!lastVisit) {
    // First visit
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

// Display the message
messageElement.textContent = message;

// Update localStorage with the current visit timestamp
localStorage.setItem('lastVisit', now);
