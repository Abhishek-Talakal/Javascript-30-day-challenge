  // Task-6: Use the "fetch" API to get data from a public API and log the response data to the console using promises.

const myurl ='http://worldtimeapi.org/api/timezone/America/New_York';

function fetchData(){
    fetch(myurl)
    .then(response=>{
        if(!response.ok){
            throw new Error(`HTTP error! status code: ${response.status}`);
        }
        return response.json();
    })

    .then(data=>{
        console.log('Response Data',data);

    })
    .catch(error=>{
      console.log('Error',error);
    })
    
}

fetchData()


  // Task-7: Use the "fetch" API to get data from a public API and log the response data to the console using async/await.

const url ='http://worldtimeapi.org/api/timezone/Asia/Kolkata';

async function getData(){
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
}

getData()