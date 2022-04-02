const solution = (word) => {
  let result = word.toLowerCase().split("").reverse().join("");
  if (word.toLowerCase() === result) {
    console.log("YES!");
  } else {
    console.log("NO!");
  }
};

solution("gooG");
