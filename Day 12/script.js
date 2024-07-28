// Task-1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwErr() {
throw new Error("this error is intentional error.")
}

try {
    throwErr();
} catch (error) {
    console.log("An error occured,", error.message);
}


  // Task-2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

let num = parseInt(prompt("enter numerator"))
let denom = parseInt(prompt("enter denominator"))

function division() {
    if(denom === 0){
        throw new Error("denominator should not be zero.")
    }
    return num/denom
}

try {
    // let res = division(num, denom);
    // console.log(res)
    console.log(division(num, denom))
} catch (error) {
    console.log(`An error occured, ${error.message}`)
}