var fs = require("fs");

// var input = fs.readFileSync("input.txt").toString().split("\n");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");

input.splice(0, 1);

const solution = (input) => {
  const array = [];
  for (let i = 0; i < input.length; i++) {
    let el = input[i].split(" ");
    if (el.length === 2) {
      //   console.log(el[1]);
      array.push(el[1]);
    } else {
      if (el[0] === "pop") {
        if (array.length === 0) {
          console.log(-1);
        } else {
          const ele = array.shift();
          console.log(ele);
        }
      } else if (el[0] === "size") {
        console.log(array.length);
      } else if (el[0] === "empty") {
        if (array.length === 0) {
          console.log(1);
        } else {
          console.log(0);
        }
      } else if (el[0] === "front") {
        if (array.length === 0) {
          console.log(-1);
        } else {
          console.log(array[0]);
        }
      } else if (el[0] === "back") {
        if (array.length === 0) {
          console.log(-1);
        } else {
          console.log(array[array.length - 1]);
        }
      }
    }
  }
};

solution(input);
