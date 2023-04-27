"use strict";
let isDone = false;
isDone = true;
console.log(typeof isDone); // boolean;
let isOk = true;
// Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object.
// Prefer using 'boolean' when possible.
let isNotOk = new Boolean(true);
