let person: [string, number] = ["Mark", 35];

type PersonTuple = [string, number];

let another: PersonTuple = ["Anna", 24];

/*

1. 튜플 타입에 별칭을 줘서 여러군데서 사용할 수 있게 한다.

*/

//이 외 - Aliasing Function
type EatType = (food: string) => void;
