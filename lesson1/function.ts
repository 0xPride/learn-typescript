// Functions

function Add(a: number, b: number): number {
  return a + b;
}

// function pointer
let funPointer: Function;

funPointer = Add;

let funPointerWithParam: (a: number, b: number) => number;

// callbacks
function loop(list: number[], cb: (a: number) => void) {
  for (let i = 0; i < list.length; i++)
    cb(list[i]);
}
