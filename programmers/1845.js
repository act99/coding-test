function solution(nums) {
  var answer = 0;
  // 먼저 array를 하나 열고 푸쉬시켜주면서 includes() 되면 푸쉬하지말고 includes 아니면 푸쉬해라
  // 만약 array가 nums/2.length 보다 클 수 있기 때문에 만약 크다면 고정값 nums/2.length로 두어라
  // 작다면 땡큐고
  let set = new Set(nums);
  let settingArray = [...set];
  console.log(settingArray);
  settingArray.length > nums.length / 2
    ? (answer = nums.length / 2)
    : (answer = settingArray.length);
  return answer;
}
