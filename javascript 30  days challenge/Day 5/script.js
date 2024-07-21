//Task-1 : Write a function to check if a number is  even or odd and log the result to the console.

let number = parseInt(prompt("Enter a Number "));

function evenOdd(number){
   
        if(number%2==0){
            return "even"
        }else{
            return "odd"
        }
    
}
console.log(evenOdd(number));

//Task-2 : Write a function to calculate the square of a number and return the result.

let number1 = parseInt(prompt("Enter a Number "));

function square(number){
    return number*number;
}
console.log(square(number));


//Task-3 : Write a function expression to find the maximum of two numbers and log the result to the console.

 let num1 = parseInt(prompt("enter a Number"));
 let num2 = parseInt(prompt("enter a Number"));

 const  greatnum = function (num1,num2){
    if(num1>num2){
        return "num1 is greater than num2"
    }else{
        return "num2 is greater than num1"
        
    }
 }
 console.log(greatnum(num1,num2));


 //Task-4 : Write a function expression to concatenate two strings and return the result.

 let str1 = prompt("enter a Number");
 let str2 = prompt("enter a Number");

 const  concat = function (str1,str2){
  return str1+str2;
 }
 console.log(concat(str1,str2));



 //Task-5 : Write and arrow function to calculate the sum of two numbers and return the result.

let num01 = parseInt(prompt("enter a Number"));
let num02 = parseInt(prompt("enter a Number"));

const sum =(num01,num02)=>
    num01+num02;

console.log(sum(num01,num02))


//Task-6 : Write an arrow function to check if a string constains specific character and return a boolean value.
//usng includes method
let strg = prompt("enter a word");
let letter = prompt("enter a letter to be found in the your given word");

const letterIncludes = (str,letter)=>str.includes(letter);
console.log(letterIncludes(str,letter));

//using for loop
let str = prompt("enter a word");
let letterToBe = prompt("enter a letter to be found in the your given word");

const letterInclude = (str,letter)=>{
    for(i=0;i<=str.length;i++){
        if(str[i]==letter)
            return true;
    }
    return false
};
console.log(letterInclude(str,letterToBe));


//Task-7 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter.

let number_1 = parseInt(prompt("enter a Number"));
let number_2 = parseInt(prompt("enter a Number"));

const product = (number_1,number_2=2)=>  number_1*num2;

console.log(product(number_1,number_2));


//Task-8 : Write a function that takes a person's name and age and returns a greeting message.Provide a default value for the age.

function greetings(name ,age=18) {
     console.log(`hello ${name}, your age is ${age}`)
}

greetings("abhi")


//Task-9 : Write a higher-order functions that takes a function and a number, and calls the function that many times.

function callFunction(func,times){
    for (let i=0;i<times;i++){
        func();
    }
}

function print(){
    console.log("hey");
}
callFunction(print,3);


//another ans
const parentFunc = (repeat, child) => {
    for (i = 1; i <= repeat; i++) {
      child();
    }
  };
  
  const childFunction = () => {
    console.log(`i am child function`);
  };
  parentFunc(5, childFunction);


//Task-10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const parFunc = (func1, func2, value)=>{
    func1(value);
    func2(result);  
}

const square =(num1)=>{
    result=num1**2;
    return result;
}

let add =(num2)=>{
    console.log(num2 + 5);
}
parFunc(square,add,2)