// Task-1 : Write a program to check if a number is positive,negative, or zero, and log the result to the console.

let num = parseInt(prompt("enter a Number"));

if(num == 0){
    console.log("num is zero");
}
else if(num > 0){
    console.log("num is positive");
}
else{
    console.log("num is negetive");
}


// Task-2 : Write a program to check if a person is eligible to vote (age >= 18), and log the result to the console.

let age = parseInt(prompt("enter a age"));

if (age>=18) {
    console.log(`He/her age is ${age}, he/she can vote`)
} else {
    console.log(`He/her age is ${age}, he/she cannot vote`)
}


//Task-3 : Write a program to find the largest of three numbers using nested if-else statements.

let num1 = parseInt(prompt("enter a Number"));
let num2 = parseInt(prompt("enter a Number"));
let num3 = parseInt(prompt("enter a Number"));


if (num1 >num2){
    if (num1>num3) {
        console.log(`${num1} is graeter than ${num2} and ${num3}`);
    } else {
        console.log(`${num3} is graeter than ${num1} and ${num2}`);
    }
}else{
    console.log(`${num2} is graeter than ${num1} and ${num3}`);
}


//Task-4 : Write a program that uses a switch case to determine the day fo the week based on a number (1-7) and log the day name to the console.

let dayNum = parseInt(prompt("enter a Number"));

switch(dayNum){
    case 1:
        console.log("monday");
    break;
    case 2:
        console.log("tuesday");
    break;
    case 3:
        console.log("wednesday");
    break;
    case 4:
        console.log("thursday");
    break;
    case 5:
        console.log("friday");
    break;
    case 6:
        console.log("saturday");
    break;
    case 7:
        console.log("sunday");
    break;

    default:
        console.log("you have entered wrong day")
}


//Task-5 : Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

const score = parseInt(prompt("enter your score"));
let grade;
switch (true) {
    case (score >= 90 && score <= 100):
         grade = "A";
    break;
    case (score >= 80 && score <= 100):
         grade = "B";
    break;
    case (score >= 70 && score <= 100):
         grade = "C";
    break;
    case (score >= 60 && score <= 100):
         grade = "D";
    break;
    case (score > 0 && score < 60):
         grade = "F";
    break;
    defalut:
        grade:"Invalid write ur score below 100 or above 0 ";
}

console.log("Grade:", grade);


//Task-6 : Write a program that Use the ternary operator to check if a number is even or odd and log the result to the console.

const number = 17; // Example: 17

const result = number % 2 === 0 ? "Even" : "Odd";
console.log("Result:", result);


//Task-7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = parseInt(prompt("enter a year"));

if ((year % 4 == 0 ) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is not a leap year`)
}