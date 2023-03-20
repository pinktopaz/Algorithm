// const filePath =
//   process.platform === "linux"
//     ? "/dev/stdin"
//     : "Algorithm_basic_200/BOJ10845.txt";

const fs = require("fs");
let action = fs.readFileSync("/dev/stdin").toString().split("\n");

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
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
      this.length++;
    }
  }

  pop() {
    if (this.length > 0) {
      const value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value;
    }
    return -1;
  }

  siize() {
    return this.length;
  }

  front() {
    return this.head === null ? -1 : this.head.value;
  }

  back() {
    return this.tail === null ? -1 : this.tail.value;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }
}

let queue = new Queue();
let answer = [];

for (let i = 1; i < action.length; i++) {
  let [act, num] = action[i].split(" ");
  if (act === "push") queue.push(Number(num));
  else if (act === "front") answer.push(queue.front());
  else if (act === "back") answer.push(queue.back());
  else if (act === "size") answer.push(queue.siize());
  else if (act === "pop") answer.push(queue.pop());
  else answer.push(queue.empty());
}

console.log(answer.join("\n"));
