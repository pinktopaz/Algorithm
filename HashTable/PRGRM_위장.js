//https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

//테케는 통과했지만 틀림
/*function solution(clothes) {
  const map = new Map();
  let sum = 0;
  let mul = 1;

  clothes.forEach(([specific, type]) => {
    if (map.get(type)) {
      map.get(type).push(specific);
    } else {
      map.set(type, [specific]);
    }
  });

  map.forEach((value, key) => {
    sum += value.length; //3
  });

  console.log([...map.entries()]);
  if ([...map.entries()].length !== 1) {
    map.forEach((value, key) => {
      sum += value.length; //3
    });
    return sum;
  } else {
    return sum;
  }
}*/
// -> 종류가 3개일 경우 그 3개 중 2개를 골라서 개수를 곱한 값과 3개를 모두 곱한 값을 더해줘야하는데 그 방법 몰랐음.

//[옷1,옷2,옷3,안입음]으로 해서 length+1 을 해서 곱해준 후 -1(전부다 안입는 경우)를 해주면 위의 문제를 해결할 수 있다.
function solution(clothes) {
  const map = new Map();
  let mul = 1;

  clothes.forEach(([specific, type]) => {
    if (map.get(type)) {
      map.get(type).push(specific);
    } else {
      map.set(type, [specific]);
    }
  });

  [...map.entries()].forEach((el) => {
    mul *= el[1].length + 1;
  });
  return mul - 1;
}

console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
