/**
  4. Write a node.JS program that creates a txt file with the text passed as a parameter.
    > node ex5.js "hey ho! let's go"
    The file was saved!

    When you open the file the text should be displayed "hey ho! Let’s go"
 
 */
let fs = require('fs');

fs.writeFileSync(__dirname+'\\ex5.js', 'Hey ho! let\'s go');