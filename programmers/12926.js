function solution(s, n) {
  var answer = "";
  let ascii1 = "a".charCodeAt();
  let ascii2 = "z".charCodeAt();
  let Ascii1 = "A".charCodeAt();
  let Ascii2 = "Z".charCodeAt();
  let asciiSpace = " ".charCodeAt();
  console.log(ascii1, ascii2, Ascii1, Ascii2, asciiSpace);
  let array = s.split("");
  let result = [];
  console.log(array);
  array.map(function (item) {
    // 스페이스라면
    if (item.charCodeAt() == asciiSpace) {
      result.push(" ");
    } else {
      // 소문자라면
      if (item.charCodeAt() >= ascii1 && item.charCodeAt() <= ascii2) {
        // z를 안넘어간다면
        if (item.charCodeAt() + n <= ascii2) {
          // console.log("z 안넘어간다.")
          result.push(String.fromCharCode(item.charCodeAt() + n));
          // 넘어간다면
        } else {
          result.push(
            String.fromCharCode(ascii1 + (item.charCodeAt() + n - ascii2 - 1))
          );
          // console.log("z 넘어간다.")
        }
      }
      // 대문자라면
      else {
        if (item.charCodeAt() + n <= Ascii2) {
          // Z 안넘어간다면
          result.push(String.fromCharCode(item.charCodeAt() + n));
          // console.log("Z 안넘어간다.")
        } else {
          result.push(
            String.fromCharCode(Ascii1 + (item.charCodeAt() + n - Ascii2 - 1))
          );
          // Z 넘어간다면
          console.log("Z 넘어간다.");
        }
      }
    }
  });
  console.log(result);
  answer = result.reduce((a, b) => a + b);

  return answer;
}
