//0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = 1;
for (let i = 2; i <= input; i++) {
  result *= i;
}

console.log(result);
