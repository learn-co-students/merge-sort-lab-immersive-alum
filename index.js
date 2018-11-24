function findMinAndRemoveSorted(array) {
  let min = array[0]
  let index

  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      index = i
    }
  }

  array.splice(index, 1)
  return min
}

function merge(firstHalf, secondHalf) {
  const sorted = []
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] < secondHalf[0]) {
      let min = firstHalf.shift()
      sorted.push(min)
    } else {
      let min = secondHalf.shift()
      sorted.push(min)
    }
  }
  return [...sorted, ...firstHalf, ...secondHalf]
}

function mergeSort(array) {
  let midpoint = Math.floor(array.length / 2)
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
