function findMinAndRemoveSorted(array){
  let small = array[0]
  let index = 0
  array.forEach((item, i)=> {
    if(item < small){
      small = item
      index = i
    }
  })
  array.splice(index, 1)
  return small
}

function merge(first, second){
  let sorted = []
  while(first.length > 0 && second.length > 0){
    if(first[0] < second[0]){
      sorted.push(findMinAndRemoveSorted(first))
    }else{
      sorted.push(findMinAndRemoveSorted(second))
    }
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(array){
  let midPoint = array.length / 2
  let first = array.slice(0, midPoint)
  let second = array.slice(midPoint, array.length)
    if(array.length !== 1){
      return merge(mergeSort(first), mergeSort(second))
    }else{
      return array
    }
}
