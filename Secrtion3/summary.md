### 객체

```javascript
const instructor = {
    firstName : "Kelly",
    isInstructor : true,.
    favoriteNumbers : [1,2,3,4]
}
```

$\rightarrow$ 객체는 삽입, 제거, 접근하는 시간이 모두 상수시간(O(1))이다. </br> 하지만 검색 시간은 O(n)이다. 잠재적으로 모든 key를 둘러봐야 원하는 값을 찾아낼 수 있기 때문이다.

</br>

### 객체 내장 함수

- `Object.keys(instructor); // ["firstName", "isInstructor", "favoriteNumbers"]`
- `Object.values(instructor); // ["Kelly", true, [1,2,3,4]]`
- `Object.entries(instructor); //[["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1,2,3,4]]]` </br>

  $\rightarrow$ O(n) : 아이템 개수가 늘어나면서 각 아이템에 접근해서 배열에 추가하는 형식이라서 객체의 검색 시간과 같은 O(n)

- `instructor.hasOwnProperty("firstName"); //true ` </br>

  $\rightarrow$ O(1) : 인자로 들어온 key 값을 통해 바로 값이 있는지 확인할 수 있기 때문에 상수 시간

---

### 배열 : 객체와 다르게 정렬이 되어있다.

</br>

- 접근 : O(1) </br>

  $\rightarrow$ 9000번쨰 아이템을 찾으려고 하면, 9000번으로 바로 갈 수 있는 지름길이 있다. 1부터 하나씩 다 검사할 필요가 없다.

- 삽입, 삭제 : it depends

  - 배열 맨 뒤에서 추가/삭제(push,pop)한다면 (push) O(1)
  - 배열 맨 앞에서 추가/삭제(unshift, shift)한다면 O(n) : 모든 인덱스마다 인덱스 값을 새로 줘야하니까!

- 검색 : O(n)

  $\rightarrow$ push, pop(O(1))이 unshift, shift(O(n))보다 항상 빠르다! (빈배열일 때 제외하고!)

</br>

### 배열 내장 함수

- concat, splice, slice, forEach, map, filter, reduce . . . : O(n)
- sort : O(nlogn)
