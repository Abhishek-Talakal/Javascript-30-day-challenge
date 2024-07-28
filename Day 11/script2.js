   // Task-4: Write an async function that waits for a promise to resolve and then logs the resolved value.

function getData (dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId)
            resolve("success");
        },1000);
    })
}


async function getAllData(){
    console.log("gettng data1.........")
    await getData(1);
    console.log("gettng data2.........")
    await getData(2);

}
getAllData();


  // Task-5: Write an async function that handles a rejected promise using try-catch and logs the error message.

 function fetchData (){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject("errrrrrr");
        },5000);
    })

 }

async function fetchAllData() {
try{
    const resv = await fetchData();
    console.log(fetchData)
}
catch(error){
    console.error("Error", error)
}

}

fetchAllData ();

