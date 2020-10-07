// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(callback) {
    if (!this.root || !callback) {
      return;
    }
    const queue = [this.root];
    let currNode;
    while(queue.length) {
      currNode = queue.shift();
      callback(currNode);
      for(const node of currNode.children) {
        queue.push(node);
      }
    }
  }

  traverseDF(callback) {
    if (!this.root || !callback) {
      return;
    }
    const queue = [this.root];
    while(queue.length) {
      const curr = queue.shift();
      callback(curr);
      queue.unshift(...curr.children);
    }
  }
}

module.exports = { Tree, Node };
