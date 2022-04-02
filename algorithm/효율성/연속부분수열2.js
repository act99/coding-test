let input1 = 5;
let input2 = [1, 3, 1, 2, 3];

const solution = (input1, input2) => {
  let result = 0;
  let counter = 0;
  let standard = 0;
  // answer를 -1로 둔 이유 : 초기값 설정에서 첫번째 값을 이미 섭취하게 되기 때문
  let answer = -1;

  while (standard < input2.length) {
    if (result <= input1) {
      result = result + input2[counter];
      counter++;
      answer++;
    } else {
      standard++;
      counter = standard;
      result = input2[counter];
    }
  }
  console.log(answer);
};

solution(input1, input2);
