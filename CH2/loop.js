//Single line program
//Sqrt of a number, prompt works in browser
// var Number = Number(prompt("Pick any number",""));
console.log("The number is the sqrt of " + (Number * Number)); 

//Loop using while
var CurrentNumber = 0;
while(CurrentNumber <= 10){
    console.log("Current Number: " + CurrentNumber);
    CurrentNumber += 2; 
}

//A 'counter' variable with  a while loop. this program multiply something by 2
var Result = 1;
var Counter = 0;
while(Counter < 10){
    Result *= 2;
    Counter += 1;
}
console.log("Result: " + Result);

//Resues string that the previous itearation of the loop used and add character '#' on it
var Line = "";
var LineCounter = 0;
while(LineCounter < 10){
    Line += "#";
    console.log(Line);
    LineCounter += 1;
}

//Using 'for' instead of 'while'. 
//A 'counter' variable with  a 'for' loop. this program multiply something by 2
var ForResult = 1;
for(var ForCounter = 0; ForCounter < 10; ForCounter += 1){
    ForResult *= 2;
    console.log("ForResult: " + ForResult);
}

//Resues string that the previous itearation of the loop used and add character '#' on it
var ForLine = "";
for(var ForLineCounter = 0; ForLineCounter <10; ForLineCounter += 1){
    ForLine += "#";
    console.log(ForLine);
}

//All numbers between 0 to 20 which aare divisible by 3 and by 4
for(DiviCounter = 0; DiviCounter < 20; DiviCounter++){
    if(DiviCounter % 3 == 0 && DiviCounter % 4 == 0){
        console.log("DiviCounter: " + DiviCounter);
    }
}

//Find divisible by 4 or not using 'if'
for(DiviByFourCounter = 0; DiviByFourCounter < 20; DiviByFourCounter++){
    if( DiviByFourCounter % 4 == 0){
        console.log("DiviByFourCounter: " + DiviByFourCounter);
    }
    if(DiviByFourCounter % 4 != 0){
        console.log("!DiviByFourCounter: "+ DiviByFourCounter);
    }
}
//Find divisible by 4 or not using 'if/else'
for(var DiviByFourCounter_IfElse = 0; DiviByFourCounter_IfElse < 20; DiviByFourCounter_IfElse++){
    if( DiviByFourCounter_IfElse % 4 == 0){
        console.log("DiviByFourCounter_IfElse: " + DiviByFourCounter_IfElse);
    }
    else{
        console.log("!DiviByFourCounter_IfElse"+ DiviByFourCounter_IfElse);
    }
}



