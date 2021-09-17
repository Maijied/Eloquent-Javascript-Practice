class company{
    constructor(brand){
        this._brand = brand;
    }
    get brandValue(){
        return `${this._brand} value is ${Math.random()}M`;
    }
    set brandName(b){
        this._brand = b;
    }
}

class car{
    constructor(name){
        super(name);
    }
    setName(setCarName){
        super.brand = setCarName;
    }
}
// var valueInfo = new company(`BMW`);
// console.log(valueInfo.brandValue); //BMW value is 0.41018085533520177M
// valueInfo.brandName = `Porsche`;
// console.log(valueInfo.brandValue); //Porsche value is 0.23017014146061543M

var carInfo = new car('Tesla');
console.log(carInfo);
console.log(carInfo.brandValue);