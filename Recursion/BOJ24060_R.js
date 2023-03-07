const fs = require("fs");
const input = fs
  .readFileSync("/Users/Heather/Algorithm/Section7/BOJ24060.txt")
  .toString()
  .trim()
  .split("\n");

let K = Number(input[0].slice(2, 4));
let arr = input[1].split(" ").map((element) => Number(element));
let cnt = 0;
let ans = -1;

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    cnt++;
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (cnt === K) ans = result[result.length - 1];

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

function merge_sort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = merge_sort(arr.slice(0, mid));
  let right = merge_sort(arr.slice(mid));
  return merge(left, right);
}

merge_sort(arr);
console.log(cnt);
console.log(ans);
