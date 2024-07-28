  // Task-8: Use "Promise.all" to wait for multiple promises to resolve and then log their values.

function getData() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data1")
        })
    },1000)
}
function getData2() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data2")
        })
    },2000)
}
function getData3() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data3")
        })
    },3000)
}


async function getAllData() {
    try{
        const result = await Promise.all([getData(), getData2(), getData3()]);
        console.log("all data : ", result)
    } catch(error) {
        console.error("errrr", error);
    }
}


getAllData();


  // Task-9: Use "Promise.race" to log the value of the first promise that resolves among multiple promises.

function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data1")
        },5000)
    })
}
function fetchData2() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data2")
        },4000)
    })
}
function fetchData3() {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            res("getting data3")
        },3000)
    })
}


async function fetchAllData() {
    try{
        const result = await Promise.race([fetchData(), fetchData2(), fetchData3()]);
        console.log("all data : ", result)
    } catch(error) {
        console.error("errrr", error);
    }
}


fetchAllData()