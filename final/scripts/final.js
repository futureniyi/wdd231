import { fetchJson } from './dataFetcher.js';
import { renderPrizeCategories } from './prizeCategories.js';
import { renderPrizeDetails } from './prizeDetails.js';
import { renderPrizeWinners } from './prizeWinners.js';
import { setupFilterButtons } from './filters.js';

import { loadDonors, setupFilters as setupDonorFilters } from './donors.js';

const prizeCategoriesContainer = document.querySelector('#prize-list');
const prizeDetailsContainer = document.querySelector('#prize-details');
const prizeWinnersContainer = document.querySelector('#prize-winners');
const donorsListContainer = document.getElementById('donors-list');

const prizeDetailsFilterButtons = document.querySelectorAll('.prize-filter-buttons .filter-btn');
const prizeWinnersFilterButtons = document.querySelectorAll('.winner-filter-buttons .filter-btn');
const donorFilterButtons = document.querySelectorAll('.donor-year-filter-btn');

async function mainInit() {
    try {
        if (prizeCategoriesContainer) {
            const prizeCategories = await fetchJson('data/prizeCategories.json');
            renderPrizeCategories(prizeCategories, prizeCategoriesContainer);
        }

        if (prizeDetailsContainer) {
            const prizeDetails = await fetchJson('data/prizeDetails.json');
            renderPrizeDetails(prizeDetails, prizeDetailsContainer);
            setupFilterButtons(prizeDetailsFilterButtons, prizeDetails, renderPrizeDetails, prizeDetailsContainer);
        }

        if (prizeWinnersContainer) {
            const prizeWinners = await fetchJson('data/prizeWinners.json');
            renderPrizeWinners(prizeWinners, prizeWinnersContainer);
            setupFilterButtons(prizeWinnersFilterButtons, prizeWinners, renderPrizeWinners, prizeWinnersContainer);
        }

        if (donorsListContainer) {
            await loadDonors();
            setupDonorFilters();
        }
    } catch (error) {
        console.error('Error initializing the app:', error);
    }
}

mainInit();
