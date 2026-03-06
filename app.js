let products = []
let cart = []

function formatINR(amount) {
    return "₹" + amount.toLocaleString("en-IN")
}

function calculateDiscount(original, price) {
    return Math.round(((original - price) / original) * 100)
}

async function loadProducts() {

    try {

        const response = await fetch("products.json")
        products = await response.json()

        renderProducts()

    } catch (error) {

        console.error("Products loading error:", error)

    }

}

function renderProducts() {

    const grid = document.getElementById("product-grid")
    if (!grid) return

    grid.innerHTML = ""

    products.forEach(product => {

        const discount = calculateDiscount(product.originalPrice, product.price)

        grid.innerHTML += `

        <div class="bg-white rounded-xl shadow-md border hover:shadow-lg transition flex flex-col p-4">

            <div style="background:#cc0c39;color:white;font-size:12px;padding:6px 10px;border-radius:4px;width:fit-content;margin-bottom:10px;">
            Limited time deal
            </div>

            <div style="height:280px;display:flex;align-items:center;justify-content:center;">
            <img src="${product.image}" style="max-height:260px;object-fit:contain;">
            </div>

            <h3 style="font-weight:600;margin-top:10px;">
            ${product.name}
            </h3>

            <p style="font-size:13px;color:#555;margin-top:6px;">
            ${product.description}
            </p>

            <div style="margin-top:8px;">

            <span style="color:#cc0c39;font-size:18px;font-weight:bold;">
            -${discount}%
            </span>

            <span style="font-size:26px;font-weight:bold;margin-left:8px;">
            ${formatINR(product.price)}
            </span>

            </div>

            <div style="font-size:14px;color:#555;">
            M.R.P:
            <span style="text-decoration:line-through;">
            ${formatINR(product.originalPrice)}
            </span>
            </div>

            <p style="color:#dc2626;font-size:13px;margin-top:8px;font-weight:500;">
            ${product.offerNote}
            </p>

            <button onclick="addToCart(${product.id})"
            style="margin-top:10px;padding:8px;background:#f0f0f0;border:none;border-radius:6px;">
            Add to Cart
            </button>

            <a href="${product.amazon}" target="_blank"
            style="margin-top:8px;padding:10px;text-align:center;background:#ffd814;color:black;border-radius:6px;text-decoration:none;font-weight:600;">
            Buy on Amazon
            </a>

        </div>

        `

    })

}

function addToCart(id) {

    const product = products.find(p => p.id === id)

    const existing = cart.find(item => item.id === id)

    if (existing) {

        existing.qty++

    } else {

        cart.push({ ...product, qty: 1 })

    }

    updateCart()

}

function updateCart() {

    const cartItems = document.getElementById("cart-items")
    const cartTotal = document.getElementById("cart-total")

    if (!cartItems) return

    cartItems.innerHTML = ""

    let total = 0

    cart.forEach(item => {

        total += item.price * item.qty

        cartItems.innerHTML += `

        <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
            <span>${item.name} (x${item.qty})</span>
            <span>${formatINR(item.price * item.qty)}</span>
        </div>

        `

    })

    if (cartTotal) cartTotal.innerText = formatINR(total)

}

document.addEventListener("DOMContentLoaded", loadProducts)
