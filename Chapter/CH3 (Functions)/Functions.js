//Simple "add" function
//return a+b
function add(a, b){
    return a + b;
} 
console.log("Add Function: " + add(2,1));

//Computing power
function power(base, exponent){
    var powerResult = 1;
    for(var powerCount = 0; powerCount < exponent; powerCount++){
        powerResult *= base;
    }
    return powerResult;
}
console.log("Power Function: " + power(2, 10));

//Absolute value of a number
function absolute(absoluteNumber){
    if(absoluteNumber < 0)
        return -absoluteNumber;
    else
        return absoluteNumber    
}
console.log("Absolute value of a number: " + absolute(-144));

//if no return statement is encountered, the function returns "undefined"
function yell(message){
    alert("Message: " + message)
}
yell("Hello undefined.");

//"Shadow" top-level variable
//Didn't understand
function alertIsPrint(alertValue){
    var alert = print;
    alert(alertValue);
}
alertIsPrint("Troglodites");


//Access inside, outside variabe
var variable = "Top-Level";
function printVariable(){
    console.log("inside printVariable, the variables holds '" + variable + "'.");
}
function testPrintVariable(){
    var variable = "local";
    console.log("inside test, the variables holds '" + variable + "'.");
    printVariable();
}
testPrintVariable();
/*outputs -> 
inside test, the variables holds 'local'.
inside printVariable, the variables holds 'Top-Level'. */

//local enviroment will be based on local enviroment
var in_outsideVariable = "Another-Top-Level";
function parentFunction(){
    var in_outsideVariable = "local";
    function childFunction(){
        console.log(in_outsideVariable);
    }
    childFunction();
}
parentFunction();
//Output -> local

//Create new scope between braces
var something = 1;
{
    var something = 2;
    console.log("Inside: " + something);
}
console.log("Outside: " + something);
/*Outputs -> 
Inside: 2
Outside: 2*/ 

//Parent function returns it's internal function  //Closure
var gloLocbVariable = "Glob-Top-Variable";
function anotherParentFunction(){
    var gloLocbVariable = "Loc-Variable";
    function anotherChildFunction(){
        console.log(gloLocbVariable);
    }
    return anotherChildFunction;
}
var child = anotherParentFunction();
child();

//Syntesis functions
function makeAddFunction(addAmount){
    function makeAddNumber(addNumber){
        return addNumber + addAmount;
    }
    return makeAddNumber;
}
var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
console.log("MakeAddFunction: " + (addTwo(1) + addFive(1)));
//Output -> 9


//Recursive Function
function calPower(calBase, calExponent){
    if(calExponent == 0)
        return 1;
    else
        return calBase * calPower(calBase, calExponent - 1);
}
console.log("Recursive power: " + calPower(2, 3));

//Recurasion is not always just a less-efficient alternative to looping, some problems are much easier to solve with recursion
function findSequence(goal){
    function find(start, history){
        if(start == goal)
            return history;
        else if(start > goal)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") || find(start + 3, "(" + history + " + 3)");
    }
    return find(1, "1");

}
console.log("Sequence: " + findSequence(24));
//Output -> Sequence: (((((1 + 5) + 5) + 5) + 5) + 3)


