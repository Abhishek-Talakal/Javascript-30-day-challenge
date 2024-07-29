//Task 5: Write a loop that creates an array of functions. Each function should log its index when called. 

const createFunc = () =>{
    const functions = [];

    for(let i = 0; i<5; i++){
        functions.push(()=>{
            console.log(i)
        })
    }
    return functions
}

const functions = createFunc();
functions.forEach(func=>func())