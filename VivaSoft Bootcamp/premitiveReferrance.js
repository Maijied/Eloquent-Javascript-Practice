let str1 = "Hi there, I am a string!";
    console.log(str1[1]); // "i"

    str1[1] = "e";
    console.log(str1); // "Hi there, I am a string!"

//Non-premitive data type
let obj1 = {
    name: `ABC`,
    location: `Mughdha`
}

let obj2 = obj1;
console.log(obj1);//{ name: 'ABC', location: 'Mughdha' }
console.log(obj2);//{ name: 'ABC', location: 'Mughdha' }
console.log(obj1 == obj2); //true

obj2.name = 'BC';
obj1.name = 'c';
obj2.location = `Nodda`;
console.log(obj1, obj2); //{ name: 'c', location: 'Nodda' } { name: 'c', location: 'Nodda' }

//Let's see another example
var ex =[1, 2, 3, 4, 5];
var ex2 = ex;
console.log(ex2); //[ 1, 2, 3, 4, 5 ]
ex2[4] = 6;
ex[0] = 0;
console.log(ex, ex2); //[ 1, 2, 3, 4, 6 ] [ 1, 2, 3, 4, 6 ]
console.log(ex[4]); //[ 1, 0, 3, 4, 6 ] [ 1, 0, 3, 4, 6 ]
console.log(ex.concat(ex2));
// [
//     1, 0, 3, 4, 6,
//     1, 0, 3, 4, 6
// ]