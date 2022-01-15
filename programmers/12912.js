function solution(a, b) {
  var answer = 0;
  if (a == b) {
    answer = a;
  } else {
    if (a < b) {
      let sum = 0;
      for (let i = a; i < b + 1; i++) sum += i;
      answer = sum;
    } else {
      let sum = 0;
      for (let i = b; i < a + 1; i++) {
        sum += i;
        answer = sum;
      }
    }
  }
  return answer;
}
