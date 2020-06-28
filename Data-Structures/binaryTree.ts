class Node {
  val: number;
  left?: Node;
  right?: Node;

  constructor(val: number, left?: Node, right?: Node) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export default Node;
