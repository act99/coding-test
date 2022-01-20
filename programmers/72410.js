function solution(new_id) {
  let answer = "";
  // 모든 대문자 소문자로 치환
  let lowerId = new_id.toLowerCase();
  console.log(lowerId);
  // 특수문자 조금 제거
  const regExp = /[!?@#$%^&*():;+=~{}<>\[\]\|\\\"\'\,\/\`\₩]/g;
  let specialRemove = lowerId.replace(regExp, "");
  console.log(specialRemove);
  // .. 중복 제거
  let jungbok = specialRemove.split("");
  let gogo = [];
  for (let i = 0; i < jungbok.length; i++) {
    // ..이 중복되면
    if (jungbok[i] === jungbok[i + 1] && jungbok[i] === ".") {
    } else {
      gogo.push(jungbok[i]);
    }
  }
  // 콤마 제거하고 다시 조인
  let goToString = gogo.join("");
  console.log(goToString);
  let firstDotRemove = "";
  // 첫번째 dot 제거 시작
  for (let i = 0; i < goToString.length; i++) {
    goToString[0] == "."
      ? (goToString = goToString.slice(1))
      : (firstDotRemove = goToString);
    goToString = goToString;
  }
  console.log(firstDotRemove);
  if (firstDotRemove.length == 0) {
    firstDotRemove = "a";
  }
  console.log(firstDotRemove);
  // 15자 이내 제거
  let fifteen = firstDotRemove.slice(0, 15);
  console.log(fifteen);
  // 마지막 dot 제거 시작
  let removeDone2 = removeDone(fifteen);
  console.log(removeDone2);
  if (removeDone2.length == 1) {
    removeDone2 = removeDone2 + removeDone2 + removeDone2;
  } else if (removeDone2.length == 2) {
    removeDone2 = removeDone2.concat(removeDone2[1]);
  } else {
  }
  console.log(removeDone2);
  answer = removeDone2;
  return answer;
}

const removeDone = (item) => {
  for (let i = item.length - 1; i >= 0; i--) {
    if (item[i] == ".") {
      item = item.slice(0, item.length - 1);
    } else {
      return item;
    }
  }
};
