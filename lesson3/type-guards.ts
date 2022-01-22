type NumberOrString = string | number;

function cal(a: NumberOrString): void {
  // type guard
  if (typeof a === 'string') {
    // code
  } else {
    // code
  }
}

type Admin = {
  name: string;
  privileges: string[]
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const employee: ElevatedEmployee = {
  name: 'adam',
  privileges: ["read"],
  startDate: new Date()
}

function getEmployeeData(employee: ElevatedEmployee): void {
  if ('startDate' in employee) {
    // employee.startDate
  }
}

class Vehical {
  constructor(public name: string) { };
  run() {
    return 5;
  }
}

class Car extends Vehical {
  speed = 10;
  constructor(name: string) {
    super(name);
  }
}

class Truck extends Vehical {
  constructor(name: string) {
    super(name);
  }
}

const v1: Vehical = new Car('tesla');
const v2: Vehical = new Truck('GMC');

function processVehical(v: Vehical) {
  if (v instanceof Car) {
    // v.speed 
  }
}
