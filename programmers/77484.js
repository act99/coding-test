function solution(lottos, win_nums) {
  let rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = 0;
  lottos.map((item) => (item === 0 ? (zeroCount = zeroCount + 1) : null));
  console.log("0 갯수");
  console.log(zeroCount);
  let answer = [];
  // 0, 1개 => 6등 그 이외 12345 토탈 순위는 7개라고 보면 됨
  let minCount = 0;
  for (let i = 0; i < win_nums.length; i++) {
    if (lottos.includes(win_nums[i])) {
      minCount = minCount + 1;
    } else {
    }
  }
  console.log("최소맞춘 갯수");
  console.log(minCount);
  let minRank = rank[minCount];
  console.log("최소 순위");
  console.log(minRank);
  let maxRank = 0;
  if (minRank === 1) {
    maxRank = 1;
  } else {
    if (minCount === 0) {
      maxRank = rank[zeroCount];
    } else {
      maxRank = rank[minCount + zeroCount];
    }
  }
  console.log("최대 순위");
  console.log(maxRank);
  answer = [maxRank, minRank];
  return answer;
}
