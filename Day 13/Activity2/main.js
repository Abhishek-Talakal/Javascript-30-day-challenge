import {add, diff} from "./calculate..js";
import {default as mult} from "./multiply.js"
import * as calc from "./divrem.js"

console.log(add(2,4));
console.log(diff(12,4));

console.log(mult(2,4));
console.log(calc.div(2,4));
console.log(calc.rem(2,4));