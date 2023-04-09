let x: [string, number];
x = ["hello", 22];

x = [10, "dd"]; // error

x[2] = "world"; // error Type '"world"' is not assignable to type 'undefined'.

const person2: [string, number] = ["minseung", 11];

const [first, second] = person2; // 디스트럭처링
