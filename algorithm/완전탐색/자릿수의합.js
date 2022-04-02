let input = [128, 460, 603, 40, 521, 137, 123];

const solution = (input) => {
  let answer = [];
  let array = input.map((item) => item + "");
  let maxArray = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let k = 0; k < array[i].length; k++) {
      sum = sum + array[i][k] * 1;
    }
    answer = [...answer, [sum, array[i]]];
    maxArray = [...maxArray, sum];
  }
  let maxNum = Math.max(...maxArray);
  let result = [];
  for (let i = 0; i < answer.length; i++) {
    answer[i][0] === maxNum ? result.push(answer[i]) : null;
  }
  let resultAnswer = 0;
  for (let i = 0; i < result.length; i++) {
    result[i][1] * 1 > resultAnswer
      ? (resultAnswer = result[i][1])
      : (resultAnswer = resultAnswer);
  }
  console.log(resultAnswer);
};

solution(input);
