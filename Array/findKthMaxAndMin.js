function findKthMaxAndMin(arr, k) {
  arr.sort((a, b) => a - b);
  return {
    kthMax: arr[arr.length - k],
    kthMin: arr[k - 1]
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(findKthMaxAndMin(arr, 3));