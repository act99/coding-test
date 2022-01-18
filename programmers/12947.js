function solution(x) {
  let answer = true;
  let sum = (x + "").split("").reduce((a, b) => a * 1 + b * 1);
  return x % sum === 0 ? true : false;
}
