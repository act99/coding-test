function solution(s) {
  var answer = 0;
  s.includes("-")
    ? (answer = parseInt(s.substr(1, s.length - 1)) * -1)
    : (answer = parseInt(s));
  return answer;
}
