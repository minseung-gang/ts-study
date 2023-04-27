// Singleton - 어플리케이션이 실행되는 중간에 클래스로부터 단 하나의 오브젝트만을 생성하여 사용하는 것
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName | null {
    // ClassName으로부터 만든 오브젝트가 있으면 그것을 리턴, 없으면 만들어서 리턴
    if (ClassName.getInstance === null) {
      ClassName.instance = new ClassName();
    }
    return ClassName.instance;
  }
  private constructor() {}
}

const p8 = new ClassName(); // error, Constructor of class 'ClassName' is private and only accessible within the class declaration.
const a = ClassName.getInstance();
const b = ClassName.getInstance();

console.log(a === b); // true
