const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);
itemsRef.forEach((item) => {
console.log(`category: ${item.firstElementChild.textContent}`);
console.log(`elements: ${item.lastElementChild.children.length}`);
});

