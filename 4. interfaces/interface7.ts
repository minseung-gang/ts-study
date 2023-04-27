interface HelloPerson {
  (name: string, age?: number): void;
}

// function interface
const helloPerson: HelloPerson = (name: string) => {
  console.log(`안녕하세요! ${name}입니다.`);
};

helloPerson("Mark", 11);
