function solution(arr) {
  let answer = [];
  let staticArr = [];
  // 최소값 찾기
  for (let i = 0; i < arr.length; i++) {
    staticArr.push(arr[i]);
  }
  let minNum = arr.sort((a, b) => a - b)[0];
  console.log(minNum);
  console.log(staticArr);
  let result = [];
  for (let i = 0; i < staticArr.length; i++) {
    staticArr[i] === minNum ? staticArr.splice(i, 1) : null;
  }
  console.log(staticArr);
  staticArr.length === 0 ? (staticArr = [-1]) : null;
  answer = staticArr;
  // let sortArr = arr.sort((a,b) => b-a)
  // console.log(staticArr)
  // let minNum = 0
  // let resultarr = arr
  // let sortArr = arr.sort((a,b) => b-a)
  // console.log(sortArr)
  // minNum = sortArr[sortArr.length - 1]
  // console.log(minNum)
  // // 최소값 뽑아내기
  // console.log(arr)
  // console.log(resultarr)
  // resultarr.splice(arr.indexOf(minNum),1)
  // console.log(resultarr)
  // if (resultarr.length === 0) {
  //     answer = [-1]
  // } else {
  //     answer = resultarr
  // }
  return answer;
}
