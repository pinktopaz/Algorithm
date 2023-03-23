const fs = require("fs");
let input = fs
  .readFileSync("Algorithm_basic_200/BOJ1874.txt")
  .toString()
  .split("\n")
  .map((v) => Number(v));

const [n, ...nums] = input;
const numbers = nums.map((v) => +v);

function solution(n, numbers) {
  const stack = [];
  let answer = "";
  let cnt = 1;

  for (let i = 0; i < n; i++) {
    const number = numbers.shift();

    while (cnt <= number) {
      stack, push(count++);
      answer += "+";
    }

    const popedItem = stack.pop();
    if (popedItem !== number) {
      return;
    }
  }
}
