var fs = require("fs");

// var input = fs.readFileSync("input.txt").toString().split(" ")[0];
var input = fs.readFileSync("/dev/stdin").toString().split(" ")[0];

const solution = (input) => {
  if (input === 0) {
    console.log("1");
  }
  if (input.split("").length === 1) {
    input = "0" + input;
  }
  let newNum = "";
  let counter = 0;
  let dummyInput = input;
  while (newNum !== input) {
    let array = dummyInput.split("");
    let sum = array.reduce((acc, curr) => acc * 1 + curr * 1);
    let sumSplit = (sum + "").split("");
    newNum = array[1] + sumSplit[sumSplit.length - 1];
    dummyInput = newNum;
    counter++;
  }
  console.log(counter);
};

solution(input);
