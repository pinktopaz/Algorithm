const fs = require("fs");
let input = fs.readFileSync("EPPER/BOJ11399.txt").toString().split("\n");
let time = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

let sumTime = [];

for (let i = 0; i < time.length; i++) {
  let sum = 0;
  for (let j = 0; j <= i; j++) {
    sum += time[j];
  }
  sumTime.push(sum);
}

let ans = sumTime.reduce((sum, cur) => (sum += cur));
console.log(ans);

//시간 제한이 1초였는데
//N 최대가 1000이라서 n^2해도 10만이 넘지 않기 때문에 이중 for문을 돌렸다.

//보통 1억 정도가 1초
// N이 10만이면

// ?초 1000000 = 1초 1억

// 1000000 = ?억
// ? = 1/100
