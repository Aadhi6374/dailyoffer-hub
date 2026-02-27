// Database with Only 1 Product
const products = [
    { 
        id: 1, 
        name: "Forest Essentials Bestselling Soundarya Night Cream with 24K Gold | Anti-Ageing Overnight Repair | With Bakuchiol & Hyaluronic Acid | Restorative & Nourishing", 
        category: "Luxury Skin Care", 
        price: 40.66, 
        rating: 4, 
        image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png", 
        amazon: "https://amzn.to/40zodlq"
    }
];

let cart = [];

// Show stars
function getStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating 
            ? '<i class="fa-solid fa-star text-yellow-400"></i>' 
            : '<i class="fa-regular fa-star text-gray-300"></i>';
    }
    return stars;
}

function renderProducts(filter = 'All') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div class="relative h-56 overflow-hidden bg-gray-100">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-5 flex-1 flex flex-col">
                    <div class="text-xs text-brand-600 font-semibold uppercase mb-1">${product.category}</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">${product.name}</h3>
                    <div class="flex items-center text-xs mb-4">${getStars(product.rating)}</div>
                    <div class="mt-auto">
                        <span class="text-2xl font-bold text-gray-900 block mb-4">$${product.price.toFixed(2)}</span>
                        
                        <button onclick="addToCart(${product.id})" class="w-full bg-gray-100 text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-900 hover:text-white transition mb-3">
                            <i class="fa-solid fa-cart-plus mr-1"></i> Add to Cart
                        </button>

                        <a href="${product.amazon}" target="_blank" 
                           class="w-full block text-center text-white bg-amazon py-2 rounded-lg font-bold hover:opacity-90 transition">
                           Buy on Amazon
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsEl = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');

    cartItemsEl.innerHTML = '';
    let totalQty = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
        cartItemsEl.appendChild(emptyMsg);
        emptyMsg.style.display = 'block';
    } else {
        emptyMsg.style.display = 'none';

        cart.forEach(item => {
            totalQty += item.qty;
            totalPrice += item.price * item.qty;

            cartItemsEl.innerHTML += `
                <div class="flex gap-4 items-center bg-white p-3 rounded-lg border">
                    <img src="${item.image}" class="w-16 h-16 object-cover rounded-md">
                    <div class="flex-1">
                        <h4 class="text-sm font-bold">${item.name}</h4>
                        <div class="text-sm text-gray-500">
                            Qty: ${item.qty} x $${item.price.toFixed(2)}
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" 
                            class="text-red-500">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
        });
    }

    document.getElementById('cart-count').innerText = totalQty;
    document.getElementById('cart-total').innerText = `$${totalPrice.toFixed(2)}`;
}

// Load products on start
renderProducts();

