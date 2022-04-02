let input1 = 6;
let input2 = [1, 2, 1, 3, 1, 1, 1, 2];

const solution = (input1, input2) => {
  let counter = 0; // 반복문 돌리기 위한 카운터
  let result = 0; // 더한 값
  let answer = 0; // 정답
  let standard = 0; // 기준 (만약 result가 input1 값과 같거나 크면 증가 i++ 개념)
  while (counter < input2.length) {
    if (result < input1) {
      result = result + input2[counter];

      counter++;
    } else if (result === input1) {
      standard++;
      counter = standard;
      result = 0;
      answer++;
    } else {
      standard++;
      counter = standard;

      result = 0;
    }
  }
  console.log(answer); //3;
};

solution(input1, input2);
