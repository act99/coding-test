function solution(s) {
  var answer = true;
  if (s.length == 4 || s.length == 6) {
    s.match(/[a-zA-z]/g) == null ? (answer = true) : (answer = false);
  } else {
    answer = false;
  }
  return answer;
}
