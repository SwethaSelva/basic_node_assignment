/**
 * 1. Write a node.JS program that execute a connection to server and return success 
    message like "Success, i'm listening from port: 3000"

    Hint: You need npm module – http
    Reference: https://www.guru99.com/node-js-create-server-get-data.html
 */

let http = require('http');
let show_content = require('./show_content');

let server = http.createServer(function (req, res) {
  console.log('Success');
  // res.end('Success, I\'m listening to 3000');
  res.writeHeader('200', { content_type: 'application/json' })
  show_content.pipe(res);
}).listen(3000);
