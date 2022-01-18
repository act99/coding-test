function solution(n) {
  let answer = 0;
  let three = n.toString(3).split("").reverse().join("");
  answer = parseInt(three, 3);
  return answer;
}
