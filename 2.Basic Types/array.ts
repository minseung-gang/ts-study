let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
// 아랫 방식은 tsx에서 오류가 날 수 있는 확률이 있어서 number[]방식을 선호

let list: (number | string)[] = [1, 2, 3, "4"];
// 배열안에 어떤 것이 들어갈 지 모르는 상황에서 사용
// 반대로 배열안에 어떤 타입이 순서대로 들어갈지 아는 상황에서는 tuple사용
