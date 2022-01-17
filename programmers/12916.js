function solution(s) {
  var answer = true;
  let lower = s.toLowerCase();
  let num = 0;
  let rowArr = [];
  let refineArr = [];
  for (let i = 0; i < lower.length; i++) {
    rowArr.push(lower[i]);
  }
  for (let i = 0; i < lower.length; i++) {
    rowArr[i] == "p" || rowArr[i] == "y" ? refineArr.push(rowArr[i]) : null;
  }
  for (let i = 0; i < refineArr.length; i++) {
    refineArr[i] == "p" ? (num += 1) : (num -= 1);
  }
  num == 0 ? (answer = true) : (answer = false);
  return answer;
}
