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
