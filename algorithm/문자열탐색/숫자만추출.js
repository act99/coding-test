let word = "g0en2T0s8eSoft";

const solution = (word) => {
  let numberWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt() >= 48 && word[i].charCodeAt() <= 57) {
      numberWord = numberWord + word[i];
    }
  }
  console.log(numberWord * 1);
};

solution(word);
