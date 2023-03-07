//https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  //최소로 가능한 학생 수
  var answer = n - lost.length;
  //여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
  //남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
  //filter => 조건에 맞는 애들만 배열에 넣어서 반환해준다!
  let realLost = lost.filter((el) => !reserve.includes(el));
  let realReserve = reserve.filter((el) => !lost.includes(el));
  answer += lost.length - realLost.length;

  //sort : 기본적으로는 오름차순 정렬
  //비교 함수를 인자로 넣어주지 않으면 유니코드 기준으로 문자열을 정렬하기 떄문에
  //[4, 11, 2, 10, 3, 1]이 [1, 10, 11, 2, 3, 4 ]로 정렬됨
  //숫자 배열을 정렬하고 싶을 떄에는 비교함수를 꼭 넣어줘야한다.
  //비교함수의 반환값이 0보다 작으면, a의 index가 b보다 작다.
  //반환값이 0보다 크면, b의 index가 a보다 작다.
  //테스트케이스에서 realLost가 정렬이 되어있지 않은 경우
  //[4,2] [1,3,5]에서 3을 먼저 지우면 2는 체육복을 받을 수 없기 떄문에 정렬해줌
  realLost.sort((a, b) => a - b);

  realLost.forEach((el) => {
    if (realReserve.length === 0) {
      return;
    }
    if (realReserve.includes(el - 1)) {
      realReserve = realReserve.filter((r) => r !== el - 1);
      answer++;
    }
    //그냥 if로 분기처리를 하면 [2,4] [1,3,5]에서 1이 지워지고 나서 3을 또 지우기 떄문에 else로 해주어야한다!
    else if (realReserve.includes(el + 1)) {
      realReserve = realReserve.filter((r) => r !== el + 1);
      answer++;
    }
  });

  return answer;
}
