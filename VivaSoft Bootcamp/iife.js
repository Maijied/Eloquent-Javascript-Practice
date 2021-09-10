// (function (){

// })();

// Arrow
// (()=>{

// })()

//Make varibale private
// (function (){
//     var userName = "XYZ";
//     function display(name){
//         console.log(name);
//     }
// display(userName);
// })();

// Immediately Invoked Function Expression (IIFE)

(function () {
    var userName = "Maizied";
    
    function display(name)
    {
        console.log("IIFE: " + name);
    }

    display(userName);
  })();

  (function (){
      var player = `Sakib`;

      function displayPlayerName(name){
          console.log(`PlayerName: ${name}`);
      }
      displayPlayerName(player);
  })();

