function solution(absolutes, signs) {
  var answer = 123456789;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] == true ? (absolutes[i] = absolutes[i]) : (absolutes[i] *= -1);
  }
  answer = absolutes.reduce((a, b) => a + b);
  return answer;
}
