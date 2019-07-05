function findMinAndRemoveSorted (arr) {
  return arr.shift()
}

function findMin (arr1, arr2) {
  if (arr1[0] < arr2[0]) {
    return arr1.shift()
  } else {
    return arr2.shift()
  }
}

function merge (arr1, arr2) {
  const sorted = []
  while (arr1.length> 0 && arr2.length> 0) {
    sorted.push(findMin(arr1, arr2))
  }
  return sorted.concat(arr1, arr2)
}

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let midpoint = arr.length/2
    let firstHalf = arr.slice(0, midpoint)
    let secondHalf = arr.slice(midpoint)

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
