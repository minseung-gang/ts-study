// TypeScript - 개발환경에서 처리
function add(n1: number, n2: number) {
  return n1 + n2;
}

const result = add(39, 28);

// JavaScript 런타임 환경에서 처리
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}
const result = add(39, 28);

/* 
ECMAScript 표준에 따른 기본 자료형은 6가지
Boolean, Number, String, Null,Undefined, Symbol (ECMAScript 6에 추가), Array : object 형

Typescript에서는 프로그래밍을 도울 몇가지 타입이 더 제공된다.

Any, Void, Never, Unknown

Enum

Tuple : object형

*/
