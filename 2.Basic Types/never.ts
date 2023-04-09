function error(message: string): never {
  throw new Error(message);
}

function fail() {
  // function fail(): never
  return error("failed");
}

declare const a: string | number;

if (typeof a !== "string") {
  a; // type number
}
