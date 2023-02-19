// 함수의 반환값과 recursion 함수의 호출 횟수를 구해보자.
let fs = require("fs");
let input = fs
  .readFileSync("/Users/Heather/Algorithm/Section7/BOJ25501.txt")
  .toString()
  .split("\n");

function recursion(input, l, r, cnt) {
  cnt++;
  if (l >= r) return 1;
  else if (input[l] !== input[r]) return 0;
  else return recursion(input, l + 1, r - 1, cnt);
}

function isPalindrome(input, cnt) {
  return recursion(input, 0, input.length - 1, cnt);
}

for (let i = 1; i <= Number(input[0]); i++) {
  console.log(isPalindrome(input[i], cnt));
  console.log(cnt);
}
