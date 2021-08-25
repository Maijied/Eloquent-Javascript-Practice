// Access properties
var text = "purple haze";
console.log(text.length); //11

var nothing = null;
//console.log(nothing.length); //Cannot read property 'length' of null

//Different with values of type object
var cat = {colour: "gray", name: "Spot", size: 46};
cat.size = 47;
console.log(cat.size);
delete cat.size; //cut off property
console.log(cat.size); //Trying to read a non-existant property
console.log(cat);
/* 47
   undefined
 { colour: 'gray', name: 'Spot' } */

 var empty = {};
 empty.notReally = 1000;
 console.log(empty.notReally);

 //invalid variables name quoted when creating object
 var things = {"gabba gabba": "hey", "5": 10};
 console.log("Things: " + things["5"]); //Things: 10
 things["5"] = 20;
 console.log(things[2 + 3]); //20
 delete things["gabba gabba"];

 //The part between the brackets can be any expression
 //String converted
 var propertyName = "length";
 var propertyText = "mainline";
 console.log("Property: " + propertyText[propertyName]); //Property: 8

 //To test an object used "in" operator, returns boolean value
 var chineseBox = {};
 chineseBox.content = chineseBox;
 console.log("content" in chineseBox); //true
 console.log("content" in chineseBox.content); //true
console.log(chineseBox);

//also "in" operator used to find object in a set 
var set = {"Spot":true};
set ["White Fang"] = true;
console.log(set); //{ spot: true, 'White Fang': true }
delete set["Spot"];
console.log("Ashoka" in set); //false

//Collection of separeate string
var mailArchive = {0: "(1st mail)",
                   1: "(2nd mail)", 
                   2: "(3rd mail)"};
for(var current = 0; current in mailArchive; current++)
    console.log("Processing e-mails: #", current, ";", mailArchive[current]);
/* outputs ->
    Processing e-mails: # 0 ; (1st mail)
    Processing e-mails: # 1 ; (2nd mail)
    Processing e-mails: # 2 ; (3rd mail) */

//range function
function range(upto){
  var result = [];
  for(var i = 0; i <= upto; i++){
    result[i] = i;
  }
  return result;
}
console.log(range(4)); //[ 0, 1, 2, 3, 4 ]

//Multiple methods
var mack = [];
mack.push("Mack");
mack.push("The");
mack.push("knife");
console.log(mack.join(" ")); //Mack The knife
console.log(mack.pop()); //knife
console.log(mack); //[ 'Mack', 'The' ]

//split
var words = "Cities of the interior";
console.log(words.split(" ")); //[ 'Cities', 'of', 'the', 'interior' ]

//slpit with join
var sjArray = ["a","b","c d"];
console.log(sjArray.join(" ").split(""));
/*[
  'a', ' ', 'b',
  ' ', 'c', ' ',
  'd'
]*/

//Using charAt
var paragraph = "born 15-11-2003 (mother spot): white fang";
console.log(paragraph.charAt(0) == "b" && paragraph.charAt(0) == "b" && paragraph.charAt(0) == "b" && paragraph.charAt(0) == "b"); //true
//shorter version using slice
console.log(paragraph.slice(0, 4) == "born"); //true

//date object
var toDay = new Date();
console.log(toDay);  //2021-08-25T12:22:46.672Z
console.log("Year: ", toDay.getFullYear(), ", Month: ", toDay.getMonth(), ", Day: ", toDay.getDay()); //Year:  2021 , Month:  7 , Day:  3

