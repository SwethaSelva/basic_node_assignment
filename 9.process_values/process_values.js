/**
  @Heading - Processing values
    9. Write a node program that process local txt and return values as a Array.
    Hint: You need npm module - concat-stream
*/
let fs = require('fs')
var array = fs.readFileSync('file.txt', 'utf8').split(' ');

console.log({ array })