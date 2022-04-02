let word = "teachermode";
let target = "e";

const solution = (word, target) => {
  let answer = [];
  let p = 1000;
  for (let x of word) {
    if (x === target) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === target) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  console.log(answer);
};

solution(word, target);
