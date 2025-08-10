// donors.js

export let donors = [];

const donorsList = document.getElementById('donors-list');
const filterButtons = document.querySelectorAll('.donor-year-filter-btn');

export function renderDonors(filteredDonors) {
    donorsList.innerHTML = '';

    if (filteredDonors.length === 0) {
        donorsList.innerHTML = '<li>No donors found for this selection.</li>';
        return;
    }

    // Sort descending by amount
    filteredDonors.sort((a, b) => b.amount - a.amount);

    filteredDonors.forEach(donor => {
        const li = document.createElement('li');
        const year = new Date(donor.date).getFullYear();
        li.textContent = `${donor.codeName} — ₦${donor.amount.toLocaleString()} (${year})`;
        donorsList.appendChild(li);
    });
}

export function filterByYear(year) {
    if (year === 'all') {
        renderDonors(donors);
    } else {
        const filtered = donors.filter(d => new Date(d.date).getFullYear() === Number(year));
        renderDonors(filtered);
    }
}

export function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const year = button.getAttribute('data-year');
            filterByYear(year);

            // Manage active button styling
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

export async function loadDonors(url = 'data/donors.json') {
    try {
        const response = await fetch(url);
        donors = await response.json();
        renderDonors(donors);
    } catch (error) {
        console.error('Failed to load donors data:', error);
        if (donorsList) donorsList.innerHTML = '<li>Failed to load donor data.</li>';
    }
}
