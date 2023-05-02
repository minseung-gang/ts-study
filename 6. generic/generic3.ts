type helloFunctionGeneric1 = <T>(message: T) => T;

const helloFunction1: helloFunctionGeneric1 = <T>(message: T): T => {
  return message;
};

interface helloFunctionGeneric2 {
  <T>(message: T): T;
}

const helloFunction2: helloFunctionGeneric2 = <T>(message: T): T => {
  return message;
};
