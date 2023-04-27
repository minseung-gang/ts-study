class Person4 {
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  constructor(private _name: string, public age: number) {
    this.country = "Korea";
  }

  hello() {
    this.country = "Japan"; // error, cannot assign to 'country' because it is a read-only property.
  }
}

const p2 = new Person4("Mark", 11);
console.log(p2);
