//https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  let newArr = [];
  let answer = [];
  let max = 0;
  let cnt = 0;

  for (let i = 0; i < progresses.length; i++)
    newArr[i] = Math.ceil((100 - progresses[i]) / speeds[i]);

  max = newArr[0];

  for (let i = 0; i < newArr.length; i++) {
    if (max < newArr[i]) {
      answer.push(cnt);
      max = newArr[i];
      cnt = 1;
    } else {
      cnt++;
    }

    if (i === newArr.length - 1) answer.push(cnt);
  }

  return answer;
}
