// filters.js
export function applyFilter(data, filterValue) {
    if (filterValue === 'all') return data;

    filterValue = filterValue.toLowerCase();

    return data.filter(item => {
        switch (filterValue) {
            case 'student':
            case 'teacher':
                // Filter by recipient field
                return item.recipient && item.recipient.toLowerCase() === filterValue;

            case 'senior':
            case 'junior':
                // Filter by schoolLevel field
                return item.schoolLevel && item.schoolLevel.toLowerCase() === filterValue;

            case '2024':
            case '2025':
                // Filter by year or inaugurated (handle both)
                return item.year == filterValue || item.inaugurated == filterValue;

            default:
                // If filter doesn't match known values, return all items
                return true;
        }
    });
}

export function setupFilterButtons(buttons, data, renderFn, container) {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const filteredData = applyFilter(data, filter);

            renderFn(filteredData, container);

            // Update active button styling
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}
