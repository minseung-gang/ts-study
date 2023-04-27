"use strict";
// primitive type
let sub7 = "";
let sup7 = sub7;
// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8 = { a: "", b: 1 };
let sup8 = sub8;
// array - object 와 마찬가지
let sub9 = [{ a: "", b: 1 }];
let sup9 = sub8;
