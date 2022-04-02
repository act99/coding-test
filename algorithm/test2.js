function getClosure() {
  let text = "variable 1";
  return function () {
    return text;
  };
}

let closure = getClosure();
console.log(closure());

// 'variable 1'

let base = "Hello, ";
function sayHelloTo(name) {
  let text = base + name;
  return function () {
    console.log(text);
  };
}

var hello1 = sayHelloTo("예진");
var hello2 = sayHelloTo("제열");
var hello3 = sayHelloTo("민재");
hello1(); // 'Hello, 예진'
hello2(); // 'Hello, 제열'
hello3(); // 'Hello, 민재'
