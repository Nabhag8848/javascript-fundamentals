function calculator(x: number) {
  let y = x;

  return function increment() {
    return ++y;
  };
}

const increment = calculator(1);
console.log(increment());
console.log(increment());
