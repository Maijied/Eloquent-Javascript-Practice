let x = 10;
// let x = 20;
console.log(x);

var y = 20;
var y = 60;
console.log(y);

{
    var z = 2;
    //let z = 2; //cannot use let
    // const zz = 5; //cannot use const
}
console.log(z);

let xx = 10; {
    let xx = 2;
}
console.log(xx);

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);


const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";
car.owner = "Johnson";
console.log(car);

const PI = 3.141592653589793 + 10;
//PI = 3.14; // This will give an error
//PI = PI + 10; // This will also give an error
console.log(PI);

let v16 = 16 + "Volvo";
console.log(v16);

let cx; // Now x is undefined
console.log(cx);
cx = 5; // Now x is a Number
console.log(cx);
cx = "John"; // Now x is a String
console.log(cx);

let sy = 123e5; // 12300000
let sz = 123e-5; // 0.00123
console.log(sy, sz);

let fx = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}
console.log(fx);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
fn = person.fullName; //[Function: fullName]
fn2 = person.fullName();
console.log(fn2); //John Doe

//Check  escape sequences
// let checkString = "The 6 \b escape \f characters \r above \t were \v originally designed to control typewriters, teletypes, and fax machines. They do not make any sense in HTML. ";
// console.log(checkString);

let xz = "John";
let yz = new String("John");
console.log(yz);

let str = "Apple, Banana, Kiwi";
str.slice(7, 13);
console.log(str.slice(7, 13)); // Returns Banana
console.log(str.slice(7)); //Banana, Kiwilog
console.log(str.length);

let str2 = "Apple, Banana, Kiwi";
console.log(str2.substring(7, 13)); //Banana
console.log(2 - "3");

let obj = {
    name: "JS",
    getInfo: function() {
        setTimeout(function() {
            console.log(this)
        }, 0)
    }
}

obj.getInfo()