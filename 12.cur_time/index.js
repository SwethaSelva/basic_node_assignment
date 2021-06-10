/**
  12. Write a program in Node.js to display current date and time.
 */
let [date, time] = new Date().toLocaleString().split(',')
console.log(`Current Date: ${date} and Current Time:${time}`)