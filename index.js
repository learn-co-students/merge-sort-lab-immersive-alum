
function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function mergeSort(array){
  let sorted = []
  while(array.length != 0){
    let min = findMinAndRemoveSorted(array)
    sorted.push(min)
  }
  return sorted
}

function merge(array1, array2){
  let sorted = []

  while(array1.length != 0 && array2.length != 0){
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1))
    } else {
      sorted.push(findMinAndRemoveSorted(array2))
    }

  }

  return sorted.concat(array1).concat(array2);

}
