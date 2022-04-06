function solution(numbers, hand) {
  var answer = "";
  let result = "";
  // 가로, 세로
  let space = [
    [3, 1, "LR"],

    [0, 0, "L"],
    [0, 1, "LR"],
    [0, 2, "R"],

    [1, 0, "L"],
    [1, 1, "LR"],
    [1, 2, "R"],

    [2, 0, "L"],
    [2, 1, "LR"],
    [2, 2, "R"],

    [3, 0, "L"],
    [3, 2, "R"],
  ];
  console.log(space);
  let curLBtn = space[10];
  let curRBtn = space[11];
  for (let i = 0; i < numbers.length; i++) {
    // 왼쪽에 있는 놈이면
    if (space[numbers[i]][2] === "L") {
      curLBtn = space[numbers[i]];
      result = result.concat("L");
      // 오른쪽에 있는 놈이면
    } else if (space[numbers[i]][2] === "R") {
      curRBtn = space[numbers[i]];
      result = result.concat("R");
      // 가운데 있는 놈이면
    } else {
      // 만약 왼쪽이 오른쪽보다 더 가깝게 있으면
      if (
        Math.abs(space[numbers[i]][0] - curLBtn[0]) +
          Math.abs(space[numbers[i]][1] - curLBtn[1]) <
        Math.abs(space[numbers[i]][0] - curRBtn[0]) +
          Math.abs(space[numbers[i]][1] - curRBtn[1])
      ) {
        // 왼쪽 손가락은 누른 곳에 위치시키고 L 입력
        curLBtn = space[numbers[i]];
        result = result.concat("L");
        // 만약 오른쪽이 왼쪽보다 더 가깝게 있으면
      } else if (
        Math.abs(space[numbers[i]][0] - curLBtn[0]) +
          Math.abs(space[numbers[i]][1] - curLBtn[1]) >
        Math.abs(space[numbers[i]][0] - curRBtn[0]) +
          Math.abs(space[numbers[i]][1] - curRBtn[1])
      ) {
        // 오른쪽 손가락은 누른 곳에 위치시키고 L 입력
        curRBtn = space[numbers[i]];
        result = result.concat("R");
        // 만약 둘다 같다면 오른손잡이냐 왼손잡이냐에 따라서 고고!
      } else {
        if (hand === "right") {
          curRBtn = space[numbers[i]];
          result = result.concat("R");
        } else {
          curLBtn = space[numbers[i]];
          result = result.concat("L");
        }
      }
    }
  }
  answer = result;

  return answer;
}
