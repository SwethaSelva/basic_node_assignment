/**
  @Heading - Show_Content
    2. Write a node program that read a file (passed as parameter) in local machine and 
    shows in the console the content of it.
    node app.js test.txt

    Hint: You need npm module – fs
 */
let fs = require('fs');
const { argv } = process;

let filePath = __dirname+'\\'+argv[2];
if (fs.existsSync(filePath)) console.log(fs.readFileSync(filePath, 'utf8'));
else console.log({ filePath })