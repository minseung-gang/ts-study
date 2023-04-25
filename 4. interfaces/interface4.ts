interface person4 {
  name: string;
  age: number;
  hello(): void;
}

const p4: person4 = {
  name: "Mark",
  age: 11,
  hello: function (): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

const p41: person4 = {
  name: "Mark",
  age: 11,
  hello(): void {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

/* const p42: person4 = {
  name: "Mark",
  age: 11,
  hello: (): void => {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
}; */

p4.hello();
p41.hello();
