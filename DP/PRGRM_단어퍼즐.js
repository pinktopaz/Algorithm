// strs는 사용 가능한 단어 조각들이 들어있는 배열로, 길이는 1 이상 100 이하입니다.
//t는 완성해야 하는 문자열이며 길이는 1 이상 20,000 이하입니다.

function solution(strs, t) {
  const dp = Array.from(t.length).fill(Infinity);

  for (let i = 0; i < t.length; i++) {
    const current = t.substr(0, i + 1);
    //b ba ban bana banan banana

    //strs = ["ba","na","n","a"]
    for (const str of strs) {
      // 현재 단계의 문자열과 단어조각 간 길이차를 구해주자
      //ex. bana n = 3
      if (current.endsWith(str)) {
        const diff = current.length - str.length;

        if (!diff) {
          dp[i] = 1;
        } else {
          dp[i] = Math.min(dp[i], dp[diff - 1] + 1);
        }
      }
    }
  }
}

//이해하고 다시 푼 풀이
/*
function solution(strs, t) {
    let count = Array(t.length+1).fill(Infinity);
    
    for(let i =1; i<t.length+1; i++){
        let word = t.slice(0,i);
        for(const str of strs) {
            if(word.endsWith(str)){
                let diff = word.length-str.length;
                if(!diff){
                    count[i] =1;
                } else {
                    count[i] = Math.min(count[i], count[diff]+1);
                }
            }
        }
    }
    return count[count.length-1] === Infinity ? -1 : count[count.length-1];
}
*/
