function solution(numbers) {
  var answer = [];
  let sumResult = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (answer.includes(sum)) {
      } else {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
