const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.createElement('ul');

const vegListRef = ingredients.map(ingredient => {
  const vegetablesRef = document.createElement('li');
  vegetablesRef.classList.add("item");
  vegetablesRef.textContent = ingredient;
  return vegetablesRef;
});
// console.log(vegListRef);
ulRef.append(...vegListRef);
// console.log(ulRef);
document.body.append(ulRef);


