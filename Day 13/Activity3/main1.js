// Task 6: Install 3-party module (e.g., loadsh) using npm. 
// Import and use  a fucntion from this module in a script 
const _ = require('lodash');

const myArr = [
    'banana',
    'mango',
    'apple',
    'papaya'
];


const newArr = _.chunk(myArr,2);

console.log(newArr);

//Task 7: Install 3-party module (e.g., axios) using npm.
//Import and use  this module to make a request in a  script 
const axios = require('axios');

async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();