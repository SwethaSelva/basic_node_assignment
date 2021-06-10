/**
  11. Make a file containing some content. Write a program which can read the 
  file from the current directory and output it to to console.
*/

let fs = require('fs');
let readFile = fs.readFileSync(`${__dirname}\\readme.js`, 'utf-8');
console.log({ readFile })