// Task 3:  Write a function that generates unique IDs. 

 const genUniqueId = () =>{
    let uniqueId = 100;
    
    const genId = () =>{
       return uniqueId++;
    }

   return genId
 }

 const id = genUniqueId();
 console.log(id());
 console.log(id());
 console.log(id());


 // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

const userName = (name) =>{

    const greet = () =>{
        console.log(`hello ${name}, long time no see`)
    } 
    return greet
}

const user = userName("abhi")
user()