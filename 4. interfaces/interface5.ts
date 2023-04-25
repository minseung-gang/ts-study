interface IPerson {
  name: string;
  age?: number;
  hello(): void;
}

// interface의 내용을 implements 키워드를 통해 person의 클래스를 만듦.
class Person implements IPerson {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

const person: IPerson = new Person("Mark");
person.hello();
