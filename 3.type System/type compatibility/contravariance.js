"use strict";
class Person {
}
class Developer extends Person {
    coding() { }
}
class StartupDeveloper extends Developer {
    burning() { }
}
function tellme(f) { }
// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d) {
    return new Developer();
});
//error, Property 'burning' is missing in type 'Developer' but required in type 'StartupDeveloper'.
