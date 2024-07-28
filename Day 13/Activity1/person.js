//Task 2: Create a module that export an object repersenting a person with properties and methods. Import abd use this module in another script.

export let person = {
    name:'abhi',
    age:24,
    address:'bengaluru',
    greet(){
        console.log(`hey i am ${this.name}`)
    }
}
