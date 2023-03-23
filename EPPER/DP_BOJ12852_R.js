const fs = require("fs");
let N = Number(fs.readFileSync("EPPER/BOJ12852.txt").toString().trim());

function solution(N) {
  let dp = Array(N + 1).fill(0);
  let before = Array(N + 1).fill(0);
  let process = N + " ";

  for (let i = 2; i <= N; i++) {
    //4의 경우에는 3으로 가는 경우의 수 + 3이 1로 가는 경우의 수의 합이다.
    //또 숫자 5는 4로 가는 경우의 수 + 4가 1로 가는 경우의 수가 되고,
    //숫자 6은 5로 가는 경우의 수 + 5가 1로 가는 경우의 수이다.
    //dp[i] = 1+ dp[i-1]
    dp[i] = dp[i - 1] + 1;
    before[i] = i - 1;
    //지금 있는 인덱스에 그 전 인덱스를 저장해서 N = before[N]으로 순회 가능

    //숫자 6은 5로 가는 경우의 수 + 5가 1로 가는 경우의 수이 될 수도 있지만
    ///6을 2로 나누고 + 2로 나눈 몫이 1로 가는 경우의 수가 될 수도 있음
    if (i % 2 === 0) {
      if (dp[i / 2] + 1 < dp[i]) {
        dp[i] = dp[i / 2] + 1;
        before[i] = Math.floor(i / 2);
      }
    }
    //숫자 6은 5로 가는 경우의 수 + 5가 1로 가는 경우의 수이 될 수도 있지만
    ///6을 2로 나누고 + 2로 나눈 몫이 1로 가는 경우의 수가 될 수도 있지만
    //6을 3으로 나누고 + 3으로 나눈 몫이 1로 가는 경우의 수가 될 수도 있음
    if (i % 3 === 0) {
      if (dp[i / 3] + 1 < dp[i]) {
        dp[i] = dp[i / 3] + 1;
        before[i] = Math.floor(i / 3);
      }
    }
  }

  let cnt = dp[N];

  while (N > 1) {
    process += before[N] + " ";
    N = before[N];
  }
  return cnt + "\n" + process.trim();
}

console.log(solution(N));

// 2
// [0,0,1]

// 3
// [0,0,1,1]

// 4
// [0,0,1,1,2]

// 5
// [0,0,1,1,2,3]

// 6
// [0,0,1,1,2,3,2]

// 7
// [0,0,1,1,2,3,2,3]

// 8
// [0,0,1,1,2,3,2,3,3]

// 9
// [0,0,1,1,2,3,2,3,3,2]

// 10
// [0,0,1,1,2,3,2,3,3,2,3]
