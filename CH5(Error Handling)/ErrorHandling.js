//return special value such as "undefined" or "false"
function between(string, start, end){
    var startAt = string.indexOf(start);
    if(startAt == -1){
        return undefined;
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if(endAt == -1){
        return undefined;
    }
    return string.slice(startAt, endAt);
}
console.log(between("abc")); //undefined
console.log(between("My name is khan", "My")); //undefined
console.log(between("My name is khan", "My", "khan")); // name is 

// var input = prompt("Tell me nothing", ""); //remove commen when compile in browser 
// var parenthesized = between(input, "(", ")"); //remove commen when compile in browser 
// if(parenthesized != undefined) //remove commen when compile in browser
//     console.log("You parenthesized '", parenthesized, "'."); //remove commen when compile in browser
    /*input -> (my name is maizied)
    output -> You parenthesized ' my name is maizied '.
    input -> Hello there.
    output -> undefined */

// Erro handling when special value is "undefined" in an array
function lastElement(array){
    if(array.length > 0)
        return array[array.length - 1];
    else
        throw "Can not take the last element of an empty array";
}
function lastElementPlusTen(array){
    return lastElement(array) + 10;
}
try{
    console.log(lastElementPlusTen([]));
}
catch(error){
    console.log("\nSomething went wrong.", error); //Something went wrong. Can not take the last element of an empty array
}
console.log(lastElement([1, 2, undefined])); //undefined

var currentThing = null;
function processingThing(thing){
    if(currentThing != null)
        throw "Oh no! We are already processing a thing."
    currentThing = thing;
    currentThing = null;
}


