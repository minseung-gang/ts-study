// create by object literal
const person = { name: "Minseung", age: 32 };

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
const person = Object.create({ name: "Minseung", age: 32 });

let obj: object = {};

obj = { name: "Mark" };

obj = [{ name: "Mark" }];

obj = 39; // Error

obj = "Mark"; // Error

obj = true; // Error

obj = 100n; // Error

obj = Symbol(); // Error

obj = null; // Error

obj = undefined; // Error

declare function create(o: object | null): void;

create({ prop: 0 });

create(null);

create(42); // Error

create("string"); // Error

create(false); // Error

create(undefined); // Error

// Object.create
Object.create(0); // Error
