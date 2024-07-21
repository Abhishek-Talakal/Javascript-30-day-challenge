//Task-1 : Write a program to print numbers from 1 to 10 using a for loop.

let numb =10;
for (let  i= 1; i <=10; i++) {

    // i++;
    console.log(i)
    
}

//Task-2 : Write a program to print the multiplication table of 5 using a for loop.

const table =5;

for (let i = 1; i <= 10; i++) {
   let mul = table*i;
   console.log(mul)
    
}


//Task-3 : Write a program to calculate the sum of numbers form 1 to 10 using a while loop.

let sum=0;
let i=1;
while (i<=10) {
    sum+=i; 
    i++;     
}
console.log(sum)  ;


//Task-4 : Write a program to print numbers from 10 to 1 usind a while loop.

let n=10;

while (n>0) {
    console.log(n)
    n--;    
}


//Task-5 : Write a program to print numbers from 1 to 5 using do...while loop.

let counter =1;

do{
    console.log(counter);
    counter++;
}
while(counter<=5)


//Task-6 : Write a program to calculate the factorial of a number using a do...while loop.

let number = parseInt(prompt("enter a number"));
let fact=1;
i=1;
do{
    fact = fact*i;
    i++;
}while(i<=num);
console.log(fact);


/* Task-7 : Write a program to print pattern usind nested for loops:
  *
  **
  ***
  **** 
  ***** */

for (i = 1; i <= 5; i++) {
    let stars = "";
    for (j = 1; j <= i; j++) {
      stars += "* ";
    }
    console.log(stars);
  }

// Task-8 : Write a program to print numbers form 1 to 10, but skip the number 5 using the 'continue' statement.

for(i=1;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


//Task-9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(i=1;i<10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}