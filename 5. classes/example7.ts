class Parent {
  constructor(protected name: string, private _age: number) {}

  public print(): void {
    console.log(`이름은 ${this.name}이고, 나이는 ${this._age}입니다`);
  }
}

const p10 = new Parent("Mark", 11);

p10.print(); // protected > 자식 클래스 내부 O , priveate > 클래스 인스턴스 X
//이름은 Mark이고, 나이는 11입니다

class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    super("Mark Jr", age); // parent의 생성자를 호출한다의 의미
  }
}

const c = new Child(5);
c.print(); // 이름은 Mark Jr이고, 나이는 5입니다
