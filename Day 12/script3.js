   // Task-4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

 class CustomError extends Error {
    constructor(message){
        super(message);
        this.name= "CustomError"
    }
 }

 function anErrOp(){
    const isError= 'true';
    if(isError){
        throw new CustomError('Something went wrong')
    }
    console.log('operation succeed')
 }

 try{
    anErrOp()
 } catch(error){
    if(error instanceof CustomError){
    console.error(`custom error caught: ${error.message}`);
 } else{
    console.log("unexpected error",error.message)
 }
}



  // Task-5: Write a fucntion that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.

class validationError extends Error{
    constructor(message){
        super(message)
        this.name= "ValidationError"
    }
}


function validateInput (input) {
    if(typeof input !== 'string' || input.trim()===''){
        throw new validationError ('Input should not be empty')
    } 
    console.log('valid input')
}

try {
    const userInput = '';
    validateInput(userInput);
} catch (error) {
    if(error instanceof validationError){
        console.error(`validation error ${error.message}`)
    } else {
        console.log('unexpected error', error.message)
    }
}