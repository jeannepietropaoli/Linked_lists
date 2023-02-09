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

/* {
  head : {
    node1 : valueNode1
    next : {
      node2 : valueNode2
      next : {

      }
    }
  }
} */

class LinkedList {
  constructor() {
    this.list = {
      head: {},
    };
  }

  appendValue(value, node = this.head()) {
    if (node.nextNode === null || node.nextNode === undefined) {
      node.nextNode = new Node(value);
    } else {
      this.appendValue(value, node.nextNode);
    }
  }

  prepend(value) {
    this.list.head = new Node(value, this.list.head.nextNode);
  }

  size(count = 0, node = this.head()) {
    if (node.nextNode === undefined) return count;
    if (node.nextNode === null) return count + 1;
    count += 1;
    return this.size(count, node.nextNode);
  }

  head() {
    return this.list.head;
  }

  tail(node = this.head()) {
    if (node.nextNode === null || node.nextNode === undefined) return node;
    return this.tail(node.nextNode);
  }

  at(index, node = this.head(), count = 1) {
    if (node === null || node.nextNode === undefined)
      return 'not found anything';
    if (count === index) return node;
    count += 1;
    return this.at(index, node.nextNode, count);
  }

  /* pop() {
    this.list.pop();
    this.list.tail().nextNode = null;
  }

  contains(value) {
    return this.list.some((node) => node.value === value);
  }

  find(value) {
    return this.list.findIndex((node) => node.value === value);
  }

  toString() {
    let string = '';
    // recursive possibility ?
    this.list.forEach((node) => {
      string += `(${node.value}) -> (${node.nextNode})`;
      if (node.nextNode === null) string += 'null';
    });
    console.log(string);
  } */
}

const list = new LinkedList();
list.appendValue('first');
list.appendValue('second');
list.prepend('before first');
