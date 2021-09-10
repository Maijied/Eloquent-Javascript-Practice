

// The JavaScript this keyword refers to the object it belongs to.
var a = 200;
function checkThis(){
    var a = 100;
    console.log("LocalVar" + a);
    console.log("thisVar" + this.a);
}
checkThis();

var myVar = 100;
function WhoIsThis() {
    var myVar = 200;
    console.log("myVar = " + myVar); // 200
    console.log("this.myVar = " + this.myVar); // 100
}
WhoIsThis();

function SomeFunction() {
    var myVar = 100;
    function WhoIsThis() {
        var myVar = 200;
        alert("myVar = " + myVar); // 200
        alert("this.myVar = " + this.myVar); // 100
    }
    WhoIsThis(); 
}
SomeFunction();

