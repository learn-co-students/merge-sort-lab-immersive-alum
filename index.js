function findMinAndRemoveSorted(array){
  let currentMin = array[0]
  for (let i = 0; i < array.length; i++){
    if (array[i] < currentMin){
      currentMin = array[i]
    }
  }
  return array.splice(array.indexOf(currentMin), 1)
}

function merge(array1, array2){
  let array = [];
  while (array1.length!==0 && array2.length!==0){
    if (array1[0] < array2[0]){
      array.push(array1.shift())
    } else {
      array.push(array2.shift())
    }
  }
  return array.concat(array1).concat(array2)
}

function mergeSort(array){
  let midPoint = array.length/2
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint)
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
