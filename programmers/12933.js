function solution(n) {
  let answer = 0;
  let result = (n + "").split("").sort().reverse();
  answer = result.reduce((a, b) => a + b) * 1;
  return answer;
}
