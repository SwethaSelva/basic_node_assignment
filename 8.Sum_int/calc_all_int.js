/**
  @Heading - sum of integers
    8. Write a node.JS program that sum all integers saved in other txt file.
 */
let fs = require('fs');

const nums = fs.readFileSync(__dirname+'\\integer.txt', 'utf-8').replace(/\D/g, ' ').split(' ');
console.log({ nums, sum: sum(nums) })

function sum (nums) {
  return nums.reduce((acc, cur) => Number(acc)+Number(cur));
}