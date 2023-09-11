// import { Person, generateRandom } from "./modules";
// import { PI as myPi } from "./modules";

// con el asterico es para importar todo
import * as myCode from "./modules"

const user: myCode.Person = {
    id: 1,
    name: "domi"
}

console.log(myCode.PI);
console.log(user);
console.log(myCode.generateRandom());


