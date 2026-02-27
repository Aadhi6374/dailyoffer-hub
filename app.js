// Database of 10 Curated Products with exact search links for Amazon/Flipkart
const products = [
    // --- FASHION (5 Items) ---
    { 
        id: 1, 
        name: "Forest Essentials Bestselling Soundarya Night Cream with 24K Gold | Anti-Ageing Overnight Repair| With Bakuchiol & Hyaluronic Acid | Restorative & Nourishing", 
        category: "Luxury Skin care beauty", 
        price: 40.66, 
        rating: 4, 
        image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png", 
        amazon: "https://amzn.to/4sbSjai", 
       // flipkart: "https://www.flipkart.com/search?q=Puma+Mens+Running+Shoes" 
    },
     { 
        id: 2, 
        name: "Levi's Classic Denim Jacket", 
        category: "Fashion", 
        price: 59.99, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Levis+Men+Denim+Jacket", 
        flipkart: "https://www.flipkart.com/search?q=Levis+Men+Denim+Jacket" 
    },
    { 
        id: 3, 
        name: "Women's Floral Maxi Dress", 
        category: "Fashion", 
        price: 29.50, 
        rating: 4, 
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Womens+Floral+Maxi+Dress", 
        flipkart: "https://www.flipkart.com/search?q=Womens+Floral+Maxi+Dress" 
    },
    { 
        id: 4, 
        name: "Casio Vintage Digital Watch", 
        category: "Fashion", 
        price: 45.00, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Casio+Vintage+Digital+Watch", 
        flipkart: "https://www.flipkart.com/search?q=Casio+Vintage+Digital+Watch" 
    },
    { 
        id: 5, 
        name: "Ray-Ban Aviator Sunglasses", 
        category: "Fashion", 
        price: 150.00, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Ray-Ban+Aviator+Sunglasses", 
        flipkart: "https://www.flipkart.com/search?q=Ray-Ban+Aviator+Sunglasses" 
    },

    // --- ELECTRONICS (5 Items) ---
    { 
        id: 6, 
        name: "Apple iPhone 15 Pro (256GB)", 
        category: "Electronics", 
        price: 1099.00, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Apple+iPhone+15+Pro+256GB", 
        flipkart: "https://www.flipkart.com/search?q=Apple+iPhone+15+Pro+256GB" 
    },
    { 
        id: 7, 
        name: "Sony WH-1000XM5 Headphones", 
        category: "Electronics", 
        price: 348.00, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Sony+WH-1000XM5", 
        flipkart: "https://www.flipkart.com/search?q=Sony+WH-1000XM5" 
    },
    { 
        id: 8, 
        name: "Apple MacBook Air M2", 
        category: "Electronics", 
        price: 999.00, 
        rating: 5, 
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Apple+MacBook+Air+M2", 
        flipkart: "https://www.flipkart.com/search?q=Apple+MacBook+Air+M2" 
    },
    { 
        id: 9, 
        name: "Samsung Galaxy Watch 6", 
        category: "Electronics", 
        price: 299.99, 
        rating: 4, 
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=Samsung+Galaxy+Watch+6", 
        flipkart: "https://www.flipkart.com/search?q=Samsung+Galaxy+Watch+6" 
    },
    { 
        id: 10, 
        name: "JBL Flip 6 Bluetooth Speaker", 
        category: "Electronics", 
        price: 129.95, 
        rating: 4, 
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80", 
        amazon: "https://www.amazon.in/s?k=JBL+Flip+6", 
        flipkart: "https://www.flipkart.com/search?q=JBL+Flip+6" 
     }
];

let cart = [];

// Helper function to show stars based on rating
function getStars(rating) {
    let stars = '';
    for(let i=1; i<=5; i++) {
        stars += i <= rating 
            ? '<i class="fa-solid fa-star text-yellow-400"></i>' 
            : '<i class="fa-regular fa-star text-gray-300"></i>';
    }
    return stars;
}

function renderProducts(filter = 'All') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    const filtered = filter === 'All' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div class="relative h-56 overflow-hidden bg-gray-100">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                </div>
                <div class="p-5 flex-1 flex flex-col">
                    <div class="text-xs text-brand-600 font-semibold uppercase tracking-wide mb-1">${product.category}</div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center text-xs mb-4">${getStars(product.rating)}</div>
                    <div class="mt-auto">
                        <span class="text-2xl font-bold text-gray-900 block mb-4">$${product.price.toFixed(2)}</span>
                        
                        <button onclick="addToCart(${product.id})" class="w-full bg-gray-100 text-gray-900 font-bold py-2 rounded-lg hover:bg-gray-900 hover:text-white transition mb-3">
                            <i class="fa-solid fa-cart-plus mr-1"></i> Add to Cart
                        </button>

                        <div class="grid grid-cols-2 gap-2">
                            <a href="${product.amazon}" target="_blank" class="flex items-center justify-center text-xs font-bold text-gray-800 border border-gray-200 bg-white hover:bg-gray-50 py-2 rounded-lg transition">
                                <i class="fa-brands fa-amazon text-amazon mr-1 text-sm"></i> Amazon
                            </a>
                            <a href="${product.flipkart}" target="_blank" class="flex items-center justify-center text-xs font-bold text-white bg-flipkart hover:bg-blue-700 py-2 rounded-lg transition">
                                Flipkart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterCategory(category) {
    document.getElementById('category-title').innerText = category === 'All' ? 'Featured Products' : category;
    renderProducts(category);
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    
    if(drawer.classList.contains('cart-slide-active')) {
        drawer.classList.remove('cart-slide-active');
        overlay.classList.add('hidden');
    } else {
        drawer.classList.add('cart-slide-active');
        overlay.classList.remove('hidden');
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if(existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    updateCartUI();
    
    // Tiny animation on cart icon
    const badge = document.getElementById('cart-count');
    badge.classList.add('scale-150');
    setTimeout(() => badge.classList.remove('scale-150'), 200);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsEl = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-cart-msg');
    
    cartItemsEl.innerHTML = '';
    let totalQty = 0; let totalPrice = 0;

    if(cart.length === 0) {
        cartItemsEl.appendChild(emptyMsg);
        emptyMsg.style.display = 'block';
    } else {
        emptyMsg.style.display = 'none';
        cart.forEach(item => {
            totalQty += item.qty;
            totalPrice += (item.price * item.qty);
            cartItemsEl.innerHTML += `
                <div class="flex gap-4 items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                    <div class="flex-1">
                        <h4 class="text-sm font-bold text-gray-900">${item.name}</h4>
                        <div class="text-sm text-gray-500">Qty: ${item.qty} x $${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600 p-2">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>`;
        });
    }
    document.getElementById('cart-count').innerText = totalQty;
    document.getElementById('cart-total').innerText = `$${totalPrice.toFixed(2)}`;
}

// Initialize the product grid
renderProducts();