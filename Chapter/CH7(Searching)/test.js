{
    var thing = "JS"
}

console.log(thing);

var name = "JavaScript";


function foo() {
    console.log(name);
    name = "Another JavaScript";
}
console.log(name);
foo()
console.log(name);


var variable = "top-level";

function printVariable() {
  console.log("inside printVariable, the variable holds '" +
        variable + "'.");
}

function test() {
 
  console.log("inside test, the variable holds '" + variable + "'.");
  var variable = "local";
  printVariable();
}

test();

var name1 = "JavaScript";
function foo1() {
    console.log(name1);
    var name1 = "Another JavaScript";
}

foo1();

