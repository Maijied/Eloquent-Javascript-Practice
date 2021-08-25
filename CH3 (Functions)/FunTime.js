//Too much recursion ;)
//So stack requires space
//Dim age na murgi age
function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
console.log(chicken() + " came first.");