function log(date, importance, message){
    console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} :
     ${importance} : ${message}. `);
}

let curryLog = _.curry(log);

//Way 1 
curryLog(new Date(), "Way 1", "Test Case 1");
//Way 2
curryLog(new Date())("Way 2", "Test Case 2");
//Way 3
curryLog(new Date())("Way 3")("Test Case 3");
//Way 4
let logNow = curryLog(new Date());  //Partial message, or steeping
logNow(`Log Now`, `Log now message`);
