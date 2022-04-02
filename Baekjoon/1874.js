var fs = require("fs");

var input = fs.readFileSync("input.txt").toString().split("\n");
// var input = fs.readFileSync("/dev/stdin").toString().split("");
input.shift();
const inputResult = [];
input.map((item) => inputResult.push(item * 1));

const solution = (input) => {
  const array = [];
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (array[array.length - 1] === input[i]) {
      array.push(counter);
      counter++;
      console.log("+");
    }
    console.log(input[i]);
  }
};

solution(inputResult);
