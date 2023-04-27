class Person {
  name: string;
  age: number;
  adress!: number; // class 내부에서 adress의 값을 할당해주지 않고 외부에서 할당시켜주겠다는 표시.

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Person2 {
  constructor(public name: string, public age: number) {} // this.으로 할당됨
}

const p1 = new Person("Mark", 11);
const p2 = new Person2("Mark", 11);
console.log(p1); // Person { name: 'Mark', age: 11 }
console.log(p2); // Person2 { name: 'Mark', age: 11 }
