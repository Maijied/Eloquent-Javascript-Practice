// =============== callback ================================= //
// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// =============== Higher-Order Functions ===================== //
// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. 
// They can be passed into other functions as parameters or returned from them as well.
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//Callback function Example 1
function iWillCallYou(tmpVal2){
    console.log(`Called from 1st Local ${tmpVal2}`);
}

function iAmTheCaller(tmpVal, tmpFun){
    console.log(`I'm the 1st local ${tmpVal}`);
    tmpFun(tmpVal);
}
iAmTheCaller(`function`, iWillCallYou); //Pass function without parenthesis

//Callback Function Example 2

function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = `Sakib Al Hasan`;
    callback(name);
  }
  
  processUserInput(greeting);
