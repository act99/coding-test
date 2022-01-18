function solution(sizes) {
  let answer = 0;
  let high = [];
  let low = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      high.push(sizes[i][0]);
      low.push(sizes[i][1]);
    } else {
      high.push(sizes[i][1]);
      low.push(sizes[i][0]);
    }
  }
  console.log(high, low);
  high.sort((a, b) => b - a);
  low.sort((a, b) => b - a);
  answer = high[0] * low[0];
  return answer;
}
