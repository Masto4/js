var fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits);

fruits.pop();
console.log(fruits);

// var addFruit = prompt('Add a new fruit to the list');
// fruits.push(addFruit);
// console.log(fruits);


var newlyArivedFruit = fruits.shift();
console.log(newlyArivedFruit);


// var addFruitStart = prompt('add fruit to the beginning');
// fruits.unshift(addFruitStart);
// console.log(fruits);




var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var index = prompt('tell index number from where you have to start the removing numbers');
// var quantity = prompt('tell the quantity');

// numbers.splice(index, quantity);

console.log(numbers);




var index = prompt('tell index number from where you have to start extracting numbers');
var quantity = prompt('tell the quantity');

console.log(numbers.slice(index, quantity));