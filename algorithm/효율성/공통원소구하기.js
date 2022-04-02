let input1 = [1, 3, 9, 5, 2];
let input2 = [3, 2, 5, 7, 8];

const solution = (input1, input2) => {
  let array = [];
  for (let i = 0; i < input1.length; i++) {
    for (let k = 0; k < input2.length; k++) {
      if (input1[i] === input2[k]) {
        array.push(input1[i]);
        break;
      }
    }
  }
  console.log(array.sort((a, b) => a - b)); //2,3,5
};

solution(input1, input2);
