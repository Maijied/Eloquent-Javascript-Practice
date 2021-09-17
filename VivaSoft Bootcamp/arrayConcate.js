// Multiple way of array concate
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); //[ 1, 2, 3, 4, 5, 6 ]

let arr3 = [1, 3, 5];
let arr4 = [2, 4, 6];
arr3.push(...arr4);
console.log(arr3); //[ 1, 3, 5, 2, 4, 6 ]

let arr5 = [0, 1];
let arr6 = [0, 2];
console.log([...arr5, ...arr6]); //[ 0, 1, 0, 2 ]

let arr7 = [1, 1, 1];
let arr8 = [2, 2, 2];
console.log(Array.of(...arr7, ...arr8)); //[ 1, 1, 1, 2, 2, 2 ]

let arr9 = [3, 3, 3];
let arr10 = [5, 5, 5];
console.log(new Array(...arr9,...arr10)); //[ 3, 3, 3, 5, 5, 5 ]