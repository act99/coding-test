function solution(participant, completion) {
  // 정규
  let a = participant.sort();
  let b = completion.sort();

  console.log(a);
  console.log(b);
  for (let i = 0; i < participant.length; i++) {
    if (a[i] != b[i]) {
      return a[i];
    }
  }

  // const damn = {}
  // participant.concat(completion).map(item =>
  // damn[item] = (damn[item] | 0) + 1)
  // console.log(damn)
  // for (let i = 0 ; i < participant.length; i++) {
  //     damn[participant[i]]%2 != 0
  //     return participant[i]
  // }
}
