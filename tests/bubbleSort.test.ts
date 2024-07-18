const bubbleSort = require('../src/bubbleSort');

describe('Bubble Sort', () => {
  it('should sort an array of numbers', () => {
    const array = [3, 2, 1, 4, 5, 6];
    bubbleSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should sort an array of strings', () => {
    const array = ['c', 'b', 'a', 'd', 'e', 'f'];
    bubbleSort(array);
    expect(array).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});
