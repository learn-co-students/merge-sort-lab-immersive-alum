const findMinAndRemoveSorted = arr => {
  let min = arr[0]
  for (let num of arr) {
    if (num < min)
    min = num
  }
  arr.splice(arr.indexOf(min), 1)
  return min
}

const findMin = (arr1, arr2) => {
  let arr1Min = arr1[0]
  let arr2Min = arr2[0]

  if (arr1Min <= arr2Min) {
    arr1.splice(0, 1)
    return arr1Min
  } else {
    arr2.splice(0, 1)
    return arr2Min
  }
}

const merge = (arr1, arr2) => {
  let newArr = []
  while (arr1.length !== 0 && arr2.length !== 0) {
    newArr.push(findMin(arr1, arr2))
  }
  return newArr.concat(arr1).concat(arr2)
}

const mergeSort = arr => {
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)
  let sorted

  if (arr.length < 2) {
    return arr
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
