class circle{
    constructor(radius){
        this._radius = radius;
    }
    //method
    computedArea(){
        return Math.PI * this._radius * this._radius;
    }
    //Getter
    get area(){
        return Math.PI * this._radius * this._radius + ' Getter';
    }
    //Setter
    set radius(r){
        this._radius = r;
    }
}
var c = new circle(4); 
console.log(c); //circle { _radius: 4 }
console.log(c.computedArea()); //50.26548245743669
console.log(c.area); //50.26548245743669Getter
c.radius = 6;
console.log(c.area);  //113.09733552923255 Getter