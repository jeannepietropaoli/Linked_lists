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

  appendValue(value, node = this.head) {
    if (node.nextNode === null || node.nextNode === undefined) {
      node.nextNode = new Node(value);
    } else {
      this.appendValue(value, node.nextNode);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head.nextNode);
  }

  size(count = 0, node = this.head) {
    if (node.nextNode === undefined) return count;
    if (node.nextNode === null) return count + 1;
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
    if (node.nextNode === null || node.nextNode === undefined) return node;
    return this.tail(node.nextNode);
  }

  at(index, node = this.head, count = 1) {
    if (node === null || node.nextNode === undefined)
      return 'not found anything';
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
    if (node.nextNode === null) return `( ${node.value} ) -> null`;
    return `( ${node.value} ) -> ${this.toString(node.nextNode)}`;
  }

  nodeAt(index, node = this.head, count = 1) {
    if (index === count) return node;
    if (node.nextNode === null) return 'not found';
    return this.nodeAt(index, node.nextNode, ++count);
  }

  insertAt(value, index, count = 1, node = this.head) {
    if (index === count)
      this.nodeAt(count - 1).nextNode = new Node(value, node);
    else if (node.nextNode === null) return 'index not found';
    else return this.insertAt(value, index, ++count, node.nextNode);
    return this.list;
  }

  removeAt(index, count = 1, node = this.head) {
    if (index === count) this.nodeAt(count - 1).nextNode = node.nextNode;
    else if (node.nextNode === null) return 'index not found';
    else return this.removeAt(index, ++count, node.nextNode);
    return this.list;
  }
}

const list = new LinkedList();
list.appendValue('first');
list.appendValue('second');
list.prepend('before first');
