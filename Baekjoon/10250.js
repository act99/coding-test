let input = [
  [6, 12, 10], // 402
  [30, 50, 72], // 1203
];

const solution = (input) => {
  let xcount = 0;
  let ycount = input[2] % input[0];
  while (input[2] > 0) {
    input[2] = input[2] - input[1];
    xcount++;
  }
  xcount = xcount + 1;
  if (xcount < 10) {
    xcount = "0" + `${xcount}`;
  }
  ycount = ycount + "";
  console.log(ycount + xcount);
};

for (let i = 0; i < input.length; i++) {
  solution(input[i]);
}
