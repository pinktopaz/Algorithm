const fs = require("fs");
const input = fs
  .readFileSync("Algorithm_basic_201/BOJ17299.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = [...input[1].split(" ").map((v) => +v)];
//이렇게 하면 메모리 차지를 너무 많이 하니까 => 근데 이렇게 했는데 시간이 더 걸리네 (통과는 함 + 메모리도 더 잡아먹음)
// let cnt = {};
// numbers.forEach((x) => {
//   cnt[x] = (cnt[x] || 0) + 1;
// });
//이런 식으로 key-value쌍으로 해줘도 좋겠다!
let cnt = Array(1000001).fill(0);

let answers = Array(numbers.length).fill(-1);
let stack = [];

for (let i = 0; i < numbers.length; i++) {
  cnt[numbers[i]]++;
}

for (let i = 0; i < numbers.length; i++) {
  const current = cnt[numbers[i]];

  while (stack.length) {
    const temp = cnt[numbers[stack[stack.length - 1]]];
    if (temp < current) answers[stack.pop()] = numbers[i];
    else break;
  }

  stack.push(i);
}

console.log(...answers);
