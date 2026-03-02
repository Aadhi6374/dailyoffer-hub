const products = [
    {
        id: 1,
        name: "Forest Essentials Soundarya Night Cream",
        category: "Luxury Skin Care",
        originalPrice: 5699,
        price: 3990,
        rating: 4,
        description: "Luxurious Ayurvedic night cream enriched with 24K gold for radiant and youthful-looking skin.",
        image: "https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png",
        amazon: "https://amzn.to/40zodlq"
    },
    {
        id: 2,
        name: "Anti-Aging Skincare Premium Gift Set",
        category: "Luxury Skin Care",
        originalPrice: 4999,
        price: 3375,
        rating: 4,
        description: "Complete premium skincare combo designed to restore glow and fight early signs of aging.",
        image: "https://m.media-amazon.com/images/I/61FtBsWTqlL._SL1500_.jpg",
        amazon: "https://amzn.to/3MZ2Jv3"
    },
    {
        id: 3,
        name: "GOBOULT Earl TWS Earbuds with Hybrid ANC",
        category: "Luxury EarBud",
        originalPrice: 4999,
        price: 2499,
        rating: 4,
        description: "Hybrid ANC up to 50dB with 50 hours playtime and powerful 10mm dual drivers for immersive sound.",
        image: "https://m.media-amazon.com/images/I/71ut+5l0kyL._SL1500_.jpg",
        amazon: "https://amzn.to/4lbYRnm"
    },
    {
        id: 4,
        name: "Brick Brown Wooden 2-Tier Spice Rack Organizer",
        category: "Kitchen Appliance",
        originalPrice: 5999,
        price: 3999,
        rating: 4,
        description: "Handcrafted premium wooden spice rack designed to organize your kitchen elegantly.",
        image: "https://m.media-amazon.com/images/I/81yH2z-ELGL._SL1500_.jpg",
        amazon: "https://amzn.to/4kYRkba"
    }
];

let cart = [];

function formatINR(amount) {
    return "₹" + amount.toLocaleString("en-IN");
}

function calculateDiscount(original, price) {
    return Math.round(((original - price) / original) * 100);
}

function renderProducts() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.innerHTML = "";

    products.forEach(product => {

        const discount = calculateDiscount(product.originalPrice, product.price);

        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-md border hover:shadow-lg transition flex flex-col p-4">

                <!-- Limited Deal Badge -->
                <div style="background:#cc0c39; color:white; font-size:12px; padding:6px 10px; border-radius:4px; width:fit-content; margin-bottom:10px;">
                    Limited time deal
                </div>

                <!-- Product Image -->
                <div style="height:280px; display:flex; align-items:center; justify-content:center;">
                    <img src="${product.image}" style="max-height:260px; object-fit:contain;">
                </div>

                <!-- Product Name -->
                <h3 style="font-weight:600; margin-top:10px;">
                    ${product.name}
                </h3>

                <!-- Description -->
                <p style="font-size:13px; color:#555; margin-top:6px;">
                    ${product.description}
                </p>

                <!-- Price Section -->
                <div style="margin-top:8px;">
                    <span style="color:#cc0c39; font-size:18px; font-weight:bold;">
                        -${discount}%
                    </span>

                    <span style="font-size:26px; font-weight:bold; margin-left:8px;">
                        ${formatINR(product.price)}
                    </span>
                </div>

                <div style="font-size:14px; color:#555;">
                    M.R.P: <span style="text-decoration:line-through;">
                        ${formatINR(product.originalPrice)}
                    </span>
                </div>

                <!-- Urgency -->
                <p style="color:#dc2626; font-size:13px; margin-top:6px;">
                    ⚡ Hurry! This offer may end soon. Grab it before it's gone!
                </p>

                <!-- Buttons -->
                <button onclick="addToCart(${product.id})"
                    style="margin-top:10px; padding:8px; background:#f0f0f0; border:none; border-radius:6px;">
                    Add to Cart
                </button>

                <a href="${product.amazon}" target="_blank"
                    style="margin-top:8px; padding:10px; text-align:center; background:#ffd814; color:black; border-radius:6px; text-decoration:none; font-weight:600;">
                    Buy on Amazon
                </a>

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
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span>${item.name} (x${item.qty})</span>
                <span>${formatINR(item.price * item.qty)}</span>
            </div>
        `;
    });

    if (cartTotal) cartTotal.innerText = formatINR(total);
}

document.addEventListener("DOMContentLoaded", renderProducts);
