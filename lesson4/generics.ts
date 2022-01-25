const list: Array<string> = [];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    res('hi')
  }, 3000)
});

/*
promise.then(val => {
  val.toLowerCase();
})
*/

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const obj = merge({ name: 'Max' }, { age: 20 });

function getKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

class Logger<T> {
  private data: T;

  log() {
    console.log(this.data);
  }
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

const adam: Partial<Person> = {};
adam.name = 'adam';
adam.age = 20;
adam.hobbies = ['video games'];

const games: Readonly<string[]> = ['valorant', 'leage of legends'];

