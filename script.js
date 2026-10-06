const products = [
  {
    name: "AMEX",
    tag: "Exclusive",
    description:
      "A premium digital card designed for high-value spending, private service access and elite lifestyle benefits.",
    price: "R$ 90",
    button: "Request",
  },
  {
    name: "BLACK",
    tag: "Luxury",
    description:
      "A sophisticated option for clients seeking premium support, elevated travel perks and refined convenience.",
    price: "R$ 90",
    button: "Request",
  },
  {
    name: "GOLD",
    tag: "Prestige",
    description:
      "A balanced premium card with flexible features, rewards and a strong profile for daily lifestyle use.",
    price: "R$ 35",
    button: "Request",
  },
  {
    name: "PLATINUM",
    tag: "Elite",
    description:
      "A refined card for customers who value premium benefits, status and superior financial control.",
    price: "R$ 40",
    button: "Request",
  },
  {
    name: "STANDARD",
    tag: "Basic",
    description:
      "An accessible and reliable card developed for smooth everyday transactions with trusted performance.",
    price: "R$ 30",
    button: "Request",
  },
  {
    name: "INFINITE",
    tag: "Premium",
    description:
      "Unlimited possibilities with premium features designed for clients who demand the very best.",
    price: "R$ 90",
    button: "Request",
  },
  {
    name: "CORPORATE",
    tag: "Business",
    description:
      "A high-performance solution for company operations, team purchasing, and structured financial management.",
    price: "R$ 80",
    button: "Request",
  },
  {
    name: "CLASSIC",
    tag: "Essential",
    description:
      "A clean, practical digital card for clients seeking a simpler and elegant way to manage everyday purchases.",
    price: "R$ 25",
    button: "Request",
  },
];

const productGrid = document.getElementById("product-grid");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <span class="product-tag">${product.tag}</span>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <div class="product-price">
      <strong>${product.price}</strong>
      <span>One-time</span>
    </div>
    <a class="btn btn-gold" href="#contact">${product.button}</a>
  `;

  productGrid.appendChild(card);
});
