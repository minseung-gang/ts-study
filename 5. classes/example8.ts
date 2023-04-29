abstract class AbstractPerson {
  // abstract 추상적으로 표현하며 클래스를 상속받아 완성한 후 사용하는 방식으로 사용
  protected _name: string = "Mark";
  abstract setName(name: string): void;
}

new AbstractPerson(); //error, Cannot create an instance of an abstract class.

class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p11 = new Person();
