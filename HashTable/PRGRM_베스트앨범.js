//https://school.programmers.co.kr/learn/courses/13213/lessons/91081

//1. 같은 장르끼리 묶어야함
//2. 묶인 노래들을 재생 순으로 정렬을 해야함
//3. 노래를 2개까지 잘라야함

//핵심 키워드 : "묶기", "정렬"

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]]) //[classic, 500]
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      }); //{{classic, {500+150+800, [{800,3},{500,0},{150,2}]}},{pop,{600+2500, [{2500,4},{600,1}]}}}
    });

  return (
    [...genreMap.entries()] //key,value 함께 반환
      //{{classic, {total : 1350, songs : [{800,3},{500,0},{150,2}]}},{pop,{total : 3100, songs :  [{2500,4},{600,1}]}}}
      .sort((a, b) => b[1].total - a[1].total)
      //{{pop,{total : 3100, songs :  [{2500,4},{600,1}]}}, {classic, {total : 1350, songs : [{800,3},{500,0},{150,2}]}}}
      .flatMap((item) => item[1].songs) //{{2500,4}, {600,1},{800,3},{500,0}}
      .map((el) => el.index)
  );

  console.log(genreMap);
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
