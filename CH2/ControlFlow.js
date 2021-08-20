// Arithmetic operation
 var Arithmetic = (100 + 400) * 4;
 console.log("Arithmetic: " + Arithmetic);
 
 //String
 var String = "Patch my boat with chewing gum";
 console.log("String: " + String);

 var NewLineString = "Patch my boat with chewing gum \nPatch my 2'nd boat with chewing gum";
 console.log("New Line String: " + NewLineString);

 //Double backslash to print a backslash
 var A_NewLineCharacter = "A newline character is wriiten like \"\\n\".";
 console.log("Use Backslash: " + A_NewLineCharacter);

 //String concate
 var concate = "My"+" Name"+" Is"+" Khan";
 console.log("Concare Result: " + concate);

 //TypeOf Values
 var FractionalValue = 3.14;
 console.log(typeof(Arithmetic));
 console.log(typeof(String));
 console.log(typeof(concate));
 console.log(typeof(FractionalValue));
 console.log(typeof(-(10-2)));

 //Boolean type by compare
 var TrueBool = 321 > 231;
 var FalseBool = 321 < 231;
 var StringCompare = "AvadaKedavra" < "Sectumsempra";
 var LowercaseStringCompare = "avadaKedavra" > "Sectumsempra"; //Uppercase letters always 'less' than lowercase one's.

 console.log("True boolean Type: " + TrueBool);
 console.log("False boolean Type: " + FalseBool);
 console.log("String compare boolean Type: " + StringCompare);
 console.log("Lowercase string compare boolean Type: " + LowercaseStringCompare);

 //Logical operator
 // (flase || true) && !(false && true)
 var CheckLogicalBool = (4 >= 6 || "Maizied" != "Hasan") && !(12 * 2 == 144 && true); 
 console.log("Logical Operator: " + CheckLogicalBool);

 //decrement value by new value
 var InitialVal = 999;
 InitialVal = InitialVal - 111;
 console.log("Decrement: " + InitialVal);
 
//Differnet print function. Works in browser
// alert("Hey, Your hair is on fire..!");
//alert(Math.max(2, 4)); //Math.max funtion => Gives back the biggest of two.
//alert(Math.min(2, 4) + 10); //Math.min funtion => Gives back the lowest of two.

