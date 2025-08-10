// prizeCategories.js

export function renderPrizeCategories(categories, container) {
    container.innerHTML = ''; // Clear previous content

    categories.forEach(category => {
        const card = document.createElement('div');
        card.classList.add('prize-card');

        const title = document.createElement('h3');
        title.textContent = category.prizeName;

        const objective = document.createElement('p');
        objective.innerHTML = `<strong>Objective:</strong> ${category.objective}`;

        const criteriaTitle = document.createElement('p');
        criteriaTitle.innerHTML = `<strong>Criteria:</strong>`;

        const criteriaList = document.createElement('ul');
        category.criteria.forEach(criterion => {
            const li = document.createElement('li');
            li.textContent = criterion;
            criteriaList.appendChild(li);
        });

        card.appendChild(title);
        card.appendChild(objective);
        card.appendChild(criteriaTitle);
        card.appendChild(criteriaList);

        container.appendChild(card);
    });
}
