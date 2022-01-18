function solution(s) {
  let answer = "";
  let lower = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < lower.length; i++) {
    if (lower[i] === " ") {
      answer = answer + " ";
      count = 0;
    } else {
      if (count % 2 === 0) {
        answer = answer + lower[i].toUpperCase();
      } else {
        answer = answer + lower[i];
      }
      count = count + 1;
    }
  }

  return answer;
}
