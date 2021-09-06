function forEach(array, action){
    for(var i = 0; i <array. length; i++){
        action(array[i]);
    }
}
// forEach(["Hello", "Vivasoft", "Ltd"], console.log);
/* Hello
   Vivasoft
   Ltd */
//Ananymous function with less details
function sum(numbers){
    var total = 0;
    forEach(numbers, function (number){
        total += number;
    });
    return total;
}
// console.log(sum([1, 10, 100])); //111

//Another higher order function
function negate(func){
    return function(x){
        return !func(x);
    };
}
var isNotNaN = negate(isNaN);
console.log(isNotNaN(NaN)); //false

//"apply" method takes two arguments
function negat(fun){
    return function(){
        return !fun.apply(null, arguments)
    };
}
console.log(Math.min.apply(null, [5, 6])); //5

//algorithm varient of "sum" function , called "reduce" or "fold"
function reduce(combine, base, array){
    forEach(array, function(element){
        base = combine(base, element);
    });
    return base;
}
function add(a, b){
    return a + b;
}
function sum(numbers){
    return reduce(add, 0 ,numbers);
}

//Count zeraos from a number
function countZeros(countZeroArray){
    function counter(countZeroTotal, countZeroElements){
        return countZeroTotal + (countZeroElements == 0 ? 1 : 0);
    }
    return reduce(counter, 0 ,array);
}
console.log(countZeros([0, 1, 2, 3, 0, 0, 0, 1]));

// Fundamental algorithm "map"
function map(func, array){
    var result = [];
    array.forEach(element => {
        result.push(func(element));
    });
    return result;
}
console.log(map(Math.round, [0.01, 2, 9.89, Math.PI])); //Array(4) [ 0, 2, 10, 3 ]