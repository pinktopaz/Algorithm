//https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let ans = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);

    arr = arr.sort((a, b) => a - b);

    ans.push(arr[commands[i][2] - 1]);
  }

  return ans;
}
