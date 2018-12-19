function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(arr1, arr2){
  let resultArr = []
  while(arr1[0] && arr2[0]){
    if(arr1[0] < arr2[0]){
      let ele = findMinAndRemoveSorted(arr1)
      resultArr.push(ele)
    } else {
      let ele = findMinAndRemoveSorted(arr2)
      resultArr.push(ele)
    }
  }
  return [...resultArr, ...arr1, ...arr2]
}

function mergeSort(arr){
  let middlePoint = Math.floor(arr.length/2)
  let leftPart = arr.slice(0, middlePoint)
  let rightPart = arr.slice(middlePoint)
  if(arr.length === 1) {
    return arr
  } else{
    return merge(mergeSort(leftPart), mergeSort(rightPart))
  }
}
