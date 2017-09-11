const findMinAndRemoveSorted = (array) => array.shift()

function merge(firstHalf, secondHalf) {
  let merged = []
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      merged.push(findMinAndRemoveSorted(firstHalf))
    } else {
      merged.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return merged.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
  let midPoint = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint, array.length)
  return array.length < 2 ? array : merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
