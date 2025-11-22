// 1.通常の関数
function greet(name) {
  return "Hello, " + name + "!";
}

// 関数を呼び出す
let message = greet("Shunta");
console.log(message);


// 2.アロー関数
const add = (a, b) => {
  return a + b;
};

// 関数を呼び出す
let result = add(10, 5);
console.log("足し算の結果:", result);
