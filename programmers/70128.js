function solution(a, b) {
  var answer = 0;
  let num = 0;
  for (let i = 0; i < a.length; i++) {
    num = a[i] * b[i];
    answer += num;
  }

  return answer;
}
