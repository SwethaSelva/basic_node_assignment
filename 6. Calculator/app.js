/**
  @Calculator
  Calculator Node Create a app.js that require another file called calculator.js 
  When we call node  app.js we should show in the console the following:
  The sum of 3 & 7 is: 1 0 The multiplication of 3 & 7 is: 21
  app.js should only show in the console the result of calling the  functions sum & multiplication
  These methods should be defined (and exported) in calculator.js
  @Phase_2
  Create a folder called operations and create in every folder a file exporting every operation needed in the main app.js file app.js operations/ sum.js multiplication.js substraction.js division.js
  @Phase_3
  Install the module moment and use it to show the current time in this way:
  Today is : Monday, October 31st 2016, 10:08:34 am The sum of 3 & 7 is: 10 The multiplication of 3 & 7 is: 21
 */
let moment = require('moment');

let calc = require('./calculator');
let sum = require('./Operations/sum');
let subtraction = require('./Operations/subtraction');
let multplication = require('./Operations/multplication');
let division = require('./Operations/division');

let input1 = 3;
let input2 = 7;

// phase 1
console.log(
  `The sum of ${input1} & ${input2} is: ${calc.sum(input1, input2)} The multiplication of ${input1} & ${input2} is: ${calc.multiplication(input1, input2)}`
);

// Phase 2
console.log(`The sum of ${input1} & ${input2} is: ${sum(input1, input2)}`);
console.log(`The subtraction of ${input1} & ${input2} is: ${subtraction(input1, input2)}`);
console.log(`The multplication of ${input1} & ${input2} is: ${multplication(input1, input2)}`);
console.log(`The division of ${input1} & ${input2} is: ${division(input1, input2)}`);

// Phase 3
console.log(
  `Today is: ${moment(new Date()).format('dddd, MMMM Do YYYY, hh:mm:ss a')} The sum of ${input1} & ${input2} is: ${calc.sum(input1, input2)} The multiplication of ${input1} & ${input2} is: ${calc.multiplication(input1, input2)}`
);

// Show hour
console.log('local hour of server is:', moment(new Date()).format('kk'));