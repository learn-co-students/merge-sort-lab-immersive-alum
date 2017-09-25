//
// let wholeFood = [1, 2, 6, 7, 8]
// let traderJoes = [3, 4, 5, 9, 10]
//
//
// function merge(array1, array2, sorted = []){
//   debugger
//   let arr1Min = array1[0];
//   let arr2Min = array2[0];
//   let arr = []
//
//   while(array1.length !== 0 && array2.length !== 0){
//     if (arr1Min < arr2Min){
//       sorted.push(array1.shift())
//       return merge(array1, array2, sorted)
//     } else {
//       sorted.push(array2.shift())
//       return merge(array1, array2, sorted)
//     }
//   }
//   return sorted.concat(array1).concat(array2)
// }
//
//
// function mergeSort(array){
//   let firstHalf = array.slice(0, array.length / 2)
//   let secondHalf = array.slice(firstHalf.length, array.length)
//   // debugger
//
//   if (array.length < 2){
//     return array
//   } else {
//     debugger
//     merge(mergeSort(firstHalf), mergeSort(secondHalf))
//   }
// }
//
// var arr = [2,10,4,6,9,8,7,1,3]
//
// var arr1 = [2,10,4,6]
// var arr2 = [9, 8, 7, 1, 3]

//
// function findMinAndRemoveSorted(array){
//
//   if (array.length !== 1){
//     if (array[0] < array[1]){
//       let el = array[0]
//       let tempArr = array.slice(2, array.length)
//       tempArr.unshift(el)
//       return findMinAndRemoveSorted(tempArr)
//     } else {
//       return findMinAndRemoveSorted(array.slice(1, arr.length))
//     }
//   } else {
//     return array
//   }
// }


function findMinAndRemoveSorted(array){
  let min = array[0];
  let index = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] < min){
        min = array[i]
        index = i
      }
    }
    array.splice(index, 1)
    return min
}


function merge(arr1, arr2){
  let sorted = [];
  while(arr1.length !== 0 || arr2.length !== 0){
    let f = arr1[0];
    let s = arr2[0];
      if (!!f && !!s){
        if(f < s){
          sorted.push(findMinAndRemoveSorted(arr1))
        } else {
          sorted.push(findMinAndRemoveSorted(arr2))
        }
    } else {
      if (!!f){
        sorted.push(findMinAndRemoveSorted(arr1))
      } else {
        sorted.push(findMinAndRemoveSorted(arr2))
      }
    }
  }
  return sorted
}


function mergeSort(array){
  let firstHalf = array.slice(0, array.length/2);
  let secondHalf = array.slice(firstHalf.length, array.length)
    if (array.length < 2){
      return array
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}

// mergeSort([12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7])
