const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "Recursion/BOJ24060.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

// v.split(" ").map((v) => +v));
// +"4" === 숫자 4

//구조 분해 할당
//[ [ 5, 7 ], [ 4, 5, 1, 3, 2 ] ]
const [[N, K], arr] = input;

// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// let K = Number(input[0].slice(2, 3));
// let arr = input[1].split(" ").map((element) => Number(element));

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    cnt++;
    if (cnt === K) ans = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    cnt++;
    if (cnt === K) ans = result[result.length - 1];
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    cnt++;
    if (cnt === K) ans = result[result.length - 1];
  }

  return result;
}

let cnt = 0;
let ans = -1;
function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = merge_sort(arr.slice(0, mid));
  let right = merge_sort(arr.slice(mid));
  return merge(left, right);
}

merge_sort(arr);
console.log(ans);
