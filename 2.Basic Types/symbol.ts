console.log(Symbol("foo") === Symbol("foo")); //false

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj["sym"]; //접근 불가능
obj[sym]; // 접근 가능

// 보통 접근을 막거나 접근을 필요한 경우에만 허락할 때 사용.
