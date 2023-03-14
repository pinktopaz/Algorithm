//https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  const num = nums.length / 2;
  let answer = 0;

  const type = [...new Set(nums)]; //중복 없애기 위해

  if (type.length >= num) return (answer = num);
  else {
    return (answer = type.length);
  }
}
