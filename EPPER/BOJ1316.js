const fs = require("fs");
let input = fs.readFileSync("EPPER/BOJ1316.txt").toString().split("\n");

let stack = [];
let answer = 0;

for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (stack.includes(input[i][j]) && stack[stack.length - 1] !== input[i][j])
      break;
    else stack.push(input[i][j]);

    if (j === input[i].length - 1) answer++;
  }
  stack = [];
}
console.log(answer);
