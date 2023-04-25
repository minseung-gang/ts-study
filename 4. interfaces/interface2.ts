interface person2 {
  name: string;
  age?: number; //?의 의미 : 있을수도 있고 없을 수도 있음
}

function hello2(person: person2): void {
  console.log(`안녕하세요! ${person.name} 입니다`);
}

hello2({ name: "Mark", age: 11 });
hello2({ name: "Anna" });
