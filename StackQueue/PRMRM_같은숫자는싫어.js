//https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  let newArr = [];

  for (const el of arr) {
    if (newArr[newArr.length - 1] !== el) newArr.push(el);
  }
  return newArr;
}

//peek()는 자바스크립트 내장함수가 아님!
//이거를 구현하려면 그냥 배열의 길이 -1로!!

// 풀이 횟수 : 2 (2023.03.13)
