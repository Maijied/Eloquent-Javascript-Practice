//Compare values
//Return true
alert( null == undefined);
alert( false == 0);
alert( "" == 0);
alert( "5" == 5);

//return false
alert( null == undefined);
alert( false == 0);
alert( "" == 0);
alert( "5" == 5);

//undefined -> false
var maybeNull = null;
if(maybeNull){
    console.log("maybeNull has a value");
}

//Automatic type conversion
alert("Apollo" + 5); //Apollo5
alert(null + "iffy"); //nulliffy
alert("5" + 5); //55
alert("Vivasoft" * 5); //NaN
alert(Number("5" * 5)); //25

false || alert("I'm not happening!"); //I'm not happening!
true || alert("Not me.") // true
