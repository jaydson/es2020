const instances = [];
let id = 1;
export default class mySuperLib {
  constructor() {
    console.log(`Wow from my super lib >>>>>>> (Instance ${id})`);
    instances.push({id, instance: this});
    id++;
  }
  coolMethod() {
    console.log(`Hello from coolMethod`);
  }
}

const mySuperLibInstance1 = new mySuperLib();
const mySuperLibInstance2 = new mySuperLib();
globalThis.mySuperLib1 = mySuperLibInstance1;
globalThis.mySuperLib2 = mySuperLibInstance2;