function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  arr.splice(minIndex, 1);
  return min;
}

function merge(arr1, arr2) {
  let sorted = [];
  while ((arr1.length != 0) & (arr2.length != 0)) {
    if (arr1[0] <= arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  return sorted.concat(arr1).concat(arr2);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
