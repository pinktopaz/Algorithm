const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "Algorithm_basic_200/BOJ9093.txt";

const input = fs.readFileSync(filePath).toString().split("\n");
const sentences = input.slice(1);

sentences.forEach((sentence) => {
  const letters = sentence.split(" ");
  for (let i = 0; i < letters.length; i++) {
    letters[i] = [...letters[i]].reverse().join("");
  }
  console.log(letters.join(" "));
});

//join() => 배열에 쓰는 거, return 안해주기 때문에 변수에 넣어야함
//reverse() => 배열의 아이템 순서를 바꿔주는 거, 문자열 순서를 바꾸고 싶으면 [...]으로 펼쳐야함
