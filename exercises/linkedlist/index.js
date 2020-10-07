// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let pointer = this.head;
    while(pointer) {
      counter++;
      pointer = pointer.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let pointer = this.head;
    // while(pointer) {
    //   if (!pointer.next) {
    //     return pointer;
    //   }
    //   pointer = pointer.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head)
      return;
    let temp = new Node(this.head.data, this.head);
    temp.next = null;
    temp.data = null;
    this.head = this.head.next;
  }

  removeLast() {
    if(!this.head) {
      return;
    }
    let pointer = this.head;
    while(pointer.next) {
      if (!pointer.next.next) {
        pointer.next = null;
        return;
      }
      pointer = pointer.next;
    }
    this.head = null;
  }

  insertLast(data) {
    let last = this.getLast();
    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data);
    }
  }

  getAt(n) {
    let pointer = this.head;
    let counter = 0;
    while(pointer) {
      if (counter === n) {
        return pointer;
      }
      counter++;
      pointer = pointer.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }
    if (n === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(n - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, n) {
    if (!this.head) { 
      this.head = new Node(data);
      return;
    }
    if (n === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(n - 1) || this.getLast();
    const toInsert = new Node(data, previous.next);
    previous.next = toInsert;
  }
  
  forEach(callback) {
    if (callback) {
      let pointer = this.head;
      let counter = 0;
      while(pointer) {
        callback(pointer, counter++);
        pointer = pointer.next;
      }
    }
  }

  // This definies an iterator function
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
