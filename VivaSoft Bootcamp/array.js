// The Array object is used to store multiple values in a single variable.
// In programming, an array is a collection of elements or items. 
// Arrays store data as elements and retrieve them back when you need them.


// Here is an example of an array with four elements: type Number, Boolean, String, and Object.

const mixedTypedArray = [100, true, 'freeCodeCamp', {name: `ABC`, type: `blog`,}] //Create an Array
console.log(mixedTypedArray);

let fruits = [`Apple`, `Mango`]; //Create an Array
console.log(fruits);        //[ 'Apple', 'Mango' ]
console.log(fruits.length); //get length of an array => 2

let firstFruit = fruits[0]; //Access an Array item using the index position
console.log(firstFruit);    //Apple

let lastFruit = fruits[fruits.length - 1];
console.log(lastFruit); //Mango

var forEachItem = [];
// Loop over an Array
fruits.forEach(function(item, index, array){
    console.log(index, item , array); //0, Apple 1, Mango [ 'Apple', 'Mango' ]
    forEachItem.push(item)
    console.log('ForEachItem:', forEachItem); //ForEachItem: [ 'Apple', 'Mango' ]
});

mixedTypedArray.forEach(function(item, index){
    console.log(index, item);
// 0 100
// 1 true
// 2 freeCodeCamp
// 3 { name: 'ABC', type: 'blog' }
});

//Practicing arrow function in forEach
mixedTypedArray.forEach((item, index) => {
     console.log(`Using Arrow in forEach: `, item);
});

let newArrayItem = fruits.push('Orange'); //[ 'Apple', 'Mango', 'Orange' ]
console.log('Push: ', fruits);  //[ 'Apple', 'Mango', 'Orange' ]

//Remove an item from the end of an Array
let popFruit = fruits.pop();
console.log('pop(): ', popFruit); //Orange
console.log('After pop(): ', fruits); //[ 'Apple', 'Mango' ]

//Remove an item from the beginning of an Array
let removeFirstFruit = fruits.shift();
console.log('Shift: ', removeFirstFruit); //Apple
console.log('After Shift: ', fruits); //[ 'Mango' ]

//Add an item to the beginning of an Array
let addFirstItem = fruits.unshift('Apple');
console.log('Unshift: ', fruits); //Unshift:  [ 'Apple', 'Mango' ]
let pushAnotherIteminArray = fruits.push('Coconut', 'Lichi','Pineapple','Lemon', 'Kiwi'); //Added another item at the last of array
console.log(fruits); // [ 'Apple', 'Mango', 'Coconut', 'Lichi', 'Pineapple', 'Lemon', 'Kiwi' ]
console.log(fruits.length); //7

let findArrayElememtIndex = fruits.indexOf('Apple'); //Find Array Elememt Index:  0
console.log('Find Array Elememt Index: ', findArrayElememtIndex); // 0

// Remove an item by index position
let removeItemByIndex = fruits.splice(1, 2); //Here, 1 => index number; 2 => how many elements you want to remove
console.log('Removed Item By Index: ', fruits); // [ 'Apple', 'Lichi', 'Pineapple', 'Lemon', 'Kiwi' ]

//Delete and Add items using splice
let addUsingSplice = fruits.splice(1, 2, 'Orange', 'Banana');
console.log(fruits);

//Copy an array
let arrayCopyUsingSlice = fruits.slice();
console.log(arrayCopyUsingSlice); //[ 'Apple', 'Orange', 'Banana', 'Lemon', 'Kiwi' ]
console.log(fruits);
