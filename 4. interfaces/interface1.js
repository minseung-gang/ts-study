"use strict";
function hello(person) {
    console.log(`안녕하세요. ${person.name}입니다.`);
}
const p = {
    name: "Mark",
    age: 11,
};
hello(p);
