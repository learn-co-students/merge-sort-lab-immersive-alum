// let array = [2, 3, 4, 5, 6, 7]
// Implement a function that first finds and removes the smallest element
//  in a sorted array.
let findMinAndRemoveSorted=(array)=>{
  return array.shift()
}

// console.log(findMinAndRemoveSorted(array));
// console.log(array);

// Implement the merge function to combine two sorted arrays
// into one larger array.
let merge = (a1,a2)=>{
  let merged = []
  while(a1.length > 0 && a2.length > 0){
    if(a1[0] > a2[0]) { merged.push(a2.shift())}
    else { merged.push(a1.shift())}
  }
  return merged.concat(a1).concat(a2)
}

// let firstSubarray = [3, 4, 6, 7]
// let secondSubArray = [1, 2, 5, 8]
// let sorted = merge(firstSubarray, secondSubArray)
// console.log(sorted);

// Implement the mergeSort algorithm using the previous functions
// that you wrote.
let unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]
let mergeSort = (array)=>{
  let mid = parseInt(array.length/2)
  let firstHalf = array.slice(0,mid)
  let secondHalf = array.slice(mid)
  // console.log(`${mid} \n ${firstHalf} \n ${secondHalf}`);
  if(array.length < 2){return array}
  return merge(mergeSort(firstHalf),mergeSort(secondHalf))
}


// console.log(mergeSort(unsorted));
