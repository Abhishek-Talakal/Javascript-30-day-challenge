// Task 3: A a module that export multiple functions using named exports.Imports and use these functions in another script.
let add =(a,b)=>{
    return a+b;
}

let diff = (a,b)=>{
    return a-b;
}

export {add, diff}