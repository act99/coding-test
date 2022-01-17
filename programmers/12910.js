function solution(arr, divisor) {
  var answer = [];
  arr.map((item) => (item % divisor == 0 ? answer.push(item) : null));
  answer.length == 0 ? answer.push(-1) : answer.sort((a, b) => a - b);

  return answer;
}
