function forEach(array, action){
    for(var i = 0; i <array. length; i++){
        action(array[i]);
    }
}
forEach(["Hello", "Vivasoft", "Ltd"], console.log);
/* Hello
   Vivasoft
   Ltd */

