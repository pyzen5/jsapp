import person from './person.js';   // default export - person, prs, etc.,
import { baseData } from './utility.js';    // named export - {a}, {a as b}, * as c

console.log(person.name);
console.log(baseData)