class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calArea();
  }
  calArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log(square.height); // 10
console.log(square.calArea()); //100
let cal = square.calArea;
console.log(cal); //[Function: calArea]
let cal2 = square.calArea();
console.log(cal2); //100

function Rectangle2(height, width) {
  return function () {
    return height * width;
  };
}

let rec = new Rectangle2(10, 10);

function Hello(name) {
  this._name = name;
}
// say 함수를 만들어준다.
Hello.prototype.say = function () {
  console.log("Hello, " + this._name);
};

var hello1 = new Hello("민재");
var hello2 = new Hello("예진");
var hello3 = new Hello("제열");

hello1.say(); // 'Hello, 민재'
hello2.say(); // 'Hello, 예진'
hello3.say(); // 'Hello, 제열'
hello1._name = "anonymous";
hello1.say(); // 'Hello, anonymous'

let array = ["하이1", "하이2", "하이3", "하이4", "하이5"];

console.log(array.indexOf("하이3"));
