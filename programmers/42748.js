function solution(array, commands) {
  let answer = [];
  let result = [];
  commands.map(function (item, index) {
    for (let i = 0; i < commands.length; i++) {
      let j = array.slice(item[0] - 1, item[1]).sort((a, b) => a - b)[
        item[2] - 1
      ];
      answer.push(j);
      break;
    }
  });
  return answer;
}
