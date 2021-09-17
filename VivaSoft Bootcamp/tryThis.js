//Example 1
function anotherFun(){
    // console.log(this); //window
}

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function(){
        // console.log(this); //Person
        // console.log(this.id, this.firstName , this.lastName);
        anotherFun();
    }
  };
  person.fullName();

//This alone
// "use strict";
let x = this;
// console.log(x); //with and without "use strict"=> window

function a(){
    // console.log(this); // "use strict" => undefined || without => window
}
a();



(function(){
    "use strict"
    let x = this;
    // console.log("x", x); //Without use strict => window || with use strict => undefined

    function xyz(){
        // console.log("iffe", this); //Without use strict => window || with use strict => undefined
    }
    xyz();

})();


// this in Event Handlers
// In HTML event handlers, this refers to the HTML element that received the event:

{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}

//==================== Object Method Binding ============================//
const person1 = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
    //   console.log(this); //person1 obj
    //   return this.firstName + " " + this.lastName; //John Doe
    }
  };
person1.myFunction();
//this.firstName means the firstName property of this (person1) object.

// =================== Explicit Function Binding =============================== //
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

const personA = {
    fullName: function() {
        // console.log(this); //personB obj
        // return this.firstName + " " + this.lastName; //John Doe
    }
  }
  const personB = {
    firstName:"John",
    lastName: "Doe",
  }
  personA.fullName.call(personB);
//when calling personA.fullName with personB as argument, this will refer to personB,
//even if it is a method of personA


