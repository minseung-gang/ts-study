function hellowBasic<T, U>(message: T, comment: U): T {
  return message;
}

hellowBasic<string, number>("Mark", 11); // T,U를 정한 후 값을 반환, hellowBasic<string, number>(message: string, comment: number): string
hellowBasic(36, 39); // T가 값으로 인하여 추론됨, hellowBasic<36, number>(message: 36, comment: number): 36
