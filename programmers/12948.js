function solution(phone_number) {
  var answer = "";
  let row = "*".repeat(phone_number.length - 4);
  answer = row + phone_number.slice(-4);
  return answer;
}
