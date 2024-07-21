//Task-1 : Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

let person = "vijay";
let age = 24;

console.log(`i am ${person} and my age is ${age}`)


//Task-2 : Create a multi-line string using template literals and log it to the console.

let mlString = `qqsdfvbnnnnnbvnf
         axvgdfdgfdgfh
                adfsvfdfgbffgh`;

console.log(mlString);


//Task-3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1,2,3,4,5];

let [a,b] = arr;
console.log(a);
console.log(b);


//Task-4 : Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title:"Atomic Habits",
    author:"James Clear",
    year:2008,
}

let {title , author} = book;
console.log(title)
console.log(author)


//Task-5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arry = [1,2,3,4,5];
let newArr = [...arry,6,7,8]
console.log(newArr)


//Task-6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const sum  = (a,b,c)=>{
    return a+b+c;
}

let num = [1,2,3];
console.log(sum(...num))


//Task-7 : Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second pareameter.

let product = (a,b=1)=>{
    return a*b
}

console.log(product(4,5));
console.log(product(4));


//Task-8 : Use enhanced object literals to create an object with methods and properties, and log the object to the console.

let pname = "abi";
age = 24;
let perSon = {
    pname,
    age,
    greet(){
        console.log(`hi i am ${pname} and my age is ${age}`)
    }
}
perSon.greet();


//Task-9 : Create an object with computed property names based variables and log the object to the console.

let propname = 'aGe';
let base = "skill";
let index = 1;
let employee = {
    ename : "abi",
    [propname]: 25,
    [`${base}${index}`]: "js"
}

console.log(employee)