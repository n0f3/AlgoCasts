// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  add(n) {
    this.pushStack.push(n);
  }

  remove() {
    while(this.pushStack.peek()) {
      this.popStack.push(this.pushStack.pop());
    }
    const removed = this.popStack.pop();
    // Need to restore!
    while (this.popStack.peek()) {
      this.pushStack.push(this.popStack.pop());
    }
    return removed;
  }

  peek() {
    while(this.pushStack.peek()) {
      this.popStack.push(this.pushStack.pop());
    }
    const peeked = this.popStack.peek();
    // Need to restore!
    while (this.popStack.peek()) {
      this.pushStack.push(this.popStack.pop());
    }
    return peeked;
  }
}

module.exports = Queue;
