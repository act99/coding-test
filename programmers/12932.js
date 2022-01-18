function solution(n) {
  var answer = [];
  let result = (n + "").split("").reverse();
  for (let i = 0; i < result.length; i++) {
    answer.push(result[i] * 1);
  }
  return answer;
}
