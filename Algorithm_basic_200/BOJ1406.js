//splice로 구현하면 선형시간이기 때문에 그걸 반복문을 돌리면 n^2
// 1초 기준 약 1만 입력 가능 => 근데 명령어는 50만개까지 나올 수 있음 => O(n)에서 답을 내야함
// 시간제한이 짧은 문제, 입력 값이 많은 문제에서는 부적합
//보통 1억에 1초라고 생각하면 된다.
/*
function solution(action) {
  if (action[0] === "L") {
    if (cursor) cursor--;
  } else if (action[0] === "D") {
    if (cursor < str.length) cursor++;
  } else if (action[0] === "B") {
    if (cursor) {
      str = [...str].splice(cursor - 2, 1).join("");
      cursor--;
    }
  } else {
    if (cursor < str.length) {
      str =
        [...str].slice(0, cursor).join("") +
        action[2] +
        [...str].slice(cursor).join("");
      cursor++;
    }
    str = str + action[2];
    cursor++;
  }
}

for (const action of actions) solution(action);
console.log(str);*/

//새로운 방법
//1. 커서 위치를 기준으로 왼쪽은 leftStack, 오른쪽은 rightStack
//2. 커서를 왼쪽으로 한칸 옮기면 leftStack에서 Pop해서 rightStack에 push
//이런 식으로 구현하면 시간 복잡도가 적게 나온다.

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "Algorithm_basic_200/BOJ1406.txt";

const fs = require("fs");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let len = parseInt(input[1]);
let leftStack = input[0].split("");
let rightStack = [];

for (let i = 2; i < 2 + len; i++) {
  let [act, num] = input[i].split(" ");
  if (act === "L") rightStack.push(leftStack.pop());
  else if (act === "D") leftStack.push(rightStack.pop());
  else if (act === "B" && leftStack.length > 0) leftStack.pop();
  else if (act === "P") leftStack.push(num);
}

console.log(leftStack.join("") + rightStack.reverse().join(""));

//출력초과 - 주로 무한루프 돌 때

/*

출력초과 나왔던 이유 : ??을 잘못 써서 

A ?? B;
A가 null 또는 undefined이면 B를 반환하며, 그렇지 않으면 A를 반환합니다.

else if (act === "B") leftStack.length > 0 ?? leftStack.pop();

여기서 계속 true를 반환하고 있었던 것 ;;;;
*/
