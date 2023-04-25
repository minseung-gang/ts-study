interface person1 {
  name: string;
  age: number;
}

function hello(person: person1): void {
  console.log(`안녕하세요. ${person.name}입니다.`);
}

const p: person1 = {
  name: "Mark",
  age: 11,
};

hello(p);
