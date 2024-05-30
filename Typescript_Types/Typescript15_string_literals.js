"use strict";
// string literal in typescript 
// String literal types in TypeScript allow you to specify exact string values that a variable or parameter can have. 
let status3;
status3 = "success"; // OK
status3 = "failure"; // OK
// status = "error"; // Error: Type '"error"' is not assignable to type '"success" | "failure"'.
