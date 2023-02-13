class Node {
  constructor(value = null, nextNode = null) {
    this._value = value;
    this._nextNode = nextNode;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(newNode) {
    this._nextNode = newNode;
  }
}

class LinkedList {
  constructor() {
    this.list = {
      head: {},
    };
  }

  isListEmpty() {
    return this.head.nextNode === undefined;
  }

  appendValue(value, node = this.head) {
    if (this.isListEmpty()) this.head = new Node(value);
    else if (node.nextNode === null) node.nextNode = new Node(value);
    else {
      this.appendValue(value, node.nextNode);
    }
    return this.list;
  }

  prepend(value) {
    const currentHeadNode = this.head;
    if (this.head.nextNode === undefined) this.head = new Node(value, null);
    else this.head = new Node(value, currentHeadNode);
    return this.list;
  }

  size(count = 1, node = this.head) {
    if (this.isListEmpty()) return 0;
    if (node.nextNode === null) return count;
    count += 1;
    return this.size(count, node.nextNode);
  }

  get head() {
    return this.list.head;
  }

  set head(newValue) {
    this.list.head = newValue;
  }

  tail(node = this.head) {
    if (this.isListEmpty()) return 'empty list';
    if (node.nextNode === null) return node;
    return this.tail(node.nextNode);
  }

  at(index, node = this.head, count = 1) {
    if (node === null || this.isListEmpty()) return 'not found anything';
    if (count === index) return node;
    count += 1;
    return this.at(index, node.nextNode, count);
  }

  pop(node = this.head) {
    if (this.size() === 1) this.head = {};
    else if (node.nextNode.nextNode === null) node.nextNode = null;
    else this.pop(node.nextNode);
  }

  contains(value, node = this.head) {
    if (node.value === value) return true;
    if (node.nextNode === null) return false;
    return this.contains(value, node.nextNode);
  }

  find(value, node = this.head, count = 1) {
    if (node.value === value) return count;
    if (node.nextNode === null) return 'could not find the value';
    return this.find(value, node.nextNode, ++count);
  }

  toString(node = this.head) {
    if (this.isListEmpty()) return 'empty list';
    if (node.nextNode === null) return `( ${node.value} ) -> null`;
    return `( ${node.value} ) -> ${this.toString(node.nextNode)}`;
  }

  nodeAt(index, node = this.head, count = 1) {
    if (this.isListEmpty()) return 'list is empty';
    if (index === count) return node;
    if (node.nextNode === null) return 'not found';
    return this.nodeAt(index, node.nextNode, ++count);
  }

  insertAt(value, index, count = 1, node = this.head) {
    if (index === 1) return this.prepend(value);
    if (index <= 0 || this.size() < index) return 'index must be valid';
    if (index === count)
      this.nodeAt(count - 1).nextNode = new Node(value, node);
    else return this.insertAt(value, index, ++count, node.nextNode);
    return this.list;
  }

  removeAt(index, count = 1, node = this.head) {
    if (this.size() === 0) return 'empty list';
    if (index === 1)
      this.size() === 1 ? (this.head = {}) : (this.head = node.nextNode);
    else if (index === count) this.nodeAt(count - 1).nextNode = node.nextNode;
    else if (node.nextNode === null) return 'index not found';
    else return this.removeAt(index, ++count, node.nextNode);
    return this.list;
  }
}
