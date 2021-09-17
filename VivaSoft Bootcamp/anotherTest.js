function foo() {
    console.log(`Foo: `, this)
} 

let obj = {
    name: "JavaScript",
    speak: function() {
        console.log("They can speak");
    },
    getInfo: function() {
        console.log(`getInfo :`, this);
        foo();
    }
}

obj.getInfo();
