//console.log(y);  // Temporal Dead Zone -> Reference Error
let y = "hello"; // blocked-scoped
const x = "hello"; // blocked-scoped but cannot be reassign
// console.log(z); // In typescript it gives error at reference error at runtime.
var z = "function scoped which hoist to the top";

y = "helloworld";

export {};
