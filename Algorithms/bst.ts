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

export { insert };
