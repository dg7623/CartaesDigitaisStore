const products = [
  {
    name: "AMEX",
    tag: "Exclusive",
    description:
      "A premium digital card designed for high-value spending, private service access and elite lifestyle benefits.",
    price: "$1,200",
    button: "Request",
  },
  {
    name: "BLACK",
    tag: "Luxury",
    description:
      "A sophisticated option for clients seeking premium support, elevated travel perks and refined convenience.",
    price: "$980",
    button: "Request",
  },
  {
    name: "GOLD",
    tag: "Prestige",
    description:
      "A balanced premium card with flexible features, rewards and a strong profile for daily lifestyle use.",
    price: "$740",
    button: "Request",
  },
  {
    name: "PLATINUM",
    tag: "Elite",
    description:
      "A refined card for customers who value premium benefits, status and superior financial control.",
    price: "$1,050",
    button: "Request",
  },
  {
    name: "STANDARD",
    tag: "Basic",
    description:
      "An accessible and reliable card developed for smooth everyday transactions with trusted performance.",
    price: "$430",
    button: "Request",
  },
  {
    name: "INFINITE",
    tag: "Premium",
    description:
      "A sophisticated option for clients seeking premium support, elevated travel perks and refined convenience.",
    price: "$980",
    button: "Request",
  },
  {
    name: "CORPORATE",
    tag: "Business",
    description:
      "A high-performance solution for company operations, team purchasing, and structured financial management.",
    price: "$910",
    button: "Request",
  },
  {
    name: "CLASSIC",
    tag: "Essential",
    description:
      "A clean, practical digital card for clients seeking a simpler and elegant way to manage everyday purchases.",
    price: "$560",
    button: "Request",
  },
];\n\nconst productGrid = document.getElementById("product-grid");\n\nproducts.forEach((product) => {\n  const card = document.createElement("article");\n  card.className = "product-card";\n\n  card.innerHTML = `\n    <span class="product-tag">${product.tag}</span>\n    <h3>${product.name}</h3>\n    <p>${product.description}</p>\n    <div class="product-price">\n      <strong>${product.price}</strong>\n      <span>Annual</span>\n    </div>\n    <a class="btn btn-gold" href="#contato">${product.button}</a>\n  `;\n\n  productGrid.appendChild(card);\n});
