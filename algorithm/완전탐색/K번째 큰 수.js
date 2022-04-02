let input1 = 3;
let input2 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

const solution = (input1, input2) => {
  let array = [];
  for (let i = 0; i < input2.length; i++) {
    for (let k = i + 1; k < input2.length; k++) {
      for (let j = k + 1; j < input2.length; j++) {
        array.push(input2[i] + input2[k] + input2[j]);
      }
    }
  }
  let set = new Set(array);
  console.log([...set].sort((a, b) => b - a)[input1 - 1]); // 143;
};

solution(input1, input2);
