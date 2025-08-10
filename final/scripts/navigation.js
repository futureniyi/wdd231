// Navigation toggle
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

// Footer Year and Last Modified
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Set site name dynamically
const siteName = 'RHS 2007 Alumni';


// Event Listener Hamburger Button

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Update the title
const titleElement = document.getElementById('site-title');
if (titleElement) {
    titleElement.textContent = siteName;
}

// Update the footer
const siteOwnerElement = document.getElementById('site-owner');
if (siteOwnerElement) {
    siteOwnerElement.textContent = siteName;
}

// Update the current year

if (currentyear) {
    currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
}

// Update the last modified date
if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`
}