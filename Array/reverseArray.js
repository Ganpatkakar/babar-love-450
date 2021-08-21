function ReverseArray1(arr) {
  return arr.reverse();
}

function ReverseArray2(arr) {
  const len = arr.length;
  let i = 0;
  let j = len - 1;
  while(i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}

const arr1 = [1, 2, 3, 4,5, 6];
console.log(ReverseArray2(arr1))