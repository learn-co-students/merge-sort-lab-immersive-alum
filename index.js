
function findMinAndRemoveSorted(array) {
  let minNum = array[0]
  let index = 0

  for (var i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
      minNum = array[i]
      index = i
    }
  }
  array.splice(index,1)
  return minNum
}


function mergeSort(array) {
  if (array.length <2)
    return array

  let middlePoint = array.length/2
  let firstSubarray = array.slice(0, middlePoint)
  let secondSubArray = array.slice(middlePoint, array.length)

  return merge(mergeSort(firstSubarray), mergeSort(secondSubArray))
}

function merge(firstSubarray, secondSubArray) {
  let result = []

  while(firstSubarray.length && secondSubArray.length) {
    if (firstSubarray[0] <= secondSubArray[0]) {
      result.push(firstSubarray.shift())
    } else
      result.push(secondSubArray.shift())
  }

  while (firstSubarray.length) {
    result.push(firstSubarray.shift())
  }

  while (secondSubArray.length) {
    result.push(secondSubArray.shift())
  }
  return result
}
