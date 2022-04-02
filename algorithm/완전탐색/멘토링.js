let input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

const solution = (input) => {
  let answer = 0;
  let array = [];
  for (let i = 0; i < input[0].length; i++) {
    array.push([]);
  }
  for (let i = 0; i < input.length; i++) {
    let dummy = [];
    for (let k = 0; k < input[0].length; k++) {
      array[input[i][k] - 1].push(k + 1);
    }
  }
  // 학생 순서대로 배열 만든 후 학생들의 순위를 넣어줌
  // 그다음 전체 비교
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let counter = 0;
      for (let k = 0; k < array[0].length; k++) {
        if (array[i][k] < array[j][k]) {
          counter++;
        }
      }
      if (counter === 3) {
        answer++;
      }
    }
  }

  return answer;
};

console.log(solution(input));
