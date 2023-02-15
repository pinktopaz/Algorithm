### Big O Notation

- 빅오는 대략적으로 숫자를 세는 것에 붙인 공식적인 표현입니다.
- 어떤 함수의 입력값이 늘어나는 것과 그것의 실행시간 변화의 관계를 의미합니다.
- 일반적으로 가장 높은 실행시간을 말한다.
- 하드웨어의 영향을 받지 않는다.

```javascript
function addUpTo(n) {
    return n * (n  + 1) + / 2;
}
```

$\rightarrow$ n에 어떤 숫자가 들어가든지 항상 3번의 연산을 실행함. 이럴 때는 O(1)로 표기할 수 있음

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += 1;
  }
  return total;
}
```

$\rightarrow$ n에 따라서 연산의 개수가 늘어남. (ex. 10n) 이럴 때는 O(n)으로 표기할 수 있음.

```javascript
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

$\rightarrow$ for문 하나당 O(n)의 복잡도를 가지는데, 중첩되어 있기 때문에 O(n^2)이다. n이 커질 때마다 실행시간이 n의 제곱으로 늘어난다.

### Big O Notation 단순화하기

- 전체적인 그림을 보기 떄문에
  - 앞에 상수는 다 떼고 변수만 적는다 </br>
    ex. O(2n) $\rightarrow$ O(n) , O(1000n+50) $\rightarrow$ O(n)
  - 최고차항만 취한다.
    ex. O(n^2 + 5n +8) $\rightarrow$ O(n^2)
  - O(500) : 어떤 수를 넣던 지 500번의 연산이 있다는 뜻 $\rightarrow$ 그냥 O(1)로 단순화한다.

```javascript
function logAtLeast5(n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
}
```

$\rightarrow$ 5보다 작으면 5까지, 5보다 크면 n까지 반복할 것. 5를 신경쓸 수는 있지만, n이 작을 경우에만 중요한 부분. 주목할 부분은 n이 커지는 부분. 그래서 O(n)이라고 말할 수 있다.

```javascript
function logAtMost5(n) {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
}
```

$\rightarrow$ 여기서는 n이 아무리 커져도 아무 영향을 주지 않는다. 5보다 크면 5를 취할 것이기 때문에! n이 커질 수록 빅오는 상수라고 간주할 수 있기 때문에 O(1)이다.

### Logarithms

- 로그함수랑 지수함수는 짝 (서로 역함수 관계) </br>
  log2(value) = exponent $\rightarrow$ 2^exponent = value

- log2(8) = 3 => 8을 몫이 1보다 크지 않을 때까지 나눈 횟수 </br>

  - 8/2 = 4
  - 4/2 = 2
  - 2/2 = 1

- O(1) < O(log n) < O(n) < O(n \*log n) < O(n^2)
