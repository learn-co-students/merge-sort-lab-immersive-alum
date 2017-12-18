function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function returnLowest(arr1, arr2) {
  let firstEl = arr1[0]
  let secondEl = arr2[0]

  if (firstEl < secondEl) {
    return findMinAndRemoveSorted(arr1)
  }
  return findMinAndRemoveSorted(arr2)
}

function merge(arr1, arr2) {
  let sortedArr = []
  while (arr1.length && arr2.length) {
    sortedArr.push(returnLowest(arr1, arr2))
  }
  // One of arr1 or arr2 is empty. Just concat both since the empty one will have no effect.
  return sortedArr.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
  let middle = arr.length / 2
  let firstPart = arr.slice(0, middle)
  let secondPart = arr.slice(middle)

  // Basecase for recursive algorithm
  if (arr.length < 2) return arr
  return merge(mergeSort(firstPart), mergeSort(secondPart))
}
