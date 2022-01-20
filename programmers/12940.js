function solution(n, m) {
  var answer = [];
  let nYak = [];
  let mYak = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? nYak.push(i) : null;
  }
  for (let i = 1; i <= m; i++) {
    m % i === 0 ? mYak.push(i) : null;
  }
  console.log(n, m);
  let maxYak = mYak.filter((item) => nYak.includes(item)).reverse()[0];
  let minGong = (n * m) / maxYak;
  console.log(nYak);
  console.log(mYak);
  console.log(maxYak);
  answer = [maxYak, minGong];
  return answer;
}

// 유클리드 호제법
// n % m = x => m%x
