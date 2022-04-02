let input1 = [1, 3, 5];
let input2 = [2, 3, 6, 7, 9];

const solution = (input1, input2) => {
  let array = [...input1, ...input2];
  console.log(array.sort((a, b) => a - b));
};

solution(input1, input2);
