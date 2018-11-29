//return the smallest element of an array and remove the smallest element from an array
function findMinAndRemoveSorted(array){
  let min = array[0];
  let minIndex = 0;
  for(let i = 0; i < array.length; i++){
    let currentElement = array[i]
    if(array[i] < min){
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

//merge two sorted arrays to produce one sorted array, so firstArray and secondArray
//are already sorted, that is why we can hard coding index 0 at line 21, 23 and 26
function merge(firstArray, secondArray){
  let sorted = [];
  while(firstArray.length != 0 && secondArray.length != 0){
    if(firstArray[0] < secondArray[0]){
      sorted.push(firstArray[0]);
      firstArray.splice(0, 1)
    } else {
      sorted.push(secondArray[0]);
      secondArray.splice(0, 1)
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

//should sort an unsorted array
function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  if(array.length < 2){
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    //break the whole array into each element, and then merge them by order
  }
  return sorted
}
