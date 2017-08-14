function findMinAndRemoveSorted(array){
  let min = array[0]
  for(var i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i]
    }
  }
  return array.shift(min)
}

function merge(array1, array2){
  function findMin(array1, array2){
    let min1 = array1[0]
    let min2 = array2[0]
    if (min1 < min2){
      return array1.shift()
    } else {
      return array2.shift()
    }
  }

  let newArr = []
  let currentMin

  while(array1.length != 0 && array2.length != 0){
    currentMin = findMin(array1, array2)
    newArr.push(currentMin)
  }
  return newArr.concat(array1).concat(array2)
}

function mergeSort(array) {
  let midpoint = array.length /2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2){
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
