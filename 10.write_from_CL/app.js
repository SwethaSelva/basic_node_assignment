/**
  @Heading - Writing on txt 
  10. Write a node.JS program that creates a txt file with the text passed as a parameter
  $node ex5.js "hey ho! let's go"
  The file was saved!
  $cat myText.txt 
  hey ho! let's go
  Hint: You need fs.writeFile

  Extra:Improve the previous exercise to user the first parameter as the name of the destination file

  More Extra:Improve the previous exercise to also read and shows in the console the content of the file
  $node ex5.js mySuperText.txt "it's along way to the top..."
  The file was saved!
  it's along way to the top...
  $cat mySuperText.txt 
  it's along way to the top. 
 */
const arg = process.argv;
let fs = require('fs');
fs.writeFileSync(__dirname+'\\myText.txt', arg[2]);

// Extra
let newFilePath = __dirname+'\\'+arg[3];
fs.createWriteStream(newFilePath);
fs.writeFileSync(newFilePath, arg[2]);

// More Extra
console.log('The file was saved');
console.log(fs.readFileSync(newFilePath, 'utf-8'));