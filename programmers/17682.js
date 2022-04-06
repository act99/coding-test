function solution(dartResult) {
  let answer = 0;
  let array = dartResult.split("");
  let dummy = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i] * 1) === true) {
      if (array[i] === "0" && dummy[dummy.length - 1] === 1) {
        dummy[dummy.length - 1] = 10;
      } else {
        dummy.push(array[i] * 1);
      }
    }
    // 문자일 때
    else {
      if (array[i] === "S") {
        dummy[dummy.length - 1] = dummy[dummy.length - 1] * 1;
        // 더블일 땐 제곱
      } else if (array[i] === "D") {
        dummy[dummy.length - 1] = Math.pow(dummy[dummy.length - 1] * 1, 2);
        // 트리플일 땐 세제곱
      } else if (array[i] === "T") {
        dummy[dummy.length - 1] = Math.pow(dummy[dummy.length - 1] * 1, 3);
        // *일땐 2배 (중첩 가능)
      } else if (array[i] === "*") {
        if (dummy.length > 1) {
          dummy[dummy.length - 1] = dummy[dummy.length - 1] * 2;
          dummy[dummy.length - 2] = dummy[dummy.length - 2] * 2;
        } else {
          dummy[dummy.length - 1] = dummy[dummy.length - 1] * 2;
        }
        // #일 땐 *-1
      } else if (array[i] === "#") {
        dummy[dummy.length - 1] = dummy[dummy.length - 1] * -1;
      }
    }
  }
  console.log(dummy);
  answer = dummy.reduce((a, b) => a + b);
  // let result = []
  // let count = 0
  //     for (let i = 0; i < dartResult.length; i++) {
  //         // 문자일 때
  //         if(Number.isInteger(dartResult[i] * 1) === false){
  //             // 싱글일 땐 1배
  //             if (dartResult[i] === "S") {
  //                 result[count] = result[count] * 1
  //                 // 더블일 땐 제곱
  //             } else if (dartResult[i] === "D") {
  //                 result[count] = Math.pow(result[count], 2)
  //                 // 트리플일 땐 세제곱
  //             } else if (dartResult[i] === "T") {
  //                 result[count] = Math.pow(result[count], 3)
  //                 // *일땐 2배 (중첩 가능)
  //             } else if (dartResult[i] === "*") {
  //                 result[count] = result[count] * 2
  //                 result [count-1] = result[count-1] * 2
  //                 // #일 땐 *-1
  //             } else if (dartResult[i] === "#") {
  //                 result[count] = result[count] * -1
  //             }
  //         }
  //         // 숫자일 때
  //         else {
  //             if (Number.isInteger(dartResult[i+1] * 1) === true) {
  //                 if (Number.isInteger(result[result.length-1]) === true) {
  //                 } else {
  //                 result.push(dartResult[i]+dartResult[i+1])
  //                 }
  //                 count++
  //                 } else {
  //                     if (Number.isInteger(result[result.length-1]) === true) {
  //                 } else {
  //                     result.push(dartResult[i])
  //                     }
  //                      count++
  //                 }

  //         }
  //     }
  // console.log(result)
  // let answerArr = result.splice(0,3)
  // console.log(answerArr)
  // console.log(Number.isInteger("#"*1))
  // answer = answerArr.reduce((a,b) => a+b)

  // let a = "s" * 1
  // console.log(a)
  return answer;
}
