interface Male {
  fullname: string;
  yearOfBirth: number;
  hobbies?: string[], // optional

  print(): void;
}

let john: Male;

john = {
  fullname: 'john smith',
  yearOfBirth: 1999,
  print() {
    console.log(`hi im ${this.fullname}`)
  }
}

class John implements Male {
  fullname: string;
  yearOfBirth: number;

  constructor(name: string, yearOfBirth: number) {
    this.fullname = name;
    this.yearOfBirth = yearOfBirth;
  }

  print(): void {
    console.log('Hi');
  }
}

// typing for a function
interface addFun {
  (a: number, b: number): number;
}
