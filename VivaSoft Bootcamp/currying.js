// Currying is a process in functional programming in which we can transform a function
// with multiple arguments into a sequence of nesting functions.

//Traditional way
function multiply(a,b,c){
    return a*b*c;
}
multiply(5,6,7);

//Currying way
function curryingMultiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
curryingMultiply(5)(6)(7);

let step1 = curryingMultiply(5);
let step2 = step1(6);
let step3 = step2(7);
console.log(`Step 3: ${step3}`);

//Why we'll use currying
//Tradtional way
function discount(price, disc){
    return price - price * disc;
}
let customer1 = discount(100, .1);
let customer2 = discount(200, .1);
let customer3 = discount(300, .1);
console.log(`Discounted price: ${customer1}`);
console.log(`Discounted price: ${customer2}`);
console.log(`Discounted price: ${customer3}`);

//Currying way
function curryingDiscount(curryingDisc){
    return (curryingPrice) => {
        return curryingPrice - curryingPrice * curryingDisc;
    }
}

let tenPercentDiscount = curryingDiscount(.1); //This is called `Prtial Function`
let twentyPercentDiscount = curryingDiscount(.2); //This is also Partial function
let customerID1 = tenPercentDiscount(500);
let customerID2 = tenPercentDiscount(600);
let customerID3 = tenPercentDiscount(700);
let customerID4 = twentyPercentDiscount(1500);

console.log(customerID1);
console.log(customerID2);
console.log(customerID3);
console.log(customerID4);