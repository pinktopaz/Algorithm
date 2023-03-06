let fs = require("fs");
let N = Number(
  fs.readFileSync("/Users/Heather/Algorithm/Section7/BOJ11729.txt").toString()
);

let cnt = 0;
let ans = [];

const hanoi = (num, from, mid, to) => {
  cnt++;
  if (num === 1) {
    ans.push([from, to]);
    return;
  }
  //n-1개의 원반을 1번에서 2번으로 옮기고
  hanoi(num - 1, from, to, mid);
  //남아있는 n번째 원반을 1번에서 3번으로 옮긴다
  ans.push([from, to]);
  //2번으로 옮겼던 n-1개의 원반을 2번에서 3번으로 옮긴다
  hanoi(num - 1, mid, from, to);
};

hanoi(N, 1, 2, 3);
console.log(cnt);
//join : 배열의 각 요소를 문자열로 합치는 함수로, 인자에 들어가는 구분자로 합칩 당하는 각 요소를 구분한다. 디폴트 구분자는 쉼표(,)
console.log(ans.map((element) => element.join(" ")).join("\n"));
