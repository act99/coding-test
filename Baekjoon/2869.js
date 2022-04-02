var fs = require("fs");

// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var input = fs.readFileSync("input.txt").toString().split(" ");

let resultInput = [];
for (let i = 0; i < input.length; i++) {
  resultInput.push(input[i] * 1);
}

// console.log(input);
const solution = (input) => {
  let count = 0;
  while (true) {
    if (input[2] - input[0] < 0) {
      break;
    }
    input[2] -= input[0];
    input[2] += input[1];
    count++;
  }
  console.log(count);
};

solution(resultInput);
