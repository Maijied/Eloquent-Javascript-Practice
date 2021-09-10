// A closure is the combination of a function bundled together (enclosed) with references to its surrounding
// state (the lexical environment). In other words, a closure gives you access to an outer function’s scope
// from an inner function. In JavaScript, closures are created every time a function is created, at function
// creation time.

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
//   var myFunc = makeFunc();
//   myFunc();
  
// var num1 = 10;
// var sum = function(){
//   var num2 = 20;
//   return function(){
//     return num1 + num2;
//   }
// }
// console.log(sum());
// var myFun = sum();
// console.dir(myFun);

// var sum = 0;
// function doSum(a){
//   return function(b){
//     console.log(a + b);
//     return a + b;
//   };
// };
// var temp = doSum(2);
// sum = sum + temp(8);


// function outerClo(a){
//   return function innerClo(b){
//     return a + b;
//   } 
// }
// var outerMainClo = outerClo(10);
// console.log(outerMainClo(2));

// function bankAccount(initialBalance){
//   var balance = initialBalance;
//   return function (){
//     return balance;
//   }
// }
// var account = bankAccount(1000);
// console.log(account());
// console.dir(account);

// function outerFunction(accessValue){
//   console.log(`Outer: ${accessValue}`);
//   return function innerFunction(){
//     console.log(`Inner: ${accessValue + 100}`);
//   }
// }
//  var InnerFun = outerFunction(100);
//  InnerFun();

// function Counter() {
    
//   var counter = 0;

//   setTimeout( function () {
//       var innerCounter = 0;
//       counter += 1;
//       console.log("OuterCounter = " + counter);

//       setTimeout( function () {
//           counter += 1;
//           innerCounter += 1;
//           console.log("Nextcounter = " + counter + ", innerCounter = " + innerCounter)
//       }, 0);

//   }, 5000);
// };

// Counter();
// https://www.tutorialsteacher.com/javascript/closure-in-javascript
// Closure means that an inner function always has access to the vars and parameters of its outer function,
//  even after the outer function has returned.

// (function(){
//   function outerFunction(accessValue){
//     console.log(`Outer: ${accessValue}`);
//     return function innerFunction(){
//       console.log(`Inner: ${accessValue + 100}`);
//       innerObj = {
//         name: `sakib`,
//       }
//       console.log(this);
//     }
//   }
//    var InnerFun = outerFunction(100);
//    InnerFun();
// })();

function bank(name){
  console.log(`Bank name: ${name}`);
  let amount = 500;
  return function accountBalance(){
    console.log(`Name: ${name} and Amount: ${amount}`);
  }
}
var bankInfo = bank(`AB Bank`);
bankInfo();