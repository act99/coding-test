var fs = require("fs");

var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((item) => item * 1);

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
  for (let i = input[0]; i <= input[1]; i++) {
    if (isPrime(i) === true) {
      console.log(i);
    }
  }
};

solution(input);
