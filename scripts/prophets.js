const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create a section element for the card
        const card = document.createElement('section');

        // Create an h2 element for the full name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create a p element 
        const birthDate = document.createElement('p');
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;

        // Create a p element 
        const birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        

        // Create an img element for the portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the fullName and portrait to the card
        card.appendChild(fullName);
        card.appendChild(birthDate)
        card.appendChild(birthPlace)
        card.appendChild(portrait);

        // Append the card to the cards container
        cards.appendChild(card);
    });
};