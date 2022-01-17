function solution(price, money, count) {
  var answer = -1;
  let total = 0;
  for (let i = 1; i < count + 1; i++) {
    total += price * i;
  }
  money - total > 0 ? (answer = 0) : (answer = (money - total) / -1);

  return answer;
}
