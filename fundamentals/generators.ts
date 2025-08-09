function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorObject = generatorFunction();

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

// for (let value of generatorObject) { // iterables
//   console.log(value);
// }

// console.log([0, ...generatorFunction()]); // iterables

function* generateSequence(from: number, to: number) {
  for (let i = from; i < to; ++i) yield i;
}

function* generatePassword() {
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

let str = "";

for (let code of generatePassword()) {
  str += String.fromCharCode(code);
}

console.log(str);

function* gen() {
  const value: string = yield "what is generator ?";
  console.log(value);
}

const genFunc = gen();
console.log(genFunc.next().value);
console.log(genFunc.next("its pause and resume execution function"));

function* cursor() {
  const questionary: string = yield "hello world ! what do you need from me ? ";
  yield questionary;
}

const aiCodeEditor = cursor();
console.log(aiCodeEditor.next());
console.log(aiCodeEditor.next("nothing just FAFO !"));
console.log(aiCodeEditor.return());
// try {
//   aiCodeEditor.throw(new Error("hello"));
// } catch (err) {
//   console.log(err);
// }
