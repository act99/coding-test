function solution(n) {
  let answer = 0;
  // 10 => 1,2,
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? (answer = answer + i) : (answer = answer);
  }
  return answer;
}
