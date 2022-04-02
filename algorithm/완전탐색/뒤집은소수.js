let input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const solution = (input) => {
  let answer = [];
  input.map((item) =>
    isPrime((item + "").split("").reverse().join("") * 1)
      ? answer.push((item + "").split("").reverse().join("") * 1)
      : null
  );

  console.log(answer);
};

solution(input);
