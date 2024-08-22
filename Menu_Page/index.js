const menuData = {
  All: [
    {
      id: 1,
      name: "Buttermilk Pancakes",
      price: 15.99,
      description:
        "Fluffy pancakes with real maple syrup and a side of crispy bacon.",
      image: "https://example.com/images/pancakes.jpg",
      category: "Breakfast",
    },
    {
      id: 2,
      name: "Diner Double",
      price: 13.99,
      description:
        "Two juicy beef patties, cheese, lettuce, tomato, and special sauce on a toasted bun.",
      image: "https://example.com/images/burger.jpg",
      category: "Lunch",
    },
    {
      id: 3,
      name: "Godzilla Milkshake",
      price: 6.99,
      description:
        "Thick and creamy chocolate milkshake with whipped cream and a cherry on top.",
      image: "https://example.com/images/milkshake.jpg",
      category: "Shakes",
    },
    {
      id: 4,
      name: "Country Delight",
      price: 20.99,
      description:
        "Grilled chicken breast with roasted vegetables and mashed potatoes.",
      image: "https://example.com/images/chicken.jpg",
      category: "Dinner",
    },
    {
      id: 5,
      name: "Sausage and Egg Breakfast",
      price: 9.99,
      description:
        "Two eggs, crispy bacon, and sausage links served with toast.",
      image: "https://example.com/images/sausage_eggs.jpg",
      category: "Breakfast",
    },
    {
      id: 6,
      name: "Caesar Salad",
      price: 12.99,
      description:
        "Crisp romaine lettuce with creamy Caesar dressing, croutons, and Parmesan cheese.",
      image: "https://example.com/images/caesar_salad.jpg",
      category: "Lunch",
    },
    {
      id: 7,
      name: "Strawberry Shake",
      price: 6.99,
      description: "Refreshing strawberry milkshake with a touch of sweetness.",
      image: "https://example.com/images/strawberry_shake.jpg",
      category: "Shakes",
    },
    {
      id: 8,
      name: "Spaghetti and Meatballs",
      price: 14.99,
      description:
        "Classic Italian dish with homemade meatballs and marinara sauce.",
      image: "https://example.com/images/spaghetti_meatballs.jpg",
      category: "Dinner",
    },
  ],
  Breakfast: [
    {
      id: 1,
      name: "Buttermilk Pancakes",
      price: 15.99,
      description:
        "Fluffy pancakes with real maple syrup and a side of crispy bacon.",
      image: "https://example.com/images/pancakes.jpg",
      category: "Breakfast",
    },
    {
      id: 5,
      name: "Sausage and Egg Breakfast",
      price: 9.99,
      description:
        "Two eggs, crispy bacon, and sausage links served with toast.",
      image: "https://example.com/images/sausage_eggs.jpg",
      category: "Breakfast",
    },
  ],
  Lunch: [
    {
      id: 2,
      name: "Diner Double",
      price: 13.99,
      description:
        "Two juicy beef patties, cheese, lettuce, tomato, and special sauce on a toasted bun.",
      image: "https://example.com/images/burger.jpg",
      category: "Lunch",
    },
    {
      id: 6,
      name: "Caesar Salad",
      price: 12.99,
      description:
        "Crisp romaine lettuce with creamy Caesar dressing, croutons, and Parmesan cheese.",
      image: "https://example.com/images/caesar_salad.jpg",
      category: "Lunch",
    },
  ],
  Shakes: [
    {
      id: 3,
      name: "Godzilla Milkshake",
      price: 6.99,
      description:
        "Thick and creamy chocolate milkshake with whipped cream and a cherry on top.",
      image: "https://example.com/images/milkshake.jpg",
      category: "Shakes",
    },
    {
      id: 7,
      name: "Strawberry Shake",
      price: 6.99,
      description: "Refreshing strawberry milkshake with a touch of sweetness.",
      image: "https://example.com/images/strawberry_shake.jpg",
      category: "Shakes",
    },
  ],
  Dinner: [
    {
      id: 4,
      name: "Country Delight",
      price: 20.99,
      description:
        "Grilled chicken breast with roasted vegetables and mashed potatoes.",
      image: "https://example.com/images/chicken.jpg",
      category: "Dinner",
    },
    {
      id: 8,
      name: "Spaghetti and Meatballs",
      price: 14.99,
      description:
        "Classic Italian dish with homemade meatballs and marinara sauce.",
      image: "https://example.com/images/spaghetti_meatballs.jpg",
      category: "Dinner",
    },
  ],
};

const data1 = Object.keys(menuData);
const buttonContainer = document.querySelector(".button-container");
const cardContainer = document.querySelector(".Cards");

const buttons = () => {
  data1.forEach((keys) => {
    const button = document.createElement("button");
    button.className =
      "m-1 p-1 border border-gray-300 rounded-md cursor-pointer bg-slate-500 text-black hover:bg-red-400";
    button.textContent = keys;
    buttonContainer.appendChild(button);

    button.addEventListener("click", () => {
      updateCards(keys); //* This step is very crucial , i am lagging here only , otherwise i displayed the data, here we are sending data to the next function according to on which button we clicks . According to that updateCards are creating the 
    });
  });
};

const updateCards = (keys) => {
  cardContainer.innerHTML = "";
  const items = menuData[keys];

  items.forEach((data) => {
    const { name, description, price } = data;
    const card = document.createElement("div");
    card.className =
      "flex flex-col text-start border border-gray-300 rounded-md p-2 m-2 w-64 h-46 hover:border border-2 border-slate-600";
    card.innerHTML = `
      <p class="text-lg font-semibold mb-2">${name}</p>
      <p class="text-md mb-2">Price: $${price.toFixed(2)}</p>
      <p>Description: ${description}</p>
    `;
    cardContainer.appendChild(card);
  });
};

buttons();
updateCards("All");
