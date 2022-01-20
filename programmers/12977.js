function solution(nums) {
  let answer = -1;
  console.log(isPrime(15));
  let dummy = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        dummy.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  console.log(dummy);
  let count = 0;
  for (let i = 0; i < dummy.length; i++) {
    if (isPrime(dummy[i]) == true) {
      count = count + 1;
    } else {
      null;
    }
  }
  answer = count;
  return answer;
}

const isPrime = (num) => {
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
