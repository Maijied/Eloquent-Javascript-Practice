//Single line program
//Sqrt of a number, prompt works in browser
// var Number = Number(prompt("Pick any number",""));
console.log("The number is the sqrt of " + (Number * Number)); 

//Loop using while
var currentNumber = 0;
while(currentNumber <= 10){
    console.log("Current Number: " + currentNumber);
    currentNumber += 2; 
}

//A 'counter' variable with  a while loop. this program multiply something by 2
var result = 1;
var counter = 0;
while(counter < 10){
    result *= 2;
    counter += 1;
}
console.log("result: " + result);

//Resues string that the previous itearation of the loop used and add character '#' on it
var line = "";
var lineCounter = 0;
while(lineCounter < 10){
    line += "#";
    console.log(line);
    lineCounter += 1;
}

//Using 'for' instead of 'while'. 
//A 'counter' variable with  a 'for' loop. this program multiply something by 2
var forResult = 1;
for(var forCounter = 0; forCounter < 10; forCounter += 1){
    forResult *= 2;
    console.log("forResult: " + forResult);
}

//Resues string that the previous itearation of the loop used and add character '#' on it
var forLine = "";
for(var forLineCounter = 0; forLineCounter <10; forLineCounter += 1){
    forLine += "#";
    console.log(forLine);
}

//All numbers between 0 to 20 which aare divisible by 3 and by 4
for(diviCounter = 0; diviCounter < 20; diviCounter++){
    if(diviCounter % 3 == 0 && diviCounter % 4 == 0){
        console.log("diviCounter: " + diviCounter);
    }
}

//Find divisible by 4 or not using 'if'
for(diviByFourCounter = 0; diviByFourCounter < 20; diviByFourCounter++){
    if( diviByFourCounter % 4 == 0){
        console.log("diviByFourCounter: " + diviByFourCounter);
    }
    if(diviByFourCounter % 4 != 0){
        console.log("!diviByFourCounter: "+ diviByFourCounter);
    }
}
//Find divisible by 4 or not using 'if/else'
for(var diviByFourCounter_IfElse = 0; diviByFourCounter_IfElse < 20; diviByFourCounter_IfElse++){
    if( diviByFourCounter_IfElse % 4 == 0){
        console.log("diviByFourCounter_IfElse: " + diviByFourCounter_IfElse);
    }
    else{
        console.log("!diviByFourCounter_IfElse"+ diviByFourCounter_IfElse);
    }
}

//Add 2 star(*) if greater than 15, 1 start(*) if greater than 10 else no start
for(var startCounter = 0; startCounter < 20; startCounter++){
    if(startCounter > 15)
        console.log(startCounter + "**");
    else if(startCounter > 10)
        console.log(startCounter + "*");
    else
        console.log(startCounter);
}

//Program using "Prompt", Value of 5+5
//Works in browser
var answer = prompt("Hey you! What is the value of 5+5?","");
if(answer == 10)
    alert("You must be a genius or something");
if(answer == 9 || answer == 11)
    alert("Almost! try again bra.")
else
    alert("You're a dumass");   


//Using "Break" to break a loop
for(var loopBreak = 20; ;loopBreak++){
    if(loopBreak % 7 == 0){
        break;
    }
}
console.log(loopBreak);

//Simple edition of previous code
for(var simpleLoopBreak = 20; simpleLoopBreak % 7 != 0; simpleLoopBreak++)
;
console.log(simpleLoopBreak);

//Previous prompt problem solved using "whilte" and "break"
var whilePromptAnswer;
while(true){
    whilePromptAnswer = prompt("Hey you! What is the value of 5+5?","");
    if(whilePromptAnswer == 10){
        alert("Sobai pare");
        break;
    }
    else if(whilePromptAnswer == 9 || whilePromptAnswer == 11){
        alert("Arekto poralikha kora lagbe..!");
        break;
    }    
    else{
        alert("Gad....!");
        break;
    }
}

