abstract class Heap {
  protected values: Array<number>;
  protected heapSize: number;

  constructor(values?: Array<number>) {
    this.values = values || new Array<number>();
    this.heapSize = this.values.length;
    this.heapify();
  }

  public add(value: number): void {
    this.values.splice(this.heapSize, 0, value);
    this.bubbleUp(this.heapSize);
    this.heapSize++;
  }

  public remove(): number {
    const result = this.values[0];
    this.swap(0, this.heapSize - 1);
    this.heapSize--;
    this.heapify();
    return result;
  }

  public size(): number {
    return this.heapSize;
  }

  protected abstract leftShouldBeParent(left: number, right: number): boolean;

  private heapify(): void {
    const end = this.heapSize - 1;
    let start = this.parent(end);
    while (start >= 0) {
      this.siftDown(start--, end);
    }
  }

  private siftDown(start: number, end: number): void {
    let root = start;
    while (this.left(root) <= end) {
      let child = this.left(root);
      const right = this.right(root);
      if (
        right <= end &&
        this.leftShouldBeParent(this.values[right], this.values[child])
      ) {
        child = right;
      }

      if (this.leftShouldBeParent(this.values[root], this.values[child]))
        return;

      this.swap(root, child);
      root = child;
    }
  }

  private bubbleUp(child: number): void {
    let parent = this.parent(child);
    while (
      parent >= 0 &&
      this.leftShouldBeParent(this.values[child], this.values[parent])
    ) {
      this.swap(parent, child);
      child = parent;
      parent = this.parent(child);
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  private parent(child: number): number {
    return Math.ceil(child / 2) - 1;
  }

  private left(parent: number): number {
    return parent * 2 + 1;
  }

  private right(parent: number): number {
    return this.left(parent) + 1;
  }
}

class MaxHeap extends Heap {
  protected leftShouldBeParent(left: number, right: number): boolean {
    return left > right;
  }
}

class MinHeap extends Heap {
  protected leftShouldBeParent(left: number, right: number): boolean {
    return left < right;
  }
}

export { Heap, MaxHeap, MinHeap };
