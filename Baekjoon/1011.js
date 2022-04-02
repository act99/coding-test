var fs = require("fs");

var input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((item) => item.split(" "));
// var input = fs.readFileSync("/dev/stdin").toString().split("");

const solution = (input) => {
  if (input.length === 1) {
    return null;
  }
  // 도착하기 직전엔 이동거리 1광년
  let distance = input[1] - input[0];
  // 앞 뒤는 무조건 1
  // 1 11 111 121 1211 1221 12211 12221 12321 123211 123221 123321
  // 제곱근 + 제곱근-1 제곱근이 컷
  let sqrtInt = Math.sqrt(distance);
  let a;
  let b;
  if (sqrtInt % 1 === 0) {
    console.log(sqrtInt * 2 - 1);
  } else {
    a = Math.pow(Math.ceil(sqrtInt), 2);
    b = Math.pow(Math.ceil(sqrtInt) - 1, 2) + 1;
    if ((a + b) / 2 <= distance) {
      console.log(2 * Math.ceil(sqrtInt) - 1);
    } else {
    }
    console.log(2 * Math.ceil(sqrtInt) - 2);
  }

  //   console.log(2 * aboutSqrtInt - 1);
};

for (let i = 0; i < input.length; i++) {
  solution(input[i]);
}
