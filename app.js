const products = [
    {
        id: 1,
        name: "Forest Essentials Soundarya Night Cream",
        category: "Luxury Skin Care",
        price: 3375,
        rating: 4,
        image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png",
        amazon: "https://amzn.to/40zodlq"
    },
    {
        id: 2,
        name: "Anti-Aging Skincare Premium Gift Set",
        category: "Luxury Skin Care",
        price: 3375,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/61FtBsWTqlL._SL1500_.jpg",
        amazon: "https://amzn.to/3MZ2Jv3"
    },
    {
        id: 3,
        name: "GOBOULT Earl TWS Earbuds with Hybrid ANC",
        category: "Luxury EarBud",
        price: 2499,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/71ut+5l0kyL._SL1500_.jpg",
        amazon: "https://amzn.to/4lbYRnm"
    },
     {
        id: 4,
        name: "Brick Brown Handcrafted Premium Homeydo Organizer | Wooden Spice Rack | 2-Tier Kitchen Countertop | Cabinet Storage Shelf | Home Décor Display In Wood (18.0X10.6X18.1 Inch) - Tiered Shelf
",
        category: "Kitchen Appliance,
        price:3999,
        rating: 4,
        image: "https://m.media-amazon.com/images/I/81yH2z-ELGL._SL1500_.jpg",
        amazon: "https://amzn.to/4kYRkba"
    }
];

let cart = [];

function formatINR(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {
        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-md border hover:shadow-lg transition flex flex-col">

                <!-- IMAGE SECTION FIXED -->
                <div style="height: 320px; display: flex; align-items: center; justify-content: center; background: white;">
                    <img src="${product.image}" 
                         style="max-height: 300px; width: auto; object-fit: contain;">
                </div>

                <div class="p-5 flex flex-col flex-1">
                    <h3 class="font-bold mb-2 text-gray-800">
                        ${product.name}
                    </h3>

                    <span class="text-2xl font-bold mb-4 text-gray-900">
                        ${formatINR(product.price)}
                    </span>

                    <button onclick="addToCart(${product.id})"
                        class="w-full bg-gray-100 py-2 rounded mb-2 hover:bg-black hover:text-white transition">
                        Add to Cart
                    </button>

                    <a href="${product.amazon}" target="_blank"
                        class="w-full block text-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded transition">
                        Buy on Amazon
                    </a>
                </div>
            </div>
        `;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;
    let qty = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        qty += item.qty;

        cartItems.innerHTML += `
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #ddd; padding-bottom:8px; margin-bottom:8px;">
                <p>${item.name} (x${item.qty})</p>
                <p>${formatINR(item.price * item.qty)}</p>
            </div>
        `;
    });

    if (cartCount) cartCount.innerText = qty;
    if (cartTotal) cartTotal.innerText = formatINR(total);
}

function toggleCart() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) drawer.classList.toggle("translate-x-full");
}

document.addEventListener("DOMContentLoaded", renderProducts);


