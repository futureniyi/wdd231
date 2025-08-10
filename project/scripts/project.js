// Footer Year and Last Modified
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
if (currentyear) {
    currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
}
if (lastModified) {
    lastModified.textContent = "Last Modification: " + document.lastModified;
}

// Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
if (mainnav && hambutton) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}

// Populating Team Members
const teamMembers = [
    {
        name: "Dr. Ngozi Okafor",
        role: "Lead Relationship Psychologist",
        email: "ngozi@relationshipbattery.com",
        imageUrl: "images/ngozi-okafor.jpg",
        alt: "Dr. Ngozi Okafor, smiling at desk"
    },
    {
        name: "David Oluwole",
        role: "Coaching Program Director",
        email: "david@relationshipbattery.com",
        imageUrl: "images/david-oluwole.jpg",
        alt: "David Oluwole leading a seminar"
    },
    {
        name: "Amaka Udeh",
        role: "Client Success Manager",
        email: "amaka@relationshipbattery.com",
        imageUrl: "images/amaka-udeh.jpg",
        alt: "Amaka Udeh assisting a client"
    },
    {
        name: "Chika Ibe",
        role: "Support Specialist",
        email: "chika@relationshipbattery.com",
        imageUrl: "images/chika-ibe.jpg",
        alt: "Chika Ibe at support desk"
    },
    {
        name: "Elizabeth Humphrey", // <-- fixed spelling
        role: "Family Counseling Lead",
        email: "elizabeth@relationshipbattery.com",
        imageUrl: "images/elizabeth-humphrey.jpg",
        alt: "Elizabeth leading a family session"
    },
    {
        name: "Seyi Makinde",
        role: "Technical Support",
        email: "seyi@relationshipbattery.com",
        imageUrl: "images/seyi-makinde.jpg",
        alt: "Seyi Makinde working on laptop"
    }
];

const teamDiv = document.querySelector('.team');
function displayTeam(membersArray) {
    if (!teamDiv) return;
    teamDiv.innerHTML = '';
    membersArray.forEach(member => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = member.imageUrl;
        img.alt = member.alt;
        img.loading = "lazy";
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
      <p><strong>${member.name}</strong> – ${member.role}</p>
      <p><a href="mailto:${member.email}">${member.email}</a></p>
    `;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        teamDiv.appendChild(figure);
    });
}
displayTeam(teamMembers);
