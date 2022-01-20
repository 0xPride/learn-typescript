"use strict";
class Person {
    // public - private - protected 
    /*
    constructor(name: string) {
      this.name = name;
    }*/
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    print() {
        for (let p in arguments) {
            console.log(p);
        }
        console.log(`Hi my name ${this.name} and im ${this.age} years old`);
    }
    get getName() {
        return this.name;
    }
    set setName(age) {
        this.age = age;
    }
}
class Man extends Person {
    constructor(name, age) {
        super(name, age);
        this.gender = 'male';
    }
}
const adam = new Man('adam', 20);
adam.print();
console.log(adam.getName);
// behave like namespace
class Calc {
    static Add(a, b) {
        return a + b;
    }
}
// static var cannot be access from non static methods
Calc.PI = Math.PI;
