"use strict";
function hello3(person) {
    console.log(`안녕하세요! ${person.name}입니다.`);
}
const p1 = {
    name: "Mark",
    age: 11,
};
const p2 = {
    name: "Anna",
    systers: ["Sung", "Mary"],
};
const p3 = {
    name: "Bob",
    father: p1,
    mather: p2,
};
hello3(p3);
