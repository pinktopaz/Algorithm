## 큐 : FILO

요소 추가 : enqueue <br/>
요소 제거 : dequeue <br/>
맨 앞 인덱스 : front <br/>
맨 뒤 인덱스 : rear

ex. 놀이공원 대기줄

---

### 선형큐를 구현하는 방법

1. Array로 표현하기 : 배열로 표헌하면 dequeue가 될 때마다 인덱스를 하나씩 앞으로 이동해주어야하는 문제 발생.
   ex. [1,2,3,4,5] -> [2,3,4,5] -> [2,3,4,5,6] -> [3,4,5]

```javascript
class Queue {
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
}

enqueue(value){
    this.queue[this.rear++] = value;
}

dequeue(){
    const value = this.queue[this.front];
    this.front += 1;
    return value;
}

peek(){
    return this.queue[this.front];
}

size(){
    return this.rear-this.front;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```

2. 연결리스트(Linked List로 표현하기) : 큐를 배열로 표현했을 때 발생하는 인덱스 이동 문제를 해결할 수 있다.
   $\rightarrow$ 코딩테스트에서 쓰기에는 조금 복잡하기 때문에 코테에서는 배열로 구현하는 것 추천!

```javascript
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

enqueue(newValue){
    const newNode = new Node(newValue);
    if(this.head === null) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size += 1;
}

dequeue(){
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
}

peek() {
    return this.head.value;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
```

---

## 원형큐를 구현하는 방법

- 배열로 구현하기 (연결리스트를 써도 딱히 장점이 없다)

```javascript
class Queue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue =[];
        this.front = 0;
        this.rear =0;
        this.size =0;
    }
}

enqueue(value) {
    if(this.isFull()) {
        console.log("Queue is full");
        return ;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) = this.maxSize;
    this.size += 1;
}

dequeue() {
    const value = this.queue[this.front];
    this.front = [this.front + 1] % this.maxsize;
    // 0~7 => 8%8=0
    this.size -= 1;
    return value;
}

isFull(){
    return this.size >= this.maxsize;
}

peek(){
    return this.queue[this.front];
}
```

---

## Shift 함수는 쓰지 마세요!

```javascript
const queue = [1, 2, 3];
queue.push(4);
const value = queue.shift(); //1
console.log(value);
```

$\rightarrow$ shift는 선형시간이 걸리기 때문에 큐에서 기대하는 효율이 나오지 않음
