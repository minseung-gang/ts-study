interface person3 {
  name: string;
  age?: number;
  [index: string]: any;
  // person3[index]은 any타입. 어떤 프로퍼티가와도 괜찮다. indexable type(색인 가능 타입).
}

function hello3(person: person3): void {
  console.log(`안녕하세요! ${person.name}입니다.`);
}

const p1: person3 = {
  name: "Mark",
  age: 11,
};
const p2: person3 = {
  name: "Anna",
  systers: ["Sung", "Mary"],
};

const p3: person3 = {
  name: "Bob",
  father: p1,
  mather: p2,
};

hello3(p3);
