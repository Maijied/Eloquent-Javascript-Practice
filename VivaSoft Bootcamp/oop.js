//Object
var obj = {
    name: `Abc`,
    age: 20,
    info: function(){
        console.log(this); //obj
        another();
    }
}
function another(){
    console.log( this); //window
}

//Creating obj using new
var student = new Object();
student.name = "Monir";
student.age =  25;
student.subject = "CSE";

function studObj(){
    console.log(student.name);
}
studObj();

console.log(student.name, student.age, student.subject);

//Creating object using constractor
function stud(name, age){
    this.name = name ;
    this.age = age;
    console.log(this.name);

}
var newStud = stud("Rumman", 26);

//JS class implementation
class cars{
    constructor(name, maker, price){
        this.name = name;
        this.maker = maker;
        this.price = price;
        console.log(`Cons`,this)
    }
    getCarDetails(){
        console.log(this);
        return (`The name of this car is ${this.name}.`)
    }
}
let car1 = new cars("BMW", 'BMW com', `$90k`);
console.log(car1.name);
console.log(car1.getCarDetails());

//Encapsulation
class emp_Details{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    addAdress(address){
        this.address = address;
    }
    getEmpDetails(){
        console.log(this);
        console.log(`Employee id ${this.id}, name: ${this.name}, and address: ${this.address}`);
    }
}
let person1 = new emp_Details(01, `Rakib`);
person1.addAdress(`Mirpur DOHS`);
person1.getEmpDetails();