function solution(n) {
  var answer = "";
  let array = [];
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? array.push("수") : array.push("박");
  }
  answer = array.reduce((a, b) => a + b);
  return answer;
}
