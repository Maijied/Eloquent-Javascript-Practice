// arithmetic operation
 var arithmetic = (100 + 400) * 4;
 console.log("arithmetic: " + arithmetic);
 
 //string
 var string = "Patch my boat with chewing gum";
 console.log("string: " + string);

 var NewLineString = "Patch my boat with chewing gum \nPatch my 2'nd boat with chewing gum";
 console.log("New line string: " + NewLineString);

 //Double backslash to print a backslash
 var a_NewLineCharacter = "A newline character is wriiten like \"\\n\".";
 console.log("Use Backslash: " + a_NewLineCharacter);

 //string concate
 var concate = "My"+" Name"+" Is"+" Khan";
 console.log("Concare result: " + concate);

 //TypeOf Values
 var fractionalValue = 3.14;
 console.log(typeof(arithmetic));
 console.log(typeof(string));
 console.log(typeof(concate));
 console.log(typeof(fractionalValue));
 console.log(typeof(-(10-2)));

 //Boolean type by compare
 var trueBool = 321 > 231;
 var falseBool = 321 < 231;
 var stringCompare = "AvadaKedavra" < "Sectumsempra";
 var lowercaseStringCompare = "avadaKedavra" > "Sectumsempra"; //Uppercase letters always 'less' than lowercase one's.

 console.log("True boolean Type: " + trueBool);
 console.log("False boolean Type: " + falseBool);
 console.log("string compare boolean Type: " + stringCompare);
 console.log("Lowercase string compare boolean Type: " + lowercaseStringCompare);

 //Logical operator
 // (flase || true) && !(false && true)
 var checkLogicalBool = (4 >= 6 || "Maizied" != "Hasan") && !(12 * 2 == 144 && true); 
 console.log("Logical Operator: " + checkLogicalBool);

 //decrement value by new value
 var initialVal = 999;
 initialVal = initialVal - 111;
 console.log("Decrement: " + initialVal);
 
//Differnet print function. Works in browser
// alert("Hey, Your hair is on fire..!");
//alert(Math.max(2, 4)); //Math.max funtion => Gives back the biggest of two.
//alert(Math.min(2, 4) + 10); //Math.min funtion => Gives back the lowest of two.

