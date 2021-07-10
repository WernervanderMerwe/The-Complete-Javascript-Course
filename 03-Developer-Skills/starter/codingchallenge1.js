/*
Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. 
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

GOOD LUCK �
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]} in ${0 + 1} days...`);
// debugger;

const printForecast = function (arr) {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(str);
};

printForecast(data1);
printForecast(data2);

// 1) understand the problem
// - call the data and create a function to log a string using data from an array but each array value must concatinate a string
// 2) Divide and conquer
// - first create variables for the data
// - create function printForecast and start a for loop
// - transform each element with string
// - string needs to contain day (index + 1)
// - add ... between elements at start and end of each string
// 3) Research problems you dont know
// - research how to concatinate an array for each value of i
// 4) Write pseudo code to dumb down the code
