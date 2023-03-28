//https://school.programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
  let arr = citations.sort((a, b) => b - a); //6 5 3 1 0
  let hIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let target = arr.filter((a) => a >= arr[i]);
    if (target.length >= arr[i]) {
      hIndex = i;
      break;
    }
  }

  return hIndex;
}
