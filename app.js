const products = [


{
"id":11,
"name":"Magnetic Fidget Pen 🧲 Stress Relief Decompression Toy for Kids & Teens",
"category":"Luxury Gadgets",
"originalPrice":5294,
"price":5294,
"rating":4,
"description":"This Magnetic Fidget Pen 🧲✍️ is more than a pen — it’s a stress-relief desk toy that can transform into countless shapes. Perfect for focus, creativity, and fun at school, work, or home.",
"offerNote":"⚡ Limited Time Gadget Deal – This viral magnetic fidget pen is selling fast. Grab yours before the price goes up!",
"image":"https://m.media-amazon.com/images/I/71dEEsiocOL._SL1500_.jpg",
"amazon":"https://amzn.to/4u9rrK9"
},
  {
"id":1,
"name":"Forest Essentials Soundarya Night Cream",
"category":"Luxury Skin Care",
"originalPrice":3373,
"price":3375,
"rating":4,
"description":"Luxurious Ayurvedic night cream enriched with 24K gold for radiant skin.",
"offerNote":"⚡ Exclusive beauty deal! Grab it now!",
"image":"https://img.forestessentialsindia.com/pub/media/catalog/product/cache/f8158826193ba5faa8b862a9bd1eb9e9/8/8/8842_soundarya_radiance_day_cream_50g_front_2048_x_2048.png",
"amazon":"https://amzn.to/40zodlq"
},

{
"id":2,
"name":"Anti-Aging Skincare Premium Gift Set",
"category":"Luxury Skin Care",
"originalPrice":4500,
"price":3375,
"rating":4,
"description":"Complete premium skincare combo designed to restore glow and fight aging.",
"offerNote":"🔥 Limited skincare combo offer!",
"image":"https://m.media-amazon.com/images/I/61FtBsWTqlL._SL1500_.jpg",
"amazon":"https://amzn.to/3MZ2Jv3"
},

{
"id":3,
"name":"GOBOULT Earl TWS Earbuds with Hybrid ANC",
"category":"Luxury EarBud",
"originalPrice":6999,
"price":2499,
"rating":4,
"description":"Hybrid ANC up to 50dB with 50 hours playtime and powerful drivers.",
"offerNote":"🎧 Massive discount! Secure yours today!",
"image":"https://m.media-amazon.com/images/I/71ut+5l0kyL._SL1500_.jpg",
"amazon":"https://amzn.to/4lbYRnm"
},

{
"id":4,
"name":"Brick Brown Wooden 2-Tier Spice Rack Organizer",
"category":"Kitchen Appliance",
"originalPrice":5699,
"price":3999,
"rating":4,
"description":"Premium wooden spice rack designed to organize your kitchen.",
"offerNote":"🏠 Kitchen special deal! Upgrade your space today.",
"image":"https://m.media-amazon.com/images/I/81yH2z-ELGL._SL1500_.jpg",
"amazon":"https://amzn.to/4kYRkba"
},

{
"id":5,
"name":"Fire-Boltt Phoenix Pro Smartwatch",
"category":"Luxury Smart Watch",
"originalPrice":18999,
"price":1299,
"rating":4,
"description":"Bluetooth calling smartwatch with 120+ sports modes and health tracking.",
"offerNote":"🔥 Hot deal alert! Secure yours before stock ends!",
"image":"https://m.media-amazon.com/images/I/71tkAAxauUL._SL1500_.jpg",
"amazon":"https://amzn.to/4bfVgRE"
},

{
"id":6,
"name":"WZATCO Yuva Go Pro Smart Projector",
"category":"Luxury Home Appliance",
"originalPrice":29990,
"price":11980,
"rating":4,
"description":"Native 1080P smart projector with auto focus and WiFi 6 support.",
"offerNote":"⚡ Limited Time Offer – Grab this deal now!",
"image":"https://m.media-amazon.com/images/I/71kPpcyp1VL._SL1500_.jpg",
"amazon":"https://amzn.to/4b0LrG6"
},

{
"id":7,
"name":"Green Vines & Fairy Lights Wall Decor",
"category":"Luxury Home Decor",
"originalPrice":600,
"price":297,
"rating":4,
"description":"40ft fairy lights with green vines for cozy aesthetic room decor.",
"offerNote":"⚡ Limited Time Deal – Create your cozy glow!",
"image":"https://m.media-amazon.com/images/I/81a3yjFQ6zL._SL1500_.jpg",
"amazon":"https://amzn.to/3MCjCfa"
},

{
"id":8,
"name":"Retro Rose Gold LED Table Lamp",
"category":"Luxury Home Decor",
"originalPrice":1499,
"price":383,
"rating":4,
"description":"Rechargeable touch sensor lamp with 3 brightness levels.",
"offerNote":"✨ Limited Glow Edition – Elevate your space today.",
"image":"https://m.media-amazon.com/images/I/61VRZY7x1BL._SL1024_.jpg",
"amazon":"https://amzn.to/4cXzxPI"
},

{
"id":9,
"name":"5-Tier Kitchen Trolley with Wheels",
"category":"Luxury Home Decor",
"originalPrice":23000,
"price":2933,
"rating":4,
"description":"Space saving metal storage organizer for small kitchens.",
"offerNote":"⚡ Limited Stock Alert – Organize your kitchen now!",
"image":"https://m.media-amazon.com/images/I/61VYwDsVxmL.jpg",
"amazon":"https://amzn.to/4u4iy4f"
},

{
"id":10,
"name":"Men’s Chanderi Silk Sequins Kurta",
"category":"Luxury Dress",
"originalPrice":3999,
"price":1199,
"rating":4,
"description":"Elegant ethnic kurta with mandarin collar and sequins design.",
"offerNote":"⚡ Festive Special – Upgrade your style today!",
"image":"https://m.media-amazon.com/images/I/51e7pTcUBYL._SY679_.jpg",
"amazon":"https://amzn.to/46AM8Ve"
}, {
"id":11,
"name":"Magnetic Fidget Pen 🧲 Stress Relief Decompression Toy for Kids & Teens",
"category":"Luxury Gadgets",
"originalPrice":5294,
"price":5294,
"rating":4,
"description":"This Magnetic Fidget Pen 🧲✍️ is more than a pen — it’s a stress-relief desk toy that can transform into countless shapes. Perfect for focus, creativity, and fun at school, work, or home.",
"offerNote":"⚡ Limited Time Gadget Deal – This viral magnetic fidget pen is selling fast. Grab yours before the price goes up!",
"image":"https://m.media-amazon.com/images/I/71dEEsiocOL._SL1500_.jpg",
"amazon":"https://amzn.to/4u9rrK9"
}

]

let cart=[]

function formatINR(amount){
return "₹"+amount.toLocaleString("en-IN")
}

function formatUSD(amount){
let usd=amount/83
return "$"+usd.toFixed(2)
}

function calculateDiscount(original,price){
return Math.round(((original-price)/original)*100)
}

function renderProducts(){

const grid=document.getElementById("product-grid")

if(!grid) return

grid.innerHTML=""

products.forEach(product=>{

const discount=calculateDiscount(product.originalPrice,product.price)

grid.innerHTML+=`

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

<div style="font-size:14px;color:#555;">
(${formatUSD(product.price)})
</div>

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

<a href="${product.amazon}" target="_blank"
style="margin-top:10px;padding:10px;text-align:center;background:#ffd814;color:black;border-radius:6px;text-decoration:none;font-weight:600;">
Buy on Amazon
</a>

</div>
`
})

}

document.addEventListener("DOMContentLoaded",renderProducts)


