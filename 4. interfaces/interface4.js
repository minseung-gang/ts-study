"use strict";
const p4 = {
    name: "Mark",
    age: 11,
    hello: function () {
        console.log(`안녕하세요! ${this.name}입니다.`);
    },
};
const p41 = {
    name: "Mark",
    age: 11,
    hello() {
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
