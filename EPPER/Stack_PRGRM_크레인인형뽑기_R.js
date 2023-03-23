//https://school.programmers.co.kr/learn/courses/30/lessons/64061

// function solution(board, moves) {
//   let realBoard = Array.from(Array(board.length), () => []);

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       if (board[i][j] !== 0) {
//         realBoard[j].push(board[i][j]);
//       }
//     }
//   }

//   let result = [];
//   let cnt = 0;

//   for (let i = 0; i < moves.length; i++) {
//     const val = realBoard[moves[i] - 1].shift();
//     if (val === 0) continue;

//     if (result.length === 0 || val !== result[result.length - 1]) {
//       result.push(val);
//     } else {
//       result.pop();
//       cnt += 2;
//     }
//   }

//   return cnt;
// }

//undefined인 경우 예외처리 해줘야함

function solution(board, moves) {
  let realBoard = Array.from(Array(board.length), () => []);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== 0) {
        realBoard[j].push(board[i][j]);
      }
    }
  }

  let result = [];
  let cnt = 0;

  for (let i = 0; i < moves.length; i++) {
    const val = realBoard[moves[i] - 1].shift(); // [0,0,0,0,0] 인 스택에서 꺼내게 되면 undefined가 나옴
    const lastVal = result[result.length - 1];

    if (lastVal === val && lastVal !== undefined) {
      result.pop();
      cnt += 2;
    } else {
      result.push(val);
    }
  }

  return cnt;
}

let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

solution(board, moves);

// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1
