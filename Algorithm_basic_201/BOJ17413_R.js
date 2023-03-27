const fs = require("fs");
let input = fs
  .readFileSync("Algorithm_basic_201/BOJ17413.txt")
  .toString()
  .trim();

//여기서 드는 의문
//문자열의 최대 길이가 10만인데 그러면 reverse, join 같은 O(n) 짜리를 사용하면 n^2으로 시간 초과가 나지 않나?!
//근데 단어 덩어리로 나누고 그 안에서 n^2이 일어나는거니까 극단까지는 안 갈 것 같기도 하고

//1. 정규식을 사용해서 푸는 법

/*
const regex = /\<[a-z\s]*\>/g;
const tags = input.match(regex) ?? [];
const words = input.split(regex);
//split : 인자를 구분자로 해서 문자열을 배열로 만듦

const reversedWords = words.map((word) =>
  word
    .split(" ") //공백 기준으로 단어 덩어리를 나눠서 각 덩어리를 뒤집어야하기 때문에 -> 각 덩어리가 공백 기준으로 나눠어서 배열 속에 배열로 들어감
    .map((v) => [...v].reverse().join(""))
    .join(" ")
);

// map의 콜백함수로 사용되는 함수를 화살표 함수로 사용했을 때
// 2줄 이상의 코드가 필요하다면 화살표 함수 문법대로 중괄호를 사용해야 하며 return 키워드로 별도로 반환해주어야 합니다.
// 만약 그렇지 않고 값을 반환해야 할 경우 소괄호, 중괄호 모두 필요하지 않습니다
//()=>{return 없이 한줄코드} 인식하지 못함
const answer =
  tags.map((tag, i) => reversedWords[i] + tag).join("") +
  reversedWords[reversedWords.length - 1];

console.log(answer);
*/

//2. 반복문을 이용해서 푸는 방법

let temp = "";
let ans = "";
let isTag = false;

for (let a of input) {
  if (a === "<") {
    isTag = true;
    ans += [...temp].reverse().join("") + a;
    temp = "";
  } else if (a === ">") {
    isTag = false;
    ans += temp + a;
    temp = "";
  } else if (a === " ") {
    ans += (isTag ? temp : [...temp].reverse().join("")) + a;
    temp = "";
  } else {
    temp += a;
  }
}

console.log(ans);
