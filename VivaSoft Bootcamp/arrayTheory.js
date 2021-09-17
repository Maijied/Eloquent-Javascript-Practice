//================= JavaScript Array constructor =============================//
//The constructor property returns the function that created the Array prototype.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.constructor); //ƒ Array() { [native code] }

//================= JavaScript Array copyWithin() ===========================//
// The copyWithin() method copies array elements to another position in an array, overwriting the existing values.
// The copyWithin() does not add items to the array.
// copyWithin() overwrites the original array.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.copyWithin(2, 0));
