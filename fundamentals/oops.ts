// object oriented programming

// class MyClass {
//   constructor() {}
//   members;

//   method() {}
// }

class User {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const userInstance = new User("nabhag");
userInstance.name = "motivaras";
console.log(userInstance.name);

class Student extends User {
  private _school: string;
  constructor(name: string, school: string) {
    super(name);
    this._school = school;
  }

  friends(): string;
  friends(x: string): string;

  friends(x?: string) {
    return x;
  }

  get school() {
    return this._school;
  }
}

const student = new Student("nabhag", "charusat");
student.name;

class Person {
  public habits() {
    return "hello";
  }
}

class Nabhag extends Person {
  override habits(): string {
    return "nabhag";
  }
}

console.log(new Person().habits());
const sfsdf = new Nabhag();
console.log(sfsdf.habits());

abstract class Shape {
  private _color: string;

  constructor(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
  }
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(color: string, private length: number, private breadth: number) {
    super(color);
  }

  calculateArea(): number {
    return this.breadth * this.length;
  }
}

interface IFly {
  fly(): void;
  altitude: number;
}

interface ISwim {
  swim(): void;
  depth: number;
}

class Eagle implements IFly, ISwim {
  depth: number;
  altitude: number;
  fly(): void {}

  swim(): void {}
  constructor(altitude: number, depth: number) {}
}


