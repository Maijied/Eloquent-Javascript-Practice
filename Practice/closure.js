function a(){
    let name = `Myname`;
    function b(){
        let name2 = name;
    }
}
let clo = a();
console.log(clo);