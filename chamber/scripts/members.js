const url = 'data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayMembers(data.members);
}

getMemberData();

// const displayMembers = (members) => {
//     members.forEach((member) => {
//         // Create a section element for the card
//         const card = document.createElement('section');

//         // Create an h2 element for the full name
//         const fullName = document.createElement('p');
//         fullName.textContent = `${member.name}`;

//         // Create a p element 
//         const address = document.createElement('p');
//         address.textContent = `${member.address}`;

//         // Create a p element 
//         const phoneNumber = document.createElement('p');
//         phoneNumber.textContent = `${member.phoneNumber}`;

//         // Create a p element 
//         // const website = document.createElement('p');
//         // website.textContent = `Website: ${member.website}`;
//         const website = document.createElement('p');
//         website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;


//         // Create a p element 
//         const membershipLevel = document.createElement('p');
//         membershipLevel.textContent = `${member.membershipLevel}`;

//         // const levelNames = { 1: 'Member', 2: 'Silver', 3: 'Gold' };
//         // membershipLevel.textContent = `Membership Level: ${levelNames[member.membershipLevel] || 'Unknown'}`;


//         // Create a p element 
//         const founderName = document.createElement('p');
//         founderName.textContent = `Founder: ${member.founderName}`;
        

//         // Create an img element for the portrait
//         const logo = document.createElement('img');
//         logo.setAttribute('src', member.image);
//         logo.setAttribute('alt', `Logo of ${member.name}`);
//         logo.setAttribute('loading', 'lazy');
//         logo.setAttribute('width', '340');
//         logo.setAttribute('height', '440');

//         // Append the fullName and portrait to the card
//         card.appendChild(logo);
//         card.appendChild(fullName);
        
//         card.appendChild(address)
//         card.appendChild(phoneNumber)
//         card.appendChild(website)
//         card.appendChild(membershipLevel)
//         card.appendChild(founderName)
        

//         // Append the card to the cards container
//         cards.appendChild(card);
//     });
// };

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create a section element for the card
        const card = document.createElement('section');

        // Company Name
        const fullName = document.createElement('p');
        fullName.classList.add('company-name');
        fullName.textContent = member.name;

        // Address
        const address = document.createElement('p');
        address.classList.add('address');
        address.textContent = member.address;

        // Phone Number
        const phoneNumber = document.createElement('p');
        phoneNumber.classList.add('phone-number');
        phoneNumber.textContent = member.phoneNumber;

        // Website
        const website = document.createElement('p');
        website.classList.add('website');
        website.innerHTML = `<a href="${member.website}" target="_blank">${member.website}</a>`;

        // Membership Level
        const membershipLevel = document.createElement('p');
        membershipLevel.classList.add('membership-level');
        const levelNames = {
            1: 'Member',
            2: 'Silver',
            3: 'Gold'
        };

        const levelText = levelNames[member.membershipLevel] || 'Unknown';
        membershipLevel.textContent = `Membership Level: ${levelText}`;
        
        // membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        // Founder Name
        const founderName = document.createElement('p');
        founderName.classList.add('founder-name');
        founderName.textContent = `Founder: ${member.founderName}`;

        // Logo Image
        const logo = document.createElement('img');
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        // Append all to card
        card.appendChild(logo);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(membershipLevel);
        card.appendChild(founderName);

        // Append card to cards container
        cards.appendChild(card);
    });
};


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
