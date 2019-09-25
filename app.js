class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 0;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = node => {
      // if value is less than node.value, go left
      if (value < node.value) {
        // if no left child then just append left new node
        if (!node.left) {
          node.left = newNode;
        }
        // if left child, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value is greated than node.value, go right
      else if (value > node.value) {
        // if no right child then just append right new node
        if (!node.right) {
          node.right = newNode;
        }
        // if right child, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;
    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;
    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return value;
  }
  //example ordered binary tree 2, 3, 12, 15, 28, 36, 39

  // depth first search

  // in-order
  // left, root, right
  dfsInOrder() {}

  // pre-order
  // root, left, right
  dfsPreOrder() {}

  // post-order
  dfsPostOrder() {}

  // breadth first search
}
