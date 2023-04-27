"use strict";
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny("아무거나");
let looselyType = {};
let d = looselyType.a.b.c.d;
// any가 객체로 인해 전파. 코드가 안정성을 잃는 결과를 가져올 수 있으니 유의
function leakingAny(obj) {
    const a = obj.num; //a: number
    const b = a + 1; // b: number
    return b;
}
const c = leakingAny({ num: 0 }); // c: number
c.indexOf("0"); // error
