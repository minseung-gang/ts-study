class Person3 {
  constructor(private _name: string, public age: number) {}

  get name() {
    return this._name;
  }
  set name(n: string) {
    this._name = n;
  }
}

const p = new Person3("Mark", 11);

console.log(p.name); // get, Mark
p.name = "Anna"; // set
console.log(p.name); // Anna
