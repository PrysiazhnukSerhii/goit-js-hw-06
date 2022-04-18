const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");


let elements = ingredients.map(element => {

  const itemEl = document.createElement("li");
  const textEl = document.createElement("p");

  textEl.textContent = element;

  itemEl.classList.add("item")
  itemEl.appendChild(textEl)

  return itemEl;

})

listIngredients.append(...elements)



