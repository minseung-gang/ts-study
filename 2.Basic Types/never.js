"use strict";
function error(message) {
    throw new Error(message);
}
function fail() {
    // function fail(): never
    return error("failed");
}
if (typeof a !== "string") {
    a; // type number
}
