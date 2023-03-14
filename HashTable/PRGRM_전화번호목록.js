//https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (
        phone_book[i].includes(phone_book[j]) ||
        phone_book[j].includes(phone_book[i])
      )
        return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
