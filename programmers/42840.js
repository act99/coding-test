function solution(answers) {
  let answer = [];
  let supos = [
    [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let correctArray = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    answers[i] === supos[0][i % supos[0].length]
      ? (correctArray[0] += 1)
      : null;
    answers[i] === supos[1][i % supos[1].length]
      ? (correctArray[1] += 1)
      : null;
    answers[i] === supos[2][i % supos[2].length]
      ? (correctArray[2] += 1)
      : null;
  }
  let dummyArray = [];
  for (let i = 0; i < correctArray.length; i++) {
    dummyArray.push(correctArray[i]);
  }
  let max = dummyArray.sort((a, b) => b - a)[0];
  console.log(max);
  console.log(correctArray);
  for (let i = 0; i < 3; i++) {
    if (correctArray[i] === max) {
      answer.push(i + 1);
    } else {
    }
  }
  return answer;
}
