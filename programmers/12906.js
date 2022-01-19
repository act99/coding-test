function solution(arr) {
  let answer = [];
  // indexOf와 splice 사용
  for (let i = 0; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    } else {
    }
  }
  // arr.splice(arr.indexOf(1), 1)
  console.log(arr);
  return answer;
}
