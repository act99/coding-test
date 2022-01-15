function solution(numbers) {
  var answer = -1;
  let num = 45;
  let sumN = numbers.reduce((a, b) => () => a + b);
  answer = num - sumN;
  return answer;
}
