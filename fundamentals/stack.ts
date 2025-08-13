/*
LIFO, top/peek, isEmpty, push, pop, size
*/

class Stack<T> {
  private elements: Array<T>;

  constructor() {
    this.elements = new Array<T>();
  }

  push(data: T): T {
    this.elements.push(data);
    return data;
  }

  pop(): T {
    return this.elements.pop();
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  peek(): T | null {
    const size = this.elements.length;

    if (!size) {
      return null;
    }

    return this.elements.at(size - 1);
  }

  display(): void {
    console.log(this.elements.reverse().join("\n"));
  }
}

const stack = new Stack<number>();

stack.display();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.pop();
stack.display();
