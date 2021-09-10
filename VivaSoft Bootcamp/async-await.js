// async function friendlyFunction(){
//     return `Hello`;
// }
// console.log(friendlyFunction());


const hasMeeting = false;
var rejectMsg = "Meeting already Scheduled."
const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meetingDetails = {
            name: 'JS Meeting',
            location: 'Vivasoft Office',
            time: "10 A.M"
        };
        resolve(meetingDetails);
    }else{
        reject(new Error(rejectMsg));
    }
});

// const addToCalender = (meetingDetails) =>{
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been schaduled on ${meetingDetails.location} 
//         at ${meetingDetails.time}`;
//         resolve(calender);
//     });
// };

const addToCalender = (meetingDetails) => {
        const calender = `${meetingDetails.name} has been schaduled on ${meetingDetails.location} at ${meetingDetails.time}`;
        return Promise.resolve(calender);
};


// meeting
//         .then(addToCalender)
//         .then((res) =>{
//             console.log(JSON.stringify(res));
//         })
//         .catch((err) => {
//             console.log(JSON.stringify(`Meeting already Scheduled.`));
//         });

async function myMeeting(){
    const meetingDetails = await meeting;
    const calender = await addToCalender(meetingDetails);
    console.log(calender);
}

myMeeting();
console.log(`Hello World`);