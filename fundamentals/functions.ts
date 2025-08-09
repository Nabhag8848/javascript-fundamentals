add(3, 4); // is being hoisted
function add(x: number, y: number) {
  console.log(arguments);
  //   console.log(this); // determined for every call
  // function declaration
  return x + y;
}

// addExpression(3, 4); // not hoisted

const addExpression = add;

// no hoisted and key difference it doesn't have this bindings
const addArrow = (x: number, y: number): number => {
  console.log(this); // determine based on where it is being mentioned.
  //   console.log(arguments); // no arguments object
  return x + y;
};

console.log(add(3, 4), addExpression(3, 4), addArrow(3, 4));

class MyClass {
  name: string = "nabhag";
  nameFunc = () => console.log(this.name);

  greet() {
    console.log(this.name);
  }
}

const instance = new MyClass();
instance.greet();
instance.nameFunc();
