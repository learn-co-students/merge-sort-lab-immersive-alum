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
  while(first.length || second.length){
     let f = first[0]
     let s = second[0]
     debugger
     if(!!f && !!s){
       if(f < s){
         sorted.push(findMinAndRemoveSorted(first))
       }else if(s < f){
         sorted.push(findMinAndRemoveSorted(second))
       }
    }else{
       if(!!s){
         sorted.push(findMinAndRemoveSorted(second))
       }else if(!!f){
         sorted.push(findMinAndRemoveSorted(first))
       }
     }
  }
  return sorted
}

function mergeSort(array){
  let midPoint = array.length / 2
  let first = array.slice(0, midPoint)
  let second = array.slice(midPoint, array.length)
  debugger
    if(array.length !== 1){
      return merge(mergeSort(first), mergeSort(second))
    }else{
      return array
    }
}
