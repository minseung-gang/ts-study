declare const maybe: unknown;

const aNumber: number = maybe; // Type 'unknown' is not assignable to type 'number'.

if (maybe === true) {
  // if문에서 변수 maybe가 true와 같은 상황, ts가 maybe의 타입을 true로 바꿔주는 역할을 해줌.
  // 타입가드, const maybe: true
  const aBoolean: boolean = maybe;
  const aString: string = maybe; // error, maybe의 타입 = boolean
}

if (typeof maybe == "string") {
  const aString: string = maybe;
  //const aBoolean: boolean = maybe; error
}
