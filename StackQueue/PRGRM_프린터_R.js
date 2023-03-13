//https://school.programmers.co.kr/learn/courses/30/lessons/42587

//2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
//를 보고 큐라는 것을 캐치할 수 있어야함.

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
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.size++;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  //내림차순 정렬 (숫자가 클수록 중요)
  //이거랑 맞는지 아닌지 비교해서 순서대로 빼주면 큐로 정렬될 때까지의 cnt를 구할 수 있다
  priorities.sort((a, b) => b - a);

  let count = 0;
  while (queue.size > 0) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      //dequeue될 때만 count를 더해주면 순서를 구할 수 있다.
      count++;
      if (location === value[1]) {
        return count;
      }
    }
  }

  return count;
}

//배운 점
//1. 큐에서 연결리스트로 큐를 그냥 구현해버리면 편리하다
//2. 고려해야하는 값이 2개 있을 때는 그 두개를 하나의 배열에 넣고, 그걸 다시 배열에 넣는 식으로 하면 비교하기 편함
//3. 최종 결과값을 어떻게 계산해야하는지에 집중해보자. 무작정 구현하지 말고.
//4. 여기서는 프론트,리어보다 연결리스트가 더 좋은 방법이었구나!

//풀이 횟수
//2 (2023.03.13 틀림)
