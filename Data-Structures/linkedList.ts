class SinglyLinkedNode<T> {
  data: T;
  next: SinglyLinkedNode<T>;
  constructor(data: T, next: SinglyLinkedNode<T>) {
    this.data = data;
    this.next = next;
  }
}

class DoublyLinkedNode<T> {
  data: T;
  prev: DoublyLinkedNode<T>;
  next: DoublyLinkedNode<T>;
  constructor(data: T, prev: DoublyLinkedNode<T>, next: DoublyLinkedNode<T>) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export { SinglyLinkedNode, DoublyLinkedNode };
