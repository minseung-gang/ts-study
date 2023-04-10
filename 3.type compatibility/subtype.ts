// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.

// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2: number[] = [1];
let sup2: object = sub2;
sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more.

// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3: [number, number] = [1, 2];
let sup3: number[] = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4: number = 1;
let sup4: any = sub4;
sub4 = sup4;

// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5: never = 0 as never;
let sup5: number = sub5;
sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.

class Animal {}
class Dog extends Animal {
  eat() {}
}

// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: Dog = new Dog();
let sup6: Animal = sub6;
sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
