function findMaxAndMin (arr) {
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  for(let val of arr) {
    if(val > max) max = val;
    if(val < min) min = val;
  }
  return {
    max, min
  }
}

const arr = [1, 2, 3, 4, 5, 6];
console.log(findMaxAndMin(arr));