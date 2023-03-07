// 함수의 반환값과 recursion 함수의 호출 횟수를 구해보자.
let fs = require("fs");
let input = fs
  .readFileSync("/Users/Heather/Algorithm/Section7/BOJ25501.txt")
  .toString()
  .split("\n");

let ans = "";

function isPalindrome(str, l, r, cnt) {
  cnt++;
  if (l >= r) return (ans = 1 + " " + cnt);
  else if (str[l] !== str[r]) return (ans = 0 + " " + cnt);
  else return isPalindrome(str, l + 1, r - 1, cnt);
}

// input.forEach((str) => isPalindrome(str, 0, str.length - 1, 0));
// console.log(ans);

for (let i = 1; i <= Number(input[0]); i++) {
  isPalindrome(input[i], 0, input[i].length - 1, 0);
  console.log(ans);
}
