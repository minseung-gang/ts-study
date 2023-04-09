// Type Annotation - 앞으로 이런 type만 들어올 거야!

let a: string;

a = "Minseung";

// a = 39;  error

function hello(a: number, b: number) {
  return a + b;
}

hello(1, 1);
// hello("a")  error
