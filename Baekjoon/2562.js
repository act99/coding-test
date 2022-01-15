const input = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// 내 풀이 방식
let max = input.sort((a, b) => a - b)[input.length - 1];
// input.map(item => item)
let num = input.findIndex((element) => element > max - 1);
console.log(max, num);

// 남의 풀이 방식
let nMax = Math.max(...input);

console.log(nMax, input.indexOf(nMax));
