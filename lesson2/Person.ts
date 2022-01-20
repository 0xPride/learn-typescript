class Person {
  // public - private - protected 

  /*
  constructor(name: string) {
    this.name = name;
  }*/

  constructor(private readonly name: string, private age: number) { };

  print(this: Person): void {
    console.log(`Hi my name ${this.name} and im ${this.age} years old`);
  }

  get getName() {
    return this.name;
  }

  set setName(age: number) {
    this.age = age;
  }
}

class Man extends Person {
  gender: string;
  constructor(name: string, age: number) {
    super(name, age);
    this.gender = 'male'
  }
}

const adam = new Man('adam', 20);

adam.print();
console.log(adam.getName);

// behave like namespace
class Calc {
  // static var cannot be access from non static methods
  static PI = Math.PI;

  static Add(a: number, b: number) {
    return a + b;
  }
}

// abstract classes like the ones in cpp
abstract class Car {
  abstract speed: number;
  constructor(protected brand: string) { };

  abstract run(): void;
}
