interface Car {
  kind: 'car';
  speed: number;
  run(): void;
}

interface Truck {
  kind: 'truck';
  weight: number;
  run(): void;
}

type Vehical = Car | Truck;

function processVehical(v: Vehical) {
  if (v.kind == 'car') {
    // v.speed
  } else {
    // v.weight
  }
}
