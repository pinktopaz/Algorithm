//https://school.programmers.co.kr/learn/courses/30/lessons/49189

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const val = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return val;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(n, edge) {
  //인접 리스트로 구현하기
  //편의상 인덱스를 1번부터 시작하도록 하기 위해서 n+1
  const graph = Array.from(Array(n + 1), () => []);

  //src : 시작점, dest : 도착점
  for (const [src, dest] of edge) {
    //양방향 간선을 만들기 위해
    graph[src].push(dest);
    graph[dest].push(src);
  }

  //각 정점까지의 거리를 기록할 배열
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  //큐를 연결리스트로 직접 구현했을 때
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  //큐를 배열로 구현했을 때
  // const queue = [1];
  // while(queue.length) {
  //     //shift는 O(n)이지만 요소의 개수가 적을 경우 자바스크립트 엔진에서 최적화를 해준다
  //     const src = queue.shift();
  //     for(const dest of graph[src]){
  //         //한 번도 가지 않은 경로
  //         if(distance[dest] === 0) {
  //             queue.push(dest);
  //             distance[dest] = distance[src] +1;
  //         }
  //     }
  // }

  //Math.max의 인자로 배열이 들어갈 수 없어서 펼쳐줘야함
  //flat은 배열 안의 배열을 펼쳐서 배열을 return 하는 것
  const max = Math.max(...distance);
  const newArr = distance.filter((el) => el === max);
  return newArr.length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
