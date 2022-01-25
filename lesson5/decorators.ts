function Logger(/*the class constructor*/target: Function) {
  console.log('decorator run..');
  console.log(target);
}

function LoggerFactory() {
  return function(target: Function) {
    console.log('decorator run..');
    console.log(target);
  }
}

@LoggerFactory()
class Person {

  constructor(public name: string) { };
}
