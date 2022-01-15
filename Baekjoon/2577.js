for (let i = 0; i < 500; i++) {
  if (num == 1) {
    break;
  } else if (num % 2 == 0) {
    num / 2;
    answer = answer + 1;
  } else {
    num * 3 + 1;
    answer = answer + 1;
  }
}
