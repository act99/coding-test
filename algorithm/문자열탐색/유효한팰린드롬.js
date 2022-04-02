let word = "found7, time: study; Yduts; emit, 7Dnuof";

const solution = (word) => {
  let result = word.split("");
  let array = [];
  result.map((item, index) => {
    if (item.charCodeAt() >= 65 && item.charCodeAt() <= 90) {
      array.push(item);
    } else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
      array.push(item.toUpperCase());
    }
  });
  if (array.join("") === array.reverse().join("")) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

solution(word);

// console.log("A".charCodeAt());
// console.log("Z".charCodeAt());

// console.log("a".charCodeAt());
// console.log("z".charCodeAt());
