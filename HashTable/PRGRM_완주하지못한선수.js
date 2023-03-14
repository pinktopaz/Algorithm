//https://school.programmers.co.kr/learn/courses/30/lessons/42576

//그냥 반복문 + 배열 이용해서 풀이한 방법
function solution(participants, completion) {
  participants.sort();
  completion.sort();
  console.log(participants, completion);

  for (let i = 0; i < completion.length; i++) {
    if (participants[i] !== completion[i]) return participants[i];
  }
  return participants[participants.length - 1];
}

//교훈
// 1. 숫자가 아니라도 문자열이라도 sort를 하면 순서를 맞출 수 있다는 걸 기억하자.
// 2. for of 가 아니라 일반 let i=0 반복문은 두 배열을 함께 비교할 수 있어서 좋다!

//해시를 이용한 방법

//1. map 사용한 방법
function solution(participants, completion) {
  const myMap = new Map();

  for (const participant of participants) {
    if (!myMap.get(participants)) myMap.set(participant, 1);
    //중복되는 이름이 있으면 개수만 올려주기
    else myMap.set(participant, myMap.get(participant) + 1);
  }

  for (const completion of completion) {
    if (myMap.get(completion)) {
      //해당되는 게 있으면 1을 뺴주기
      myMap.set(completion, myMap.get(completion) - 1);
    }
  }

  for (const participant of participants) {
    if (myMap.get(participant) && myMap.get(participant) >= 1) {
      answer = participant;
    }
  }
}

// 2. 배열 사용한 방법 (인덱스를 문자열로 줄 수 있다.)
function solution(participant, completion) {
  let hashed = [];
  participant.forEach((entry) => {
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
  });
  completion.forEach((entry) => {
    hashed[entry]--;
  });
  hashed.forEach((el) => {
    if (el >= 1) {
      return key;
    }
  });
}
