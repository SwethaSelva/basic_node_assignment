/**
  @Heading File List
    3. Write a node.JS program that list the content of the current directory indicating if is a 
    directory or a file
    For eg:
    > node ex4.js
    FILE:ex1.js
    FILE:ex2.js
    FILE:ex3.js
    FILE:ex4.js
    FILE:getLinksNode.js
    FILE:link.txt
    DIR:node_modules
    FILE:recursiveContentsDir.js
    FILE:results.txt
    FILE:test.txt
 */

let fs = require('fs');

let files = fs.readdirSync(__dirname, 'utf8');

for (let file of files) {
  let stat = fs.statSync(__dirname+'\\'+file);
  if (stat.isFile()) console.log('FILE:', file);
  else if (stat.isDirectory()) console.log('DIR:', file);
  else console.log(file)
}