function solution(board, moves) {
  let answer = 0;
  let dummy = [];
  for (let i = 0; i < board[0].length; i++) {
    let result = [];
    for (let k = 0; k < board.length; k++) {
      result.push(board[k][i]);
    }
    dummy.push(result);
  }
  // 뒤집어서 실제 그림처럼 최대한으로 만듬 (moves까지 신경 씀)
  console.log(dummy);
  let count = 0;
  let resultArr = [];
  for (let i = 0; i < moves.length; i++) {
    for (let k = 0; k < dummy[0].length; k++) {
      if (dummy[moves[i] - 1][k] !== 0) {
        resultArr.push(dummy[moves[i] - 1][k]);
        dummy[moves[i] - 1][k] = 0;
        break;
      } else {
      }
    }
  }
  console.log(count);
  answer = count * 2;
  // 여기까지 완벽, 이젠 같은 수 제거해주고 더해주면 댐
  console.log(resultArr);
  let counter = resultArr.length;
  let array1 = [];
  for (let i = 0; i < counter; i++) {
    if (resultArr[i] === array1[array1.length - 1]) {
      array1.pop();
      answer = answer + 2;
    } else {
      array1.push(resultArr[i]);
    }
  }

  // let counter = 0
  // let gogo = 0
  // for (let i = 0; i < resultArr.length; i++) {
  //     if (resultArr[counter] === resultArr[counter + 1]) {
  //         resultArr.splice(counter, 2)
  //         console.log("hi")
  //         console.log(resultArr)
  //         gogo = gogo + 2
  //         counter = 0
  //     } else {
  //         counter++
  //     }
  // }
  // answer = gogo
  return answer;
}

//
// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1
//
