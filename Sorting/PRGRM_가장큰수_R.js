//https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  // const isZero = numbers.reduce((sum,val)=> sum + val);
  // if(!isZero) return "0";

  //303-330 :음수 - 30,3을 3,30으로 바꿈
  //예를 들어 a=3 b=30일 경우, a와 b는 현재 문자열이기 때문에 a+b는 330, b+a는 303이 된다.

  //이 두 문자열을 비교해 내림차순으로 더 큰게 앞에 오도록 (b+a)-(a+b)를 리턴해준다. 330 - 303
  //function(a,b){return a-b} : 양수면 교환, 음수면 그대로
  //a는 무조건 앞 인덱스 b는 무조건 뒤 인덱스 : a-b가 양수면 앞에가 뒤에보다 크다는 뜻 => 둘이 자리를 바꾸는 식으로 정렬하면 오름차순
  //b-a가 양수면 뒤가 앞보다 크다는 뜻 => 둘이 자리를 바꾸는 식으로 정렬하면 내림차순
  let arr = numbers.map((v) => v.toString()).sort((a, b) => b + a - (a + b));
  if (arr[0] === "0") return "0";

  let answer = arr.join("");

  return answer;
}
