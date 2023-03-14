## 해시 테이블

키와 값을 받아 키를 hashing하여 나온 Index에 값을 저장하는 선형 자료 구조

- 한정된 배열 공간에 Key를 index로 변환하여 값들을 넣는다.
- 삽입, 삭제, 탐색 : O(1)
- hash : 감자를 잘게 다져 만든 해시브라운처럼 입력 받은 키를 숫자로 만드는 것.
- 해시 함수 : 입력받은 값을 특정 범위 내 숫자로 변경하는 것. 특별한 규칙이 있지는 않고, 우리가 만들면 됨.

ex. 사물함

---

### 문제점 - 해시 충돌 (Hash collision)

<br/>

#### Q. 만약 해시 함수 연산의 결과가 동일한 게 2개 이상 나와 충돌한다면?

<br/>

#### A. 해결 방법

1. 선형 탐사법 : 충돌이 발생하면 옆으로 한 칸 이동한다.

   - 이동했는데 또 충돌이 발생한다면 충돌이 발생하지 않을 때까지 이동한다. 그래서 최악의 경우 탐색에 O(n)이 걸릴 수 있다.

2. 제곱 탐사법 : 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.

   - 충돌이 발생할 수록 범위가 커지기 떄문에 선형 탐사법보다 충돌의 위험이 적다.

3. 이중해싱 : 충돌이 발생하면 다른 해시 함수를 이용한다.

   - 충돌이 발생하지 않을 때까지 두번째 해시함수로 인덱스를 계속 만들어낸다.

4. 분리연결법 : 버킷의 값을 연결리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.

   - 충돌이 발생할 경우 다른 인덱스로 이동하지 않는다.
   - 충돌이 발생할 경우 연결리스트가 무한정 늘어날 수 있다는 단점이 있다.

---

### 해시테이블 사용 예시

상황 : 학생 정보를 관리하려고 한다! 어떻게 기록해야 빠르게 기록하고 찾을 수 있을까?

#### 생각할 수 있는 것.

1. 연결리스트를 사용한다. - 기록은 빠르지만, 탐색에 선형시간이 걸린다.
2. 배열을 사용한다 - 인덱스를 모를 경우 탐색에 선형시간이 걸린다.

#### 최적의 대안 - 해시테이블

- 해시 테이블을 사용하면 탐색에 O(1)이 걸린다. (인덱스를 알고 있으니까)
  $\rightarrow$ 빠르게 값을 찾아야하는 경우에는 해시테이블을 사용하면 좋다.

---

### 자바스크립트에서 해시테이블 구현하기

1. 배열 사용하기
   - 올바른 사용법은 아니라 추천 X
   - 배열도 결국 내부 로직이 객체와 같아서 가능한 방법

```javascript
const table = [];
table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); //100
table["key"] = 349;
delete table["key"];
console.log(table["key"]); //undefined
```

2. 객체 사용하기 - 가장 간단한 방법

```javascript
const table = {};
table["key"] = 100;
table["key2"] = "Hello";
console.log(table["key"]); //100
table["key"] = 349;
delete table["key"];
console.log(table["key"]); //undefined
```

3. Map 객체 이용하기
   - set 함수를 이용하여 값을 넣고 get 함수를 이용하여 값을 찾을 수 있다.
   - 객체의 경우 들어오는 값이 정수가 아니라면 모두 문자열로 바꿔버리기 때문에 다양한 타입의 값을 다루고 싶다면 map 추천
   - 다양한 메소드 제공도 장점

```javascript
const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefinded
console.log(table.get("key")); // 100
const object = { a: 1 }; //key를 객체, 배열 형식으로도 저장할 수 있다
table.set(object, "A1");
console.log(table.get(object)); //A1
table.delete(object);
console.log(table.get(object)); //undefined
console.log(table.keys()); //{'key','key2'}
console.log(table.values()); //{100,'Hello'}
table.clear();
console.log(table.values()); //{}
```

4. Set 객체 이용하기
   - key와 값이 동일하게 저장됨
   - 중복된 내용을 지우고 싶을 때 사용하면 좋다.

```javascript
const table = new Set();
table.add("key");
table.add("key2");
console.log(table.has("key")); //true
console.log(table.has("key3")); //false
table.delete("key2");
console.log(table.has("key2"));
table.add("key3");
console.log(table.size); //2
table.clear();
console.log(table.size); //0
```
