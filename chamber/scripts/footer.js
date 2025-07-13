// Footer Year and Last Modified
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
if (currentyear) {
    currentyear.innerHTML = `<span class="highlight">${new Date().getFullYear()}</span>`;
}
if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`
}
