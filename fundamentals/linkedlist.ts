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
list.append(5);
list.append(10);
console.log(list.getSize());

list.display();
