import { Comparator, Heap } from "../Data-Structures/heap.ts"

const sorted = (comparator: Comparator, numbers: Array<number>): Array<number> => {
  const heap = new Heap(comparator, numbers);
  const result = [];
  while (heap.size() > 0) {
    result.push(heap.remove())
  }
  return result;
}

export default sorted;
