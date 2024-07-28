// Task-1: Create a promise that resolves with a message after 2-second timeout and log the message to the console.

function fetchData (){
    return new Promise((resolve, rej)=>{
        setTimeout(()=>{
            resolve("data recieved after 2 seconds");
        },2000);
    })
}
fetchData().then((data)=> console.log(data));


  // Task-2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using "catch()";


function fetchData1 (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("data request failed ");
        },5000);
    })
}
fetchData1().then((data)=> console.log(data));


  // Task-3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.


function getData (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", )
            resolve("success");
        },2000);
    })
}


function getData1 (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success1");
        },2000);
    })
}



getData()
.then((data1)=> {
    console.log(data1);
    return  getData1();
});
