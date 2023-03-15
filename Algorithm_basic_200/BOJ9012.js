const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "Algorithm_basic_200/BOJ9012.txt";

//trim은 무조건 써주기! 개행 문자 읽어서 결과 틀리게 나오는 경우도 있음
// console.log("Hello\n".trim());
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(1);
console.log(input);
const input2 = fs.readFileSync(filePath).toString().split("\n").slice(1);
console.log(input);

function solution(str) {
  let leftCnt = 0;
  if (str[0] === ")") {
    return "NO";
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") leftCnt++;
      else {
        leftCnt--;
        if (leftCnt < 0) return "NO";
      }
    }
  }
  if (leftCnt > 0) return "NO";
  else return "YES";
}

const answer = input.map((el) => (el = solution(el)));
console.log(answer.join("\n"));
