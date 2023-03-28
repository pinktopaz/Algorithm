const fs = require("fs");
const input = fs
  .readFileSync("Algorithm_basic_201/BOJ17298.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = [...input[1].split(" ").map((v) => +v)];

//실패한 풀이
/*
const NGEs = [];

//오른쪽에 있으면서
//Ai보다 큰 수 중에서
//가장 왼쪽에 있는 수

for (let i = 0; i < numbers.length; i++) {
  let arr = numbers.filter((v) => numbers.indexOf(v) > i && v >= numbers[i]);
  arr.length ? NGEs.push(arr[0]) : NGEs.push(-1);
}
console.log(...NGEs);
*/

/*
let result = Array(numbers.length).fill(-1);
let stack = [];

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];

  for (let j = stack.length - 1; j >= 0; j--) {
    const tmp = numbers[stack[j]];

    if (tmp < current) {
      result[stack.pop()] = current;
    } else {
      break;
    }
  }
  stack.push(i);
}

console.log(...result);
*/

//값을 스택에 pop, push하는 것보다 인덱스를 pop, push 하면 실제 스택을 건들이지 않고
//작업을 할 수 있어서 복잡함이 훨씬 줄어들겠구나!
//이중 for문을 돌더라도 n^2이 아니라 내부 반복문이 그 중 일부에 대해서만 돈다면 괜찮을 수 있으니 잘 생각을 해보자!
//여기서 -1 같이 값이 없는 경우 디폴트로 지정해야하는 값을 미리 배열에 다 넣어두는 것도 꿀팁이겠다

let stack = [];
let answer = Array(numbers.length).fill(-1);

for (let i = 0; i < numbers.length; i++) {
  const current = numbers[i];

  while (stack.length) {
    const temp = arr[stack[stack.length - 1]];
    if (temp < current) {
      answer[stack.pop()] = current;
    } else {
      break;
    }
  }
  stack.push(i);
}

console.log(...answer);
