process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let value = [];

  for (let i = 0; i < a; i++) {
    value.push("*");
  }
  let answer1 = value.toString().replace(/,/gi, "");
  for (let i = 0; i < b; i++) {
    console.log(answer1);
  }
});
