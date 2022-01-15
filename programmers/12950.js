function solution(arr1, arr2) {
  var answer = [];
  for (let a = 0; a < arr1.length; a++) {
    let array = [];
    for (let b = 0; b < arr1[0].length; b++) {
      let god = arr1[a][b] + arr2[a][b];
      array.push(god);
    }
    answer.push(array);
  }
  return answer;
}
