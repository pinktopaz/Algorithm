//https://school.programmers.co.kr/learn/courses/30/lessons/42860
//참고링크 : https://chamdom.blog/pg2-42860/

function solution(name) {
  let answer = 0;

  //좌우 이동 값
  //최대로 이동하는 건 그냥 옆으로 쭉쭉쭉 가는 거니까
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let tmp = name.charCodeAt(i);

    if (tmp < 78) answer += tmp - 65;
    else answer += 91 - tmp;

    let nextIndex = i + 1;

    //일단 A있는대로 쭉 가보고
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    //1. 그냥 오른쪽으로 쭉 가는 경우 ex.BBBBB
    //2. 앞으로 가다가 뒤로 돌아가는 경우 ex. JAAAN
    ///3. 그냥 뒤에서부터 가다가 앞으로 돌아와야하는 경우 ex.AJAN (이거를 체크를 못함)
    min = Math.min(
      min,
      i * 2 + name.length - nextIndex,
      i + 2 * (name.length - nextIndex)
    );
  }
  answer += min;
  return answer;
}

//i+2*(name.length-nextIndex))
//맨 앞이 A여서 뒤부터 가는 경우 (ex. AJAN)
