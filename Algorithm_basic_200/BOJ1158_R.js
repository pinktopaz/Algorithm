const fs = require("fs");
let input = fs
  .readFileSync("Algorithm_basic_200/BOJ1158.txt")
  .toString()
  .split(" ")
  .map((v) => +v);

let [K, N] = input;
let stack = [];
let answer = [];

for (let i = 1; i <= K; i++) {
  stack.push(Number(i));
}
let isVisited = Array(stack.length).fill(0);

let current = N - 1;
while (!isVisited.every((elem) => elem === 1)) {
  if (isVisited[current] !== 1) {
    isVisited[current] = 1;
    answer.push(stack[current]);
    current = (current + N) % K;
  } else {
    if (current < K) {
      current++;
    } else {
      current = 0;
    }
  }
  console.log("current" + current);
}
console.log(answer);

// 1 !2 !3 4 5 !6 7

// 2 5 8 -> 1

// 8 % 7
