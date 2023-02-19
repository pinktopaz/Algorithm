//피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
//이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
//n=17일때 까지 피보나치 수를 써보면 다음과 같다.
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
//n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

let fs = require("fs");
let input = Number(
  fs
    .readFileSync("/Users/Heather/Algorithm/Section7/BOJ10870.txt")
    .toString()
    .split(" ")
);

let num1 = 0;
let num2 = 1;
let result = 0;

if (input === 0) result = num1;
if (input === 1) result = num2;

if (input >= 2) {
  for (let i = 2; i <= input; i++) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }
}

console.log(result);
