const processOrder = (customer) => {
    console.log(`Processing order for customer 1`);

    var currentTime = new Date().getTime();
    while(currentTime + 10000 >= new Date().getTime());
    console.log(`Order processed for custdomer 1`);
};
console.log(`Take order for customer 1`);
processOrder();
console.log(`Completed order for customer 1`);





// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     setTimeout(() => {
//         console.log(`Cooking Completed`);
//     }, 3000);
//     console.log(`Order processed for custdomer 1`);
// };
// console.log(`Take order for customer 1`);
// processOrder();
// console.log(`Completed order for customer 1`);



// const takeOrder = (customer, callback) => {
//     console.log(`Take order for ${customer}`);
//     callback(customer);
// }

// const processOrder = (customer, callback) => {
//     console.log(`Processing order for ${customer}`);

//     setTimeout(() => {
//        console.log(`Cooking completed.`);
//        console.log(`Order processed for ${customer}`);
//        callback(customer) 
//     }, 3000);
// };

// const completeOrder = (customer) => {
//     console.log(`Completed order for ${customer}`);
// }

// takeOrder(`Mr. Alibaba`, (customer) => {
//     processOrder(customer, () => {
//         completeOrder(customer);
//     });
// });

