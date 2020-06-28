abstract class Heap {
  protected values: Array<number>;
  protected heapSize: number;
  constructor(values?: Array<number>) {
    this.values = values || new Array<number>();
    this.heapSize = this.values.length;
    this.heapify();
  }

  private heapify(): void {
    const end = this.heapSize - 1;
    let start = this.parent(end);
    while (start >= 0) {
      this.siftDown(start--, end);
    }
  }

  protected abstract siftDown(start: number, end: number): void;
  protected abstract bubbleUp(child: number): void;

  protected swap(i: number, j: number): void {
    const temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  protected parent(child: number): number {
    return Math.ceil(child / 2) - 1;
  }

  protected left(parent: number): number {
    return parent * 2 + 1;
  }

  protected right(parent: number): number {
    return this.left(parent) + 1;
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
}

class MaxHeap extends Heap {
  protected siftDown(start: number, end: number): void {
    let root = start;
    while (this.left(root) <= end) {
      let child = this.left(root);
      const right = this.right(root);
      if (right <= end && this.values[child] < this.values[right]) {
        child = right;
      }

      if (this.values[root] > this.values[child]) return;

      this.swap(root, child);
      root = child;
    }
  }
  protected bubbleUp(child: number): void {
    let parent = this.parent(child);
    while (parent >= 0 && this.values[child] > this.values[parent]) {
      this.swap(parent, child);
      child = parent;
      parent = this.parent(child);
    }
  }
}

class MinHeap extends Heap {
  protected siftDown(start: number, end: number): void {
    let root = start;
    while (this.left(root) <= end) {
      let child = this.left(root);
      const right = this.right(root);
      if (right <= end && this.values[child] > this.values[right]) {
        child = right;
      }

      if (this.values[root] < this.values[child]) return;

      this.swap(root, child);
      root = child;
    }
  }
  protected bubbleUp(child: number): void {
    let parent = this.parent(child);
    while (parent >= 0 && this.values[child] < this.values[parent]) {
      this.swap(parent, child);
      child = parent;
      parent = this.parent(child);
    }
  }
}

export { Heap, MaxHeap, MinHeap };
