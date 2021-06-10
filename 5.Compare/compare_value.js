/**
  @Heading Compare Values
    Write a node.JS program that search information in .txt file and returns you how 
    much coincidences find.
    If you search about "John", and in your txt files are 2 John, should return 2
    Hint: You can try save all data in one array and compare with search.
 */
let fs = require('fs');

let searchStr = 'John';
let content = fs.readFileSync(__dirname+'\\ex6.js', 'utf8')
  .match(new RegExp(searchStr, 'g') || [])
  .length
console.log({ content })