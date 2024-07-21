// Task-1 : Write a program to add two numbers and log the result to the console.

let num1 = parseInt(prompt("enter num1"));
let num2 = parseInt(prompt("enter num2"));

console.log("sum is", num1+num2);


// Task-2 : Write a program to subtract two numbers and log the result to the console.

let num3 = parseInt(prompt("enter num1"));
let num4 = parseInt(prompt("enter num2"));

console.log("sub is", num3-num4);


// Task-3 : Write a program to multiply two numbers and log the result to the console.

let num5 = parseInt(prompt("enter num1"));
let num6 = parseInt(prompt("enter num2"));

console.log("mul is", num5*num6);


// Task-4 : Write a program to divide two numbers and log the result to the console.

let num7 = parseInt(prompt("enter num1"));
let num8 = parseInt(prompt("enter num2"));

console.log("div is", num7/num8);


// Task-5 : Write a program to find the remainder when one divided by another and log the result to the console.

let num01 = parseInt(prompt("enter num1"));
let num02 = parseInt(prompt("enter num2"));

console.log("rem is", num01%num02);


// Task-6 : Use the '+=' operator to add a number to the variable and log the result to the console.

let num03 = parseInt(prompt("enter num1"));
num03 += 5;
console.log(num03)


// Task-7 : Use the '-=' operator to add a number to the variable and log the result to the console.

let num04 = parseInt(prompt("enter num1"));
num04-=2;
console.log(num04)


// Task-8 : Write a program to compare two numbers using '>' and '<' and log the result to console.
 
let a = 4, b = 8;
let res1= a>b;
console.log(res1);

let res2= a<b;
console.log(res2);


// Task-9 : Write a program to compare two numbers using '>=' and '<=' and log the result to console.

let c = 7, d = 7;
let res10= c>=d;
console.log(res10);

let res20= c<d;
console.log(res20);


// Task-10 : Write a program to compare two numbers using '==' and '===' and log the result to console.

let g=5, f="7";

let res3= g===h;
console.log(res3);

let res4= g==h;
console.log(res4);


//Task-11 : Write a program that used the '&&' operator to combine two conditions and log the result to the console.


let number3 =30;
let number4 = 20;

console.log(num3>=num4 && num4>=num3)


//Task-12 : Write a program that used the '||' operator to combine two conditions and log the result to the console.

let number_3 =30;
let number_4 = 20;


console.log(num3>=num4 || number_4>=number_3)


//Task-13 : Write a program that used the '!' operator to negate a  condition and log the result to the console.

let num_3 =30;
let num_4 = 20;

console.log(!(num_3==num_4))


//Task-14 : Write a program that used the ternary operator to check if a number is positive or negative and log the result to the console.

let x = -4;

result = x > 0  ?   "x is positive" : "x is negetive";
console.log(result) ;