//Task 1:  Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.

function outer() {
    let name = 'abhi';
     function inner(){
        console.log("name ",name)
    }return inner();
}
console.log(outer())


//Task 2:  Create a closure that maintains a private counter. 

let counterFun = () =>{
    let count = 0;

    const increment = () =>{
        count++
    }

    const countVal = () =>{
        return count;
    }

    return {increment, countVal}
}
const counter = counterFun();
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.countVal());