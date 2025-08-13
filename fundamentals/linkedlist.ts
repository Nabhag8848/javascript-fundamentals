/*
- linear data structure
- nodes and each node has data and pointer to next node, pointer to next is null then its last node. 
- data can be anything, we can't to random access to any node.
- one way and each linked list has head which is start node, first element in linkedlist. 
*/

class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;
  private size: number = 0;

  prepend(data: T): void {
    const node = new ListNode<T>(data);

    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // 1 -> 2 -> 3 -> 4 -> 5

  insertAt(index: number, data: T): void {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(data);
    } else {
      const node = new ListNode<T>(data);
      let first = this.head;

      for (let i = 0; i < index - 1; ++i) {
        first = first.next;
      }

      const second = first.next;
      first.next = node;
      node.next = second;
    }

    this.size++;
  }

  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index + 1 === this.size) {
      return this.removeLast();
    }

    let current = this.head;

    for (let i = 0; i < index - 1; ++i) {
      current = current.next;
    }

    const value = current.next.data;
    current.next = current.next.next;

    --this.size;
    return value;
  }

  removeLast(): T | null {
    if (!this.head) {
      return null;
    }

    if (this.getSize() === 1) {
      const value = this.head.data;
      this.head = null;
      return value;
    }

    let current = this.head;

    while (current.next && current.next.next !== null) {
      current = current.next;
    }

    const data = current.next.data;
    current.next = null;
    --this.size;
    return data;
  }

  removeFirst(): T | null {
    if (!this.head) return null;

    const data = this.head.data;
    this.head = this.head.next;
    --this.size;
    return data;
  }

  append(data: T): void {
    const node = new ListNode<T>(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  display() {
    let current = this.head;
    const elements: T[] = [];

    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }

    console.log(elements.length ? elements.join(" -> ") + " -> null" : null);
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
console.log(list.getSize());
list.insertAt(6, 0);
list.display();

list.removeFirst();
list.display();

list.removeLast();
list.display();

list.removeAt(100);
list.display();
