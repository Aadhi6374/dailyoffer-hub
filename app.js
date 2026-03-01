// PRODUCTS DATABASE
const products = [
    { 
        id: 1, 
        name: "Forest Essentials Soundarya Night Cream",
        category: "Luxury Skin Care", 
        price: 40.66, 
        rating: 4, 
        image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png", 
        amazon: "https://amzn.to/40zodlq"
    },  // ✅ comma important

    { 
        id: 2, 
        name: "Anti-Aging Skincare Premium Gift Set",
        category: "Luxury Skin Care", 
        price: 37.06, 
        rating: 4, 
        image: "https://m.media-amazon.com/images/I/61FtBsWTqlL._SL1500_.jpg", 
        amazon: "https://amzn.to/3MZ2Jv3"
    }
];

let cart = [];

// RENDER PRODUCTS
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = '';

    products.forEach(product => {
        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col">
                <div class="h-56 overflow-hidden bg-gray-100">
                    <img src="${product.image}" class="w-full h-full object-cover">
                </div>
                <div class="p-5 flex flex-col flex-1">
                    <h3 class="font-bold mb-2">${product.name}</h3>
                    <span class="text-2xl font-bold mb-4">$${product.price.toFixed(2)}</span>

                    <button onclick="addToCart(${product.id})"
                        class="w-full bg-gray-100 py-2 rounded mb-2 hover:bg-black hover:text-white">
                        Add to Cart
                    </button>

                    <a href="${product.amazon}" target="_blank"
                        class="w-full block text-center bg-amazon text-white py-2 rounded">
                        Buy on Amazon
                    </a>
                </div>
            </div>
        `;
    });
}

// ADD TO CART
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

// UPDATE CART
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItems) return;

    cartItems.innerHTML = '';
    let total = 0;
    let qty = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        qty += item.qty;

        cartItems.innerHTML += `
            <div class="flex justify-between border-b pb-2">
                <p>${item.name} (x${item.qty})</p>
                <p>$${(item.price * item.qty).toFixed(2)}</p>
            </div>
        `;
    });

    cartCount.innerText = qty;
    cartTotal.innerText = `$${total.toFixed(2)}`;
}

// TOGGLE CART
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('translate-x-full');
}

// OPTIONAL FILTER (to avoid console error)
function filterCategory(category) {
    renderProducts();
}

// LOAD AFTER DOM READY
document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
});
