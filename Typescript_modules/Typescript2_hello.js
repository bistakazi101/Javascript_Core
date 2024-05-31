"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// moduleC.ts
const Typescript1_module_1 = require("./Typescript1_module");
console.log(Typescript1_module_1.variableA); // Accessing named variable export
(0, Typescript1_module_1.functionA)(); // Calling named function export
const instanceA = new Typescript1_module_1.ClassA(); // Creating an instance of the named class export
