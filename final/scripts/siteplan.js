// use the date object
const today = new Date();

// Get the span and p elements
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Put the current year in the span
// currentyear.textContent = new Date().getFullYear();


// Use innerHTML to wrap the year in a styled span
currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;


// Show when the page was last updated
lastModified.textContent = "Last Modification: " + document.lastModified;