function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(one,two) {
  let result = []
  while (one.length > 0 && two.length > 0) {
    if (one[0] > two[0]) {
      result.push(findMinAndRemoveSorted(two))
    } else {
      result.push(findMinAndRemoveSorted(one))
    }
  }
  return result.concat(one).concat(two)
}

function mergeSort(array) {
  let one = array.slice(0, array.length/2)
  let two = array.slice(array.length/2, array.length)
  if (array.length > 1) {
    return merge(mergeSort(one), mergeSort(two))
  } else {
    return array
  }
}
