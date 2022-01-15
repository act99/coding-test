function solution(s) {
  var answer = "";
  if (s.length % 2 != 0) {
    let num = Math.floor(s.length / 2);
    answer = s[num];
  } else {
    let num = Math.floor(s.length / 2);
    answer = s[num - 1].concat(s[num]);
  }
  return answer;
}
