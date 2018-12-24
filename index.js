function findMinAndRemoveSorted(array){
  array.sort((a, b) => {
    return a - b;
  })

  return array.shift();
}

function merge(array1, array2){
  let unsortedArray = [...array1, ...array2];
  let min;
  let sortedArray = [];
  while(unsortedArray.length > 0){
    min = findMinAndRemoveSorted(unsortedArray);
    sortedArray.push(min);
  }
  return sortedArray;
}

function mergeSort(array){
  let sortedArray = [array.shift()];

  while(array.length > 0){
    sortedArray = merge(sortedArray, [array.shift()]);
  }

  return sortedArray;
}
