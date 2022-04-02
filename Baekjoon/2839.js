var fs = require("fs");

// var input = fs.readFileSync("input.txt").toString().split(" ");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
// console.log(input);

const solution = (input) => {
  let x = 1;
  let y = 1;
  let count = 0;
  while (true) {
    if (input < 0) {
      console.log(-1);
      break;
    }
    if (input % 5 === 0) {
      console.log(input / 5 + count);
      break;
    }

    input = input - 3;
    count++;
  }
};

solution(input[0]);
