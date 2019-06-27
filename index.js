let array = [2, 3, 4, 5, 6, 7]


function findMinAndRemoveSorted(array) {
  let minfirstHalf = array[0]
  let minsecondHalf = array[0]

  if(minfirstHalf < minsecondHalf) {
    return array.shift()
  } else {
    return array.shift()
  }
}

let firstSubarray = [3, 4, 5, 7]
let secondSubArray = [1, 2, 6, 8]

function findMinAndRemove(firstSubarray, secondSubArray){
  let minfirstHalf = firstSubarray[0]
  let minsecondHalf = secondSubArray[0]

  if(minfirstHalf < minsecondHalf){
    return firstSubarray.shift()
  } else {
    return secondSubArray.shift()
  }
}

function merge(firstSubarray, secondSubArray) {
    let sorted = []
    while (firstSubarray.length != 0 && secondSubArray.length != 0) {
      sorted.push(findMinAndRemove(firstSubarray, secondSubArray))
    }
    return sorted.concat(firstSubarray).concat(secondSubArray)
}


function mergeSort(unsorted) {
  let midPoint = unsorted.length/2
  let firstHalf = unsorted.slice(0, midPoint)
  let secondHalf = unsorted.slice(midPoint, unsorted.length)

   if (unsorted.length < 2) {
    return unsorted
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
