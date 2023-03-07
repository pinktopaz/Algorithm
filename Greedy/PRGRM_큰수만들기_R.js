//https://school.programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];
  let cnt = 0;

  for (const item of number) {
    while (cnt < k && stack[stack.length - 1] < item) {
      stack.pop();
      cnt++;
    }
    stack.push(item);
  }

  for (let i = 0; i < k - cnt; i++) {
    stack.pop();
  }
  const answer = stack.join("");
  return answer;
}
