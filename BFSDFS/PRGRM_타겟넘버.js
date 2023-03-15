//https://school.programmers.co.kr/learn/courses/30/lessons/43165

//각 경로마다의 부호와 계산 값을 저장해줘야하니까 이건 dfs
//같은 원리의 연산을 끝까지 수행해야하니까 dfs

//input : [1, 1, 1, 1, 1], 3

function solution(numbers, target) {
  const length = numbers.length;
  let ans = 0;

  const dfs = (currentNumber, index) => {
    if (index === length) {
      if (target === currentNumber) {
        ans += 1;
      }
      return;
    }

    dfs(currentNumber + numbers[index], index + 1);
    dfs(currentNumber - numbers[index], index + 1);
  };

  dfs(0, 0);
  // (4,1)
  //(-4,1)

  return ans;
}

// solution([4, 1, 2, 1], 4);

function ssolution(numbers, target) {
  let ans = 0;

  const dfs = (sum, index) => {
    if (index === numbers.length) {
      if (sum === target) ans++;
      return;
    }

    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  };

  dfs(0, 0);
  return ans;
}
