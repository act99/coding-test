let input1 = 3;
let input2 = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

const solution = (input1, input2) => {
  let array = [];
  let i = 0;
  // 배열에서 순서대로 3개씩 묶을 수 있는 모든 경우의 수 array에 넣어줌
  while (i - input1 < input2.length) {
    if (input2[i + 2] !== undefined) {
      array.push([input2[i], input2[i + 1], input2[i + 2]]);
    } else {
      break;
    }
    i++;
  }
  //각각의 요소들을 더해서 max 값을 만들어 줌
  let dummy = [];
  for (let i = 0; i < array.length; i++) {
    dummy.push(array[i].reduce((a, b) => a + b));
  }
  let max = Math.max(...dummy);
  console.log(max); // 56
};

solution(input1, input2);
