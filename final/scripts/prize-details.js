// prizeDetails.js

export function renderPrizeDetails(prizes, container) {
    container.innerHTML = '';

    prizes.forEach(prize => {
        const card = document.createElement('div');
        card.classList.add('prize-card');

        const title = document.createElement('h3');
        title.textContent = prize.prizeName;

        const category = document.createElement('p');
        category.innerHTML = `<strong>Category:</strong> ${prize.categories}`;

        const objective = document.createElement('p');
        objective.innerHTML = `<strong>Objective:</strong> ${prize.objective}`;

        const criteriaTitle = document.createElement('p');
        criteriaTitle.innerHTML = `<strong>Criteria:</strong>`;

        const criteriaList = document.createElement('ul');
        prize.criteria.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            criteriaList.appendChild(li);
        });

        const prizeDetailsTitle = document.createElement('p');
        prizeDetailsTitle.innerHTML = `<strong>Prize Details:</strong>`;

        const prizeDetailsList = document.createElement('ul');
        if (Array.isArray(prize.prizeDetails)) {
            prize.prizeDetails.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                prizeDetailsList.appendChild(li);
            });
        } else if (typeof prize.prizeDetails === 'string') {
            const li = document.createElement('li');
            li.textContent = prize.prizeDetails;
            prizeDetailsList.appendChild(li);
        }

        const nomination = document.createElement('p');
        nomination.innerHTML = `<strong>Nomination Process:</strong> ${prize.nominationProcess}`;

        const inaugurated = document.createElement('p');
        inaugurated.innerHTML = `<strong>Inaugurated:</strong> ${prize.inaugurated}`;

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(objective);
        card.appendChild(criteriaTitle);
        card.appendChild(criteriaList);
        card.appendChild(prizeDetailsTitle);
        card.appendChild(prizeDetailsList);
        card.appendChild(nomination);
        card.appendChild(inaugurated);

        container.appendChild(card);
    });
}
