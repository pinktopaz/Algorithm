const fs = require("fs");
let input = fs
  .readFileSync("Algorithm_basic_200/BOJ10866.txt")
  .toString()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.head = this.tail = newNode;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
  }

  push_back(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.head = this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }

  pop_front() {
    if (this.length) {
      let value = this.head.value;
      this.head = this.head.next;
      this.length--;
      return value + "\n";
    }
    return -1 + "\n";
  }

  pop_back() {
    if (this.length) {
      let value = this.tail.value;
      this.tail = this.tail.prev;
      this.length--;
      return value + "\n";
    }
    return -1 + "\n";
  }

  size() {
    return this.length + "\n";
  }

  empty() {
    return (this.length === 0 ? 1 : 0) + "\n";
  }

  front() {
    if (this.length) {
      return this.head.value + "\n";
    }
    return -1 + "\n";
  }

  back() {
    if (this.length) {
      return this.tail.value + "\n";
    }
    return -1 + "\n";
  }
}

let answer = "";
let deque = new Deque();

for (let i = 1; i < input.length; i++) {
  let [action, num] = input[i].split(" ");
  if (action === "push_front") {
    deque.push_front(num);
  } else if (action === "push_back") {
    deque.push_back(num);
  } else if (action === "pop_front") {
    const value = deque.pop_front();
    answer += value;
  } else if (action === "pop_back") {
    const value = deque.pop_back();
    answer += value;
  } else if (action === "size") {
    answer += deque.size();
  } else if (action === "empty") {
    answer += deque.empty();
  } else if (action === "front") {
    answer += deque.front();
  } else if (action === "back") {
    answer += deque.back();
  }
}

console.log(answer.trim());
