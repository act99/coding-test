var fs = require("fs");

// var input = fs.readFileSync("input.txt").toString().split("\n");

var input = fs.readFileSync("/dev/stdin").toString().split("\n");

let resultInput = input.slice(1, input.length).map((item) => item * 1);

const solution = (input) => {
  const array = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0) {
      array.pop();
    } else {
      array.push(input[i]);
    }
  }
  if (array.length === 0) {
    console.log("0");
  } else {
    console.log(array.reduce((a, b) => a + b));
  }
};

solution(resultInput);
