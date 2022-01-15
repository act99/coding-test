const input = [5, [20, 10, 35, 30, 7]];

console.log(
  input[1].sort((a, b) => a - b)[0],
  input[1].sort((a, b) => a - b)[input[0] - 1]
);
