
function findMinAndRemoveSorted(arr) {
  let minIndex = 0;
  let min = arr[minIndex];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      let min = arr[i];
      let minIndex = i;
    }
  }
  return arr.splice(minIndex, 1)
}

function findMinAndRemove(arr1, arr2) {
  let min1 = arr1[0]
  let min2 = arr2[0]

  if (min1 < min2) {
    return arr1.shift()
  } else {
    return arr2.shift()
  }
}

function merge(arr1, arr2) {
    let sorted = []
    while (arr1.length != 0 && arr2.length != 0) {
      sorted.push(findMinAndRemove(arr1, arr2))
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
  let midPoint = arr.length/2
  let firstHalf = arr.slice(0, midPoint)
  let secondHalf = arr.slice(midPoint, arr.length)

  if (arr.length < 2) {
    return arr
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
