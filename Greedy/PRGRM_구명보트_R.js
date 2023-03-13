//https://school.programmers.co.kr/learn/courses/30/lessons/42885?language=javascript
//참고 : https://velog.io/@diddnjs02/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8

//이렇게 했더니 테스트 케이스 2개는 통과했는데 시간 초과가 남. 정확성테스트 테스트케이스 다른 1개도 실패함.
/*function solution(people, limit) {
    let newPeople = people.sort((a,b)=>b-a);
    let count = 0;
    
    while(newPeople.length){
        const pair = newPeople[0];
        const arr = newPeople.filter(function(el){
            return (limit-pair) >= el;
        })
        
        if(arr.length){
            const pairr = Math.max(...arr);
            count ++;
        
           newPeople = newPeople.filter(function(el){
                if(el !== pair || el !== pairr) 
                    return el;
            })
            continue;
        }
        newPeople = newPeople.filter(function(el){
                if(el !== pair) 
                    return el;
            })
        count ++;
    }
    return count;
}
*/

//이렇게 했더니 정확성테스트 테스트 케이스 3개는 성공하는데 나머지가 시간초과 -> 그럴수 밖에,,,O(n^2)까지 나온다
/*
function solution(people, limit) {
    let newPeople = people.sort((a,b)=>b-a);
    let count = 0;
    
    while(newPeople.length){
        const pair = newPeople[0];
        const arr = newPeople.filter(function(el){
            return (limit-pair) >= el;
        })
        console.log(arr);
        
        if(arr.length > 0){
            const pairr = Math.max(...arr);
            count ++;
        
           newPeople = newPeople.filter(function(el){
                if(el !== pair || el !== pairr) 
                    return el;
            })
        } else {
            newPeople.shift();
            count ++;
    }

}
    return count;
}

*/

function solution(people, limit) {
  let newPeople = people.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0, j = newPeople.length - 1; i <= j; j--) {
    if (newPeople[i] + newPeople[j] <= limit) {
      i++;
      count++;
    } else {
      count++;
    }
  }

  return count;
}
