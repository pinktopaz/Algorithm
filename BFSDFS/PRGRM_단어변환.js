//https://school.programmers.co.kr/learn/courses/30/lessons/43163

//노드, 간선의 관계가 안보이는데 어떻게 bfs, dfs로 접근?
//words에 들어간 각각의 단어를 node라고 생각해보자
//만약 다른 노드가 하나의 노드와 철자가 딱 하나만 다르다면 그 노드들은 서로 간선으로 연결되어 있다.

const isConnected = (str1, str2) => {
  let cnt = 0;

  const len = str1.length;

  for (let i = 0; i < len; i++) {
    if (str1[i] !== str2[i]) cnt++;
  }

  if (cnt === 1) return true;
  return false;
};

function solution(begin, target, words) {
  const isVisited = { [begin]: 0 };
  const queue = [begin];

  while (queue.length) {
    const val = queue.shift();

    if (val === target) break;

    for (const word of words) {
      if (isConnected(word, val) && !isVisited[word]) {
        queue.push(word);
        isVisited[word] = isVisited[val] + 1;
      }
    }
  }

  return isVisited[target] ? isVisited[target] : 0;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
