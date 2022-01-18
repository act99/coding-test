function solution(n) {
  var answer = 0;
  let sqr = Math.sqrt(n);
  if (Number.isInteger(sqr) === true) {
    answer = Math.pow(sqr + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}
