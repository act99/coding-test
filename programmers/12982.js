function solution(d, budget) {
  var answer = 0;
  d.sort((a, b) => a - b);
  console.log(d);
  for (let i = 0; i < d.length; i++) {
    if (budget - d[i] >= 0) {
      budget = budget - d[i];
      answer = answer + 1;
    }
  }
  return answer;
}
