let word = "KKHSSSSSSSE";

const solution = (word) => {
  let str = "";
  let counter = 1;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        str = str + word[i] + (counter + "");
        counter = 1;
      } else {
        str = str + word[i];
        counter = 1;
      }
    }
  }
  console.log(str);
};

solution(word);
