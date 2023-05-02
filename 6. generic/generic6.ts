interface IPerson {
  name: string;
  age: number;
}
const Person1: IPerson = {
  name: "Mark",
  age: 11,
};

// keyof > 키의 이름으로된 유니온 형태의 문자열로 만들어진다.

// IPerson[keyof IPerson]
// => IPerson["name"|"age"]
// => IPerson["name"] | IPerson["age"];
// => string | number

// name을 넣었을 때 string type, age를 넣었을때 number type을 도출해내기 위함.
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  // K extends T => name 혹은 age로 국한됨.
  return obj[key];
}

getProp(Person1, "age");

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(Person1, "name", "Anna");
