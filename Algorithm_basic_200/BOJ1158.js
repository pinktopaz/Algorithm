const fs = require("fs");
let input = fs
  .readFileSync("Algorithm_basic_200/BOJ1158.txt")
  .toString()
  .split(" ");
let [K, N] = input;
let stack = [];
let answer = [];

for (let i = 1; i <= Number(K); i++) {
  stack.push(Number(i));
}

while (stack.length) {
  answer.push(stack[Number(N) - 1]);
  stack = stack.filter((el) => el !== stack[Number(N) - 1]);
  console.log(answer);
}
console.log(answer);

let s = [1, 2, 3];
s = s.filter((el) => el !== 2);
console.log(s);

stack = stack.filter((el) => el !== stack[2]);
console.log(stack);
