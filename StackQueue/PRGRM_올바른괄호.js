//https://school.programmers.co.kr/learn/courses/30/lessons/12909#
// function solution(s) {
//   const arr = [...s];
//   let stackCnt = 0;

//   if (arr[0] === ")") return false;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "(") {
//       stackCnt++;
//     } else {
//       for (let j = i; j < stackCnt + i; j++) {
//         if (arr[j] === ")") {
//           stackCnt--;
//         } else return false;
//         i = j + i;
//       }

//       stackCnt = 0;
//     }
//   }
//   return true;
// }

function solution(s) {
  const arr = [...s];
  let stackCnt = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] === "(" ? stackCnt++ : stackCnt--;
    if (stackCnt < 0) return false;
  }
  if (stackCnt !== 0) return false;
  return true;
}

//왜 헤맸나
//꼭 스택을 "시용"해야하는 것이 아니라 그 개념을 사용하면 됨
