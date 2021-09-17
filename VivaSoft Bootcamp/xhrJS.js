const getBTn = document.getElementById('get-btn');
const sendBtn = document.getElementById('send-btn');

const getData = function () {
    const xhr = new XMLHttpRequest(); //Create new request object using XMLHttpRequest method
    //GET, POST, PUT, DELETE, OPTIONS, HEAD
    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/todos/2`); //Preparing the request
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function () {
        const result = xhr.response;
        console.log(result);
        const id = result.id;
        const title = result.title;
        console.log(`${id} : ${title}`);
        /* {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
           } */
    }
};

const sendData = function () {

};

getBTn.addEventListener("click", getData);
sendBtn.addEventListener("click", sendData);