let menuItems = [
    { id: 1, name: "Garlic Bread", price: 35.00, course: "Starter" },
    { id: 2, name: "Grilled Steak", price: 150.00, course: "Main Course" },
    { id: 3, name: "Chocolate Cake", price: 55.00, course: "Dessert" }
];

const menuForm = document.getElementById('menu-form');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');
const itemCourseInput = document.getElementById('item-course');
const itemIndexInput = document.getElementById('item-index');
const menuListContainer = document.getElementById('menu-list');
const formTitle = document.getElementById('form-title');

const searchInput = document.getElementById('search-input');
const filterCourseSelect = document.getElementById('filter-course');
const clearBtn = document.getElementById('clear-btn');

const totalItemsSpan = document.getElementById('total-items');
const avgPriceSpan = document.getElementById('avg-price');
const countStarterSpan = document.getElementById('count-starter');
const countMainSpan = document.getElementById('count-main');
const countDessertSpan = document.getElementById('count-dessert');

document.addEventListener('DOMContentLoaded', () => {
    refreshApp();
});

menuForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = itemNameInput.value.trim();
    const price = parseFloat(itemPriceInput.value);
    const course = itemCourseInput.value;
    const index = parseInt(itemIndexInput.value);

    if (!name || isNaN(price) || !course) {
        alert('Please fill in all fields correctly.');
        return;
    }

    if (index === -1) {
        menuItems.push({ id: Date.now(), name, price, course });
    } else {
        menuItems[index].name = name;
        menuItems[index].price = price;
        menuItems[index].course = course;
        itemIndexInput.value = -1;
        formTitle.textContent = "Add New Menu Item";
    }

    menuForm.reset();
    refreshApp();
});

function renderMenu(items) {
    menuListContainer.innerHTML = '';

    if (items.length === 0) {
        menuListContainer.innerHTML = '<p class="no-items">No menu items found.</p>';
        return;
    }

    items.forEach((item) => {
        const actualIndex = menuItems.findIndex(m => m.id === item.id);
        const itemCard = document.createElement('div');
        itemCard.className = 'menu-item-card';
        itemCard.innerHTML = `
            <div class="item-info">
                <h3>${item.name}</h3>
                <p class="item-course">Course: <strong>${item.course}</strong></p>
                <p class="item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="item-actions">
                <button class="btn edit-btn" onclick="editItem(${actualIndex})">Edit</button>
                <button class="btn delete-btn" onclick="deleteItem(${actualIndex})">Delete</button>
            </div>
        `;
        menuListContainer.appendChild(itemCard);
    });
}

window.editItem = function(index) {
    const item = menuItems[index];
    itemNameInput.value = item.name;
    itemPriceInput.value = item.price;
    itemCourseInput.value = item.course;
    itemIndexInput.value = index;
    formTitle.textContent = "Edit Menu Item";
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.deleteItem = function(index) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        menuItems.splice(index, 1);
        refreshApp();
    }
};

function filterAndSearchMenu() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCourse = filterCourseSelect.value;

    const filtered = menuItems.filter(item => {
        const matchesName = item.name.toLowerCase().includes(searchTerm);
        const matchesCourse = selectedCourse === 'All' || item.course === selectedCourse;
        return matchesName && matchesCourse;
    });

    renderMenu(filtered);
}

searchInput.addEventListener('input', filterAndSearchMenu);
filterCourseSelect.addEventListener('change', filterAndSearchMenu);

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    filterCourseSelect.value = 'All';
    renderMenu(menuItems);
});

function updateStatistics() {
    const totalItems = menuItems.length;
    let totalPrice = 0;
    let starterCount = 0;
    let mainCount = 0;
    let dessertCount = 0;

    menuItems.forEach(item => {
        totalPrice += item.price;
        if (item.course === 'Starter') starterCount++;
        if (item.course === 'Main Course') mainCount++;
        if (item.course === 'Dessert') dessertCount++;
    });

    const avgPrice = totalItems > 0 ? (totalPrice / totalItems) : 0;

    totalItemsSpan.textContent = totalItems;
    avgPriceSpan.textContent = avgPrice.toFixed(2);
    countStarterSpan.textContent = starterCount;
    countMainSpan.textContent = mainCount;
    countDessertSpan.textContent = dessertCount;
}

function refreshApp() {
    filterAndSearchMenu();
    updateStatistics();
}