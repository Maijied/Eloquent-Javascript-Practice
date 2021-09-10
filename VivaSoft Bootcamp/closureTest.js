var anotherAmount = 500;
function upperFun(amount){
    console.log(anotherAmount);
    return function(){
        console.log(`ClosureValue: ${amount}`);
    }
}
var getInner = upperFun(anotherAmount);
getInner();
console.dir(getInner);