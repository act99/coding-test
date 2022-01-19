function solution(strings, n) {
  let answer = [];
  strings.sort();
  console.log(strings);
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  console.log(strings);
  strings.sort();
  console.log(strings);
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].substr(1, strings[i].length);
  }
  answer = strings;
  return answer;
}
