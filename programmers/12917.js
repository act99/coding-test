function solution(s) {
  let answer = "";
  let acciiA = "a".charCodeAt();
  let changeString = String.fromCharCode(acciiA);
  // for (let i = 0)
  console.log(acciiA);
  console.log(changeString);
  let numResult = [];
  for (let i = 0; i < s.length; i++) {
    numResult.push(changeNum(s[i]));
  }
  numResult.sort((a, b) => b - a);
  console.log(numResult);
  let stringResult = [];
  for (let i = 0; i < numResult.length; i++) {
    stringResult.push(String.fromCharCode(numResult[i]));
  }
  console.log(stringResult);
  answer = stringResult.join("");
  // console.log(stringResult)
  return answer;
}

const changeNum = (str) => {
  return str.charCodeAt();
};
