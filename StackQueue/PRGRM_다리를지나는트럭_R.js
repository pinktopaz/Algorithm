//https://school.programmers.co.kr/learn/courses/30/lessons/42583

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.sum = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
      this.sum += newNode.value;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.sum += newNode.value;
      this.size++;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    this.sum -= value;
    return value;
  }
}

function solution(truck_max, max_weight, truck_weights) {
  let count = 0;

  const queue = new Queue();

  for (let i = 0; i < truck_max; i++) {
    queue.enqueue(0);
  }

  //마지막 0 6 까지 들어와서 truck_weight에 없는 경우애는 6 0 / 0 0 이 두 번의 계산을
  //dequeue로 해준다.
  while (queue.size) {
    queue.dequeue();
    count++;

    if (truck_weights.length)
      if (queue.sum + truck_weights[0] <= max_weight) {
        //큐에 넣는 작업은 truck_weights에 뭔가 있을 때만 하고, 나중에는 dequeue만 하니까 이 부분 필요!
        queue.enqueue(truck_weights.shift());
      } else {
        queue.enqueue(0);
      }
  }

  return count;
}

//배운 점
// 1. shift-unshift를 안쓰려고 하다가 더 꼬인 것 같다. 연결리스트로 구현하면서 효율을 많이 높였으니 shift를 써도 괜찮지 않을까
// 2. 예시에서 준 거를 그대로 구현한다고 생각하면 좋은 문제인 것 같다.
// 3. 지나치는 그 과정을 0으로 표현하면 sum에 영향을 주지 않으면서 dequeue로 시간도 잴 수 있다.

//풀이 횟수
//2 (2023.03.13 틀림)
