  // Task-8: Use the "fetch" API to request data from an invalid URL and handle the error using ".catch()". Log an appropriate message to the console.

const invaliUrl = 'https://invalid-url.example.com';

function fetchData(){
    fetch(invaliUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error("http error  status: ",response.status )
        }
        return response.json();
    })
    .then(data =>{
        console.log(data)
    })
    .catch(error=>{
        console.error("eror while fetchinf data",error.message);
    });
}


fetchData();


  // Task-9: Use the "fetch" API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData(){
    try {
        const response = await fetch(invaliUrl);
        if(!response.ok){
            throw new Error("http error  status: ",response.status )
        }

        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error(`error qccured `)
    }
}

fetchData();