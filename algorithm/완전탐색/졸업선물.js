let input1 = 28;
let input2 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

const solution = (input1, input2) => {
  input2.sort(function (a, b) {
    if (a[0] + a[1] > b[0] + b[1] || a[0] / 2 + a[1] > b[0] / 2 + b[1]) {
      return 2;
    } else if (a[0] + a[1] == b[0] + b[1] && a[0] == b[0]) {
      return 1;
    } else if (
      a[0] + a[1] == b[0] + b[1] &&
      a[0] / 2 + a[1] < b[0] / 2 + b[1]
    ) {
      return -1;
    } else {
      return 0;
    }
  });
  // 여기서 input2 는 [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 10, 3 ], [ 6, 6 ] ] 로 정렬 됨
  let counter = 0;
  for (let i = 0; i < input2.length; i++) {
    if (input2[i].reduce((a, b) => a + b) <= input1) {
      input1 = input1 - input2[i].reduce((a, b) => a + b);
      counter++;
    } else if (input2[i][0] / 2 + input2[i][1] <= input1) {
      input1 = input1 - input2[i].reduce((a, b) => a + b);
      counter++;
    } else {
      break;
    }
  }
  console.log(counter); //4
};

solution(input1, input2);
