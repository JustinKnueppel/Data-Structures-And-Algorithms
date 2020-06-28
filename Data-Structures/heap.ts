interface Heap {
  add(value: number): void;
  remove(): number;
  size(): number;
}

class MaxHeap implements Heap {
  private values: Array<number>;
  private heapSize: number;
  constructor(values?: Array<number>) {
    this.values = values || new Array<number>();
    this.heapSize = this.values.length;
    this.heapify();
  }

  private heapify(): void {
    const end = this.heapSize-1;
    let start = this.parent(end)
    while (start >= 0) {
      this.siftDown(start--, end)
    }
  }

  private siftDown(start: number, end: number): void {
    let root = start;
    while (this.left(root) <= end) {
      let child = this.left(root)
      const right = this.right(root);
      if (right <= end && this.values[child] < this.values[right]) {
        child = right;
      }

      if (this.values[root] > this.values[child])
        return;
      
      this.swap(root, child)
      root = child;
    }
  }
  private bubbleUp(child: number): void {
    let parent = this.parent(child);
    while (parent >= 0 && this.values[child] > this.values[parent]) {
      this.swap(parent, child)
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

  add(value: number): void {
    this.values.splice(this.heapSize, 0, value);
    this.bubbleUp(this.heapSize)
    this.heapSize++
  }

  remove(): number {
    const result = this.values[0];
    this.swap(0, this.heapSize-1);
    this.heapSize--;
    this.heapify()
    return result;
  }

  size(): number {
    return this.heapSize;
  }
}

class MinHeap implements Heap {
  private values: Array<number>;
  private heapSize: number;
  constructor(values?: Array<number>) {
    this.values = values || new Array<number>();
    this.heapSize = this.values.length;
    this.heapify();
  }

  private heapify(): void {
    const end = this.heapSize-1;
    let start = this.parent(end)
    while (start >= 0) {
      this.siftDown(start--, end)
    }
  }

  private siftDown(start: number, end: number): void {
    let root = start;
    while (this.left(root) <= end) {
      let child = this.left(root)
      const right = this.right(root);
      if (right <= end && this.values[child] > this.values[right]) {
        child = right;
      }

      if (this.values[root] < this.values[child])
        return;
      
      this.swap(root, child)
      root = child;
    }
  }
  private bubbleUp(child: number): void {
    let parent = this.parent(child);
    while (parent >= 0 && this.values[child] < this.values[parent]) {
      this.swap(parent, child)
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

  add(value: number): void {
    this.values.splice(this.heapSize, 0, value);
    this.bubbleUp(this.heapSize)
    this.heapSize++
  }

  remove(): number {
    const result = this.values[0];
    this.swap(0, this.heapSize-1);
    this.heapSize--;
    this.heapify()
    return result;
  }

  size(): number {
    return this.heapSize;
  }
}

export { Heap, MaxHeap, MinHeap }