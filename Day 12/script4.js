  // Task-6: Create a promise that randomly resolves or rejects. Use ".catch()" to handle the rejection and log an appropriate message to the console.

function getData(){
    return new Promise((res, rej) =>{
        const a = Math.random();
        console.log(a);
        const shouldResolve = a > 0.5;
        setTimeout(()=>{
            if (shouldResolve) {
                res('Promise resolved')
            } else {
                rej(new Error('Promise rejected'))
            }
        },1000)
    })
}


getData()

.then((message)=>{ 
    console.log(message)
})

.catch((error) =>{
    console.error('error',error.message)
})


  // Task-7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.


async function handleGetData(){
    try {
        const message = await getData();
        console.log(message)
    } catch (error) {
        console.log(`error caught: ${error.message}`)
    }
}
handleGetData()