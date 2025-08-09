/*
 - for loop (initialization; condition; update_expression;)
 - for in loop (const key in object)
 - for of (const key of values)
 - while loop
 - do while loop
 - forEach
 - map
 - filter
 - reduce
 - find
 - iteration patterns, sequential and parallel excutions
 - custom iterators yield keyword [left]
*/

// basic
for (let i = 0, j = 0; i < 2 || j < 3; i = i + 1, j++) {
  //   console.log(i);
}

// tranversing object keys, for in loop
const object = {
  name: "nabhag",
  likes: "300",
};

for (const key in object) {
  console.log(`${key}:  ${object[key as keyof typeof object]}`);
}

const fruits = ["apple", "banana"];
for (const index in fruits) {
  console.log(fruits[index]);
}

// for of

for (const fruit of fruits) {
  console.log(fruit);
}

for (const char of "nabhag") {
  console.log(char);
}

for (const [index, fruit] of fruits.entries()) {
  console.log({ index, fruit });
}

const map = new Map([["a", 1]]);
for (const [key, value] of map) {
  console.log(key, value);
}

const set = new Set([1, 3, 4, 1]);
for (const value of set) {
  console.log(value);
}

let xyz = 1;

while (xyz < 4) {
  xyz++;
  console.log(xyz);
}

do {
  // will always execute onces regardless of condition
  xyz++;
} while (xyz < 5);
{
  console.log(xyz);
}

fruits.forEach((fruit, index, current) => {
  // to perform some manipulation in same array
  current[index] = "hello";
  console.log({ fruit, index, current });
});

const newFruit = fruits.map((fruit, _index, _current) => {
  return fruit + " nabhag";
});

console.log({ newFruit, fruits });

const nabhagArray = fruits.filter((fruit) => {
  return fruit == "nabhag";
});

console.log(nabhagArray);

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce((acc, value, index, current) => {
  return acc + value;
}, 0);

console.log(result);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const user = users.find((u) => u.age > 30);
console.log(user);

const urls = ["url1", "url2", "url3"];

async () => {
  // Sequential execution
  for (const url of urls) {
    const response = await fetch(url);
    console.log(await response.text());
  }

  // Parallel execution
  const promises = urls.map((url) => fetch(url));
  await Promise.all(promises);
};