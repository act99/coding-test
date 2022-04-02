var fs = require("fs");

// var input = fs.readFileSync("input.txt").toString().split("\n");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
// console.log(input);

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (input) => {
  if (input === 0) {
    return null;
  }
  let count = 0;
  for (let i = input + 1; i <= input * 2; i++) {
    isPrime(i) === true ? count++ : null;
  }
  console.log(count);
};

for (let i = 0; i < input.length; i++) {
  solution(input[i] * 1);
}

// solution(input);
