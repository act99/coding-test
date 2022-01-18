function solution(n) {
  let answer = 0;
  let str = n + "";
  let arr = str.split("");
  let sum = arr.reduce((a, b) => a * 1 + b * 1);
  answer = sum * 1;
  return answer;
}
