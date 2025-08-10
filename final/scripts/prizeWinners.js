// prizeWinners.js

export function renderPrizeWinners(winners, container) {
    container.innerHTML = '';  // Clear existing content

    winners.forEach(winner => {
        const card = document.createElement('div');
        card.classList.add('winner-card');

        const img = document.createElement('img');
        img.src = winner.image;
        img.alt = `Photo of ${winner.name}`;
        img.classList.add('winner-photo');

        const nameEl = document.createElement('h3');
        nameEl.textContent = winner.name;
        nameEl.classList.add('winner-name');

        const awardEl = document.createElement('p');
        awardEl.innerHTML = `<strong>Award:</strong> ${winner.award}`;
        awardEl.classList.add('winner-award');

        const yearEl = document.createElement('p');
        yearEl.innerHTML = `<strong>Edition:</strong> ${winner.year}`;
        yearEl.classList.add('award-year');

        const prizeDetailsTitle = document.createElement('p');
        prizeDetailsTitle.innerHTML = `<strong>Prize Details:</strong>`;
        prizeDetailsTitle.classList.add('prize-details-title');

        const prizeDetailsList = document.createElement('ul');
        prizeDetailsList.classList.add('prize-details-list');
        if (Array.isArray(winner.prizeDetails)) {
            winner.prizeDetails.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                prizeDetailsList.appendChild(li);
            });
        } else if (typeof winner.prizeDetails === 'string') {
            const li = document.createElement('li');
            li.textContent = winner.prizeDetails;
            prizeDetailsList.appendChild(li);
        }

        const nominationEl = document.createElement('p');
        nominationEl.innerHTML = `<strong>Nomination Process:</strong> ${winner.nominationProcess}`;
        nominationEl.classList.add('winner-nomination');

        card.appendChild(img);
        card.appendChild(nameEl);
        card.appendChild(yearEl);
        card.appendChild(awardEl);
        card.appendChild(prizeDetailsTitle);
        card.appendChild(prizeDetailsList);
        card.appendChild(nominationEl);

        container.appendChild(card);
    });
}
