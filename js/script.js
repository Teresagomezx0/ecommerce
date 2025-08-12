//PRODUCTS PAGE
document.addEventListener("DOMContentLoaded", async () => {
  const list = document.getElementById("productsList");
  if (!list) return; //WILL ONLY RUN ON PRODUCTS LIST

  const msg = document.getElementById("productsMsg");

  try {
    const res = await fetch("data/products.json");
    const items = await res.json();

    list.innerHTML = items
      .map(
        (p) =>
          ` <li class= "card"> <img src= "${p.image}" alt= "${p.name}">
              <div class= "pad"> 
              <h3> ${p.name}</h3>
              <p> ${p.description} </p>
              <div class= "price"> $${Number(p.price).toFixed(2)} </div>
              <a class= "btn" href="Fake-cart-link">Add to Cart</a>
              </div>
              </li>
               `
      )
      .join("");

    if (msg) msg.textContent = `Loaded ${items.length} products.`;
  } catch (e) {
    if (msg) msg.textcontent = "Could not load products.";
  }
});
