function add(a: number, b: number): number
function add(a: string, b: string): number
function add(a: unknown, b: unknown): number {
  if (typeof a === 'number' && typeof b === 'number')
    return a + b;
  else if (typeof a === 'string' && typeof b === 'string')
    return +a + +b;
}

const n1 = add(1, 2);
const n2 = add('1', '2');
