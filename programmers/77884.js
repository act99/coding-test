function solution(left, right) {
  let answer = 0;
  let array = [];
  for (let i = 0; i <= right - left; i++) {
    array.push(left + i);
  }
  console.log(array);
  let measure = [];
  for (let i = 0; i < array.length; i++) {
    measure.push(0);
  }
  for (let i = 0; i < array.length; i++) {
    for (let k = 1; k <= array[i]; k++) {
      array[i] % k === 0 ? (measure[i] = measure[i] + 1) : null;
    }
  }
  console.log(measure);
  let trueFalse = [];
  for (let i = 0; i < measure.length; i++) {
    if (measure[i] % 2 === 0) {
      trueFalse.push(1);
    } else {
      trueFalse.push(-1);
    }
  }
  console.log(trueFalse);
  let done = [];
  for (let i = 0; i < trueFalse.length; i++) {
    done.push(array[i] * 1 * trueFalse[i]);
  }
  console.log(array);
  console.log(done);
  answer = done.reduce((a, b) => a + b);
  // if (measure[0] === 1) {
  //     console.log("hi")
  //     answer = array.reduce(function(acc, curr, index) {
  //         if (measure[index]%2 === 0) {
  //             acc = acc + curr
  //         } else {
  //             acc = acc-curr
  //         }
  //         return acc - 2
  //     })
  // } else {
  //     answer = array.reduce(function(acc,curr,index) {
  //         if ( measure[index] === 1) {
  //             acc = acc - 1
  //         } else if (measure[index]%2 === 0 && measure[index] !== 1) {
  //             acc = acc + curr
  //         }
  //         else {
  //             acc = acc - curr
  //         }
  //         return acc
  // })
  // }
  return answer;
}
