function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(["hello", "world"]);
helloArray(["hello", 4]); // helloArray<string | number>(message: (string | number)[]): string | number

function hellowTuple<T, K>(message: [T, K]): T {
  return message[0];
}
hellowTuple(["hello", "world"]); // hellowTuple<string, string>(message: [string, string]): string
hellowTuple(["hello", 4]); // hellowTuple<string, number>(message: [string, number]): string
