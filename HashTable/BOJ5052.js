//https://www.acmicpc.net/problem/5052
//프로그래머스 전화번호목록과 같은 형태

const input = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {});
