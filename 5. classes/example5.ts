class Person5 {
  private static CITY = "Daegu"; // 공통적으로 사용하고 싶은 데이터가 있다면 static 키워드 사용
  public static hello() {
    console.log("안녕하세요.", Person5.CITY);
  }
}

const p5 = new Person5();
/* p5.hello(); // error */
Person5.hello(); // 안녕하세요.

class Person6 {
  private static CITY = "Daegu";
  public hello() {
    console.log("안녕하세요.", Person6.CITY);
  }
  public change() {
    Person6.CITY = "Seoul";
  }
}

const p6 = new Person6();
p6.hello(); // 안녕하세요. Daegu
const p7 = new Person6();
p7.hello(); // 안녕하세요. Daegu
p6.change();
p7.hello(); // 안녕하세요. Seoul
