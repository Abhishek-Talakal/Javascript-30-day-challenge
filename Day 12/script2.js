  // Task-3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function num() {
    console.log("num is num")
}

try{
    console.log("try block");
    console.log(num())
} catch(error){
    console.log("catch block");
    console.error("error",error.message)
}

finally{
    console.log('finally block')
}