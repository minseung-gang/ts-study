interface Person5 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p5: Person5 = {
  name: "Mark",
  gender: "male",
};

p5.gender = "female"; // error. cannot assign to 'gender' because it is a read-only property.
