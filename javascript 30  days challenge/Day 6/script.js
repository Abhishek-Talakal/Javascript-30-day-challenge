//Task-1 : Create an array of numbers from 1 to 5 and log the array to the console.

let num = [1,2,3,4,5];
console.log(num);


//Task-2 : Access the first and last elements of the array and log them to the console.

console.log(num[0]);
console.log(num[num.length-1]);


// Task-3 : Use the `push` method to add a new number to the end of the array and log the updated array.

num.push(6);
console.log(num);


//Task-4 : Use the `pop` method to remove the last element from the array and  log the updated array.

let deletedEle = num.pop();
console.log(num);
console.log(deletedEle);


//Task-5 : Use the `shift` method to remove the first element from the array and  log the updated array.

let removedEle = num.shift();
console.log(num);
console.log(removedEle);


//Task-6 : Use the `unshift` method to add  a new number to the beginning of the  array and  log the updated array.

num.unshift(1);
console.log(num);


//Task-7 : Use the `map` method to create a new array where each number is doubled and log the new array.

let doubledNum = num.map(function(val){
    return val *2;
});

console.log(doubledNum);


//Task-8 : Use the `filter` method to create a new array with only even numbers and log the new array.

let evenNum = num.filter(val => val%2===0);
console.log(evenNum);


//Task-9 : Use the `reduce` method to calculate the sum of all numbers in the array and log the result.

let numSum = num.reduce((accu, curVal)=> accu+curVal,0);
console.log(numSum);


//Task-10 : Use a `for` loop to itereate over the array and log each element to the console.

for(let i=0;i<num.length;i++){
    console.log(num[i])
}


//Task-11 : Use the `forEach` method to iterate over the array and log each element to the console.

num.forEach(ele => {
    console.log(ele)
});



//Task-12 : Create a two-dimensional array (matrix) and log the entire array to the console.

//using Array
let row = 3;
let col = 3;
let dArray = Array.from({length : row}, () => Array(col).fill(parseInt(prompt("enter a num"))));

console.log(dArray);

//another method
let arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(arr2d);
console.log(arr2d[1][1]);
console.log(arr2d[0][0]);
console.log(arr2d[2][2]);