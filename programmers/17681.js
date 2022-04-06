function solution(n, arr1, arr2) {
  let answer = [];
  let num2 = 20;
  let num = 30;
  // let num
  let arr1To2 = [];
  let arr2To2 = [];
  console.log(typeof num2.toString(2));
  console.log(num.toString(2));
  console.log(num2.toString(2) * 1 + num.toString(2) * 1);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].toString(2).length < n) {
      arr1To2.push(
        "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2)
      );
    } else {
      arr1To2.push(arr1[i].toString(2));
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].toString(2).length < n) {
      arr2To2.push(
        "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2)
      );
    } else {
      arr2To2.push(arr2[i].toString(2));
    }
  }
  console.log(arr1To2);
  console.log(arr2To2);
  let sumArray = [];
  for (let i = 0; i < arr1To2.length; i++) {
    let result = "";
    for (let k = 0; k < arr1To2[0].length; k++) {
      result = result + (arr1To2[i][k] * 1 + arr2To2[i][k] * 1 + "");
    }
    sumArray.push(result);
  }
  console.log(sumArray);
  // 얘는 다 끝났음
  let resultValue = [];
  for (let i = 0; i < sumArray.length; i++) {
    //어차피 다 같은 갯수니 첫번째꺼의 갯수를 기준으로 잡음
    let result = "";
    for (let k = 0; k < sumArray[0].length; k++) {
      sumArray[i][k] * 1 > 0
        ? (result = result + "#")
        : (result = result + " ");
    }
    resultValue.push(result);
  }
  console.log(resultValue);
  answer = resultValue;
  return answer;
}
