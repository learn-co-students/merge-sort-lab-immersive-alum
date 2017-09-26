function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(firstArray, secondArray){
  var sortedArray = []
  while(firstArray.length && secondArray.length){
    if (firstArray[0] < secondArray[0]){
      sortedArray = [...sortedArray, findMinAndRemoveSorted(firstArray)]
    } else {
      sortedArray = [...sortedArray, findMinAndRemoveSorted(secondArray)]
    }
  }
  sortedArray = sortedArray.concat(firstArray).concat(secondArray)
  return sortedArray
}

function mergeSort(array){
  if (array.length > 1){
    var midPoint = parseInt(array.length/2)
    var firstHalf = array.slice(0, midPoint)
    var secondHalf = array.slice(midPoint, array.length)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  } else {
      return array
  }
}
