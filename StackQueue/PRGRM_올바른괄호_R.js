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

//스택의 장점을 살리지 못해 세부 테스트케이스에 대해서 찾는게 좀 오래 걸린 것 같기도 하다
//순차적으로 검사를 하는거니까  (()))( 이런거는 개수가 같더라도 leftCnt<rightCnt로 바로 잡아줘야함
/*
function solution(s) {
    let stack = [...s];
    
    let leftCnt = 0;
    let rightCnt =0;
    
    if(stack[0]===")") return false;
    
    for(let i =0; i<stack.length; i++){
        if(stack[i]==="(")
            leftCnt++;
        else 
            rightCnt++;
        if(rightCnt>leftCnt) return false;
    }
    
    if(leftCnt === rightCnt) return true;
    return false;
}
*/

//풀이 횟수 : 2 (2023.03.13 맞았지만 한 번 더 풀어야할 듯)
