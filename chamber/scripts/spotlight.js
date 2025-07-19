const url = 'data/members.json';
const spotlightContainer = document.querySelector('.spotlight-cards');

async function getMemberData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch member data");
        const data = await response.json();
        displaySpotlights(data.members);
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {
    // 1. Filter to only Silver and Gold members
    const spotlightMembers = members.filter(member =>
        member.membershipLevel === 2 || member.membershipLevel === 3
    );

    // 2. Shuffle the filtered list
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

    // 3. Take exactly 3 members
    const selected = shuffled.slice(0, 3);

    // 4. Create and display spotlight cards

    selected.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

        // Container for logo and text side by side
        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('spotlight-content');

        // Logo
        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.classList.add('spotlight-logo');

        // Text info container
        const textContent = document.createElement('div');
        textContent.classList.add('spotlight-info');

        const name = document.createElement('h3');
        name.classList.add('company-name');
        name.textContent = member.name;

        const level = document.createElement('p');
        level.classList.add('company-level');
        level.innerHTML = `<strong>Membership:</strong> ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}`;

        const phone = document.createElement('p');
        phone.classList.add('phone');
        phone.innerHTML = `<strong>Phone:</strong> ${member.phoneNumber}`;

        const address = document.createElement('p');
        address.classList.add('company-address');
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;

        const website = document.createElement('p');
        website.classList.add('company-url');
        website.innerHTML = `<strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a>`;

        const founder = document.createElement('p');
        founder.classList.add('company-founder');
        founder.innerHTML = `<strong>Founder:</strong> ${member.founderName}`;

        // Assemble content
        // Logo + Name row
        const topRow = document.createElement('div');
        topRow.classList.add('spotlight-top');

        topRow.appendChild(logo);
        topRow.appendChild(name);

        // Detail block
        textContent.append(level, phone, address, website, founder);

        // Assemble the full card
        contentWrapper.append(topRow, textContent);
        card.appendChild(contentWrapper);
        spotlightContainer.appendChild(card);
    });
      

}

getMemberData();
