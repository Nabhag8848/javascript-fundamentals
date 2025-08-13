class Queue<T> {
  private elements: Array<T>;

  constructor() {
    this.elements = new Array<T>();
  }

  enqueue(data: T): T {
    this.elements.push(data);
    return data;
  }

  dequeue(): T | null {
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  front(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.elements.at(0);
  }

  rear(): T | null {
    const size = this.size();

    if (this.isEmpty()) {
      return null;
    }

    return this.elements.at(size - 1);
  }

  display(): void {
    console.log(this.elements.join("\n"));
  }

  clear(): void {
    this.elements = new Array<T>();
  }
}

const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.display();
console.log(queue.front());
console.log(queue.rear());
console.log(queue.dequeue());
queue.display();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty());
