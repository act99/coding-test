function solution(num) {
  var answer = 0;
  let count = 0;
  for (let i = 0; i < 501; i++) {
    if (num === 1) {
      break;
    } else {
      if (num % 2 === 0) {
        num = num / 2;
        count = count + 1;
      } else {
        num = num * 3 + 1;
        count = count + 1;
      }
    }
  }
  console.log(count);
  if (count === 501) {
    answer = -1;
  } else {
    answer = count;
  }
  return answer;
}
