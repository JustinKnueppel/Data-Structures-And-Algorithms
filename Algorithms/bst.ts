import Node from "../Data-Structures/binaryTree.ts";

const insert = (root: Node, node: Node): void => {
  if (node.val <= root.val) {
    if (!root.left) {
      root.left = node;
    } else {
      insert(root.left, node);
    }
  } else {
    if (!root.right) {
      root.right = node;
    } else {
      insert(root.right, node);
    }
  }
};

const contains = (root: Node, target: Node) => {
  let curNode: Node|undefined = root;
  while (curNode) {
    if (curNode.val === target.val) return true
    curNode = target.val < curNode.val ? curNode.left : curNode.right;
  }
  return false
}

const remove = (root: Node, node: Node): Node => {
  // Find node
  let curNode = root;
  while (curNode.val !== node.val) {
    if (node.val <= curNode.val) {
      if (curNode.left) {
        if (curNode.left.val === node.val && !curNode.left.left && !curNode.left.right) {
          curNode.left = undefined;
          return root;
        }
        curNode = curNode.left;
      } else {
        return root;
      }
    } else {
      if (curNode.right) {
        if (curNode.right.val === node.val && !curNode.right.left && !curNode.right.right) {
          curNode.right = undefined;
          return root;
        }
        curNode = curNode.right;
      } else {
        return root;
      }
    }
  }
  // Remove node, we know that curNode has at least one child
  if (!curNode.left) {
    curNode.val = curNode.right!.val;
    curNode.left = curNode.right!.left;
    curNode.right = curNode.right!.right;
  } else if (!curNode.right) {
    curNode.val = curNode.left!.val;
    curNode.right = curNode.left!.right;
    curNode.left = curNode.left!.left;
  } else {
    //Both children exist, need to find and remove smallest node from right child
    const smallestInRight = findSmallestNode(curNode.right);
    remove(curNode, smallestInRight)
    curNode.val = smallestInRight.val;
  }
  return root;
}

const findSmallestNode = (root: Node): Node => {
  let curNode = root;
  while (curNode.left) {
    curNode = curNode.left;
  }
  return curNode;
}

export { insert, remove, contains };
