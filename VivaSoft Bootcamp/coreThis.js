//implicit binding
//explicit binding
//new binding
//window binding


// ========implicit binding=========//
//find, from where the function is called and check is it included 'dot notation'. Because imidiet
// left of the dot notation denote 'this'

//Example 1
var player = {
    name: `Sakib`,
    age: 35,
    playerName:() => {
        console.log(this.name);
    },
};
player.playerName();

// Example 2
// var printPlayerNameFunction = function (obj){
//     obj.printPlayerName = function (){
//         console.log(this.age);
//     };
// };

// var sakib = {
//     name: `Sakib`,
//     age: 30,
// };
// var tamim = {
//     name: `Tamim`,
//     age: 35,
// };
// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

//Example 3
// var Person = function (name, age){
//     return {
//         name: name,
//         age: age,
//         printInfo: function () {
//             console.log(this.name, this.age);
//         },
//         father: {
//             name: "Mr. A",
//             fatherName: function (){
//                 console.log(this.name);
//             },
//         }
//     };
// };

// var sakib = Person(`Sakib`, 30);
// sakib.printInfo(); //Sakib
// sakib.father.fatherName(); //Mr. A


//=================Explicit Binding================//

//Example 1
// var printName = function (v1, v2, v3){
//     console.log(`${this.name} is ${v1}, ${v2}, ${v3}.`);
// }

// sakib = {
//     name: `Sakib`,
//     age: 30
// };

// var v1 = `Hadsome`;
// var v2 = `All-rounder`;
// var v3 = `Best-Spinner`;

// var v = [v1,v2,v3];

//Using .call()
// printName.call(sakib, v1, v2, v3);

//use array in-stead of single argument => apply()
// printName.apply(sakib, v); //Sakib is Hadsome, All-rounder, Best-Spinner.

//using .bind()
// var bindPrintName = printName.bind(sakib, v1, v2, v3);
// bindPrintName(); //Sakib is Hadsome, All-rounder, Best-Spinner.

//=========== New Binding ============//

//function player(name, age){
    //By default create a object
    //let this = object.create(null); => Like this
//     this.name = name;
//     this.age = age;
//     console.log(`${name} is ${age} years old.`);
// }
// var sakib = new player(`Sakib`, 30);//Sakib is 30 years old.

//=========== Window Binding =========//

// var printName = function (){
//     console.log(this); //Object [global] => window object
//     console.log(this.name); //undefined
// }

// var sakib = {
//     name: sakib,
// };
// printName();