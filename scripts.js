document.addEventListener('DOMContentLoaded', () => {
    // Sample categories (later these will come from your database)
    let categories = [
        { name: 'Finance Reports', id: 1 },
        { name: 'Marketing Reports', id: 2 },
        { name: 'Engineering Reports', id: 3 }
    ];

    const categoriesContainer = document.querySelector('.categories-container');

    // Dynamically add categories to the page
    categories.forEach(category => {
        let categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');
        categoryItem.innerHTML = `
            <h3>${category.name}</h3>
            <a href="category.html?id=${category.id}" class="btn">View Reports</a>
        `;
        categoriesContainer.appendChild(categoryItem);
    });
});
