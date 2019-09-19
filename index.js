// function findMinAndRemoveSorted(array) {
//   if (Array.isArray) {
//     let min = array[0];
//     let index = 0;
//
//     for (let i = 0; array.length > i; i++) {
//       if (min > array[i]) {
//         min = array[i];
//         index = i;
//       }
//     }
//     return array.splice(index, 1)[0];
//   } else {
//     return "This is not an array!";
//   }
// }
//
// function merge(firstSubArray, secondSubArray) {
//   if (Array.isArray) {
//     let sorted = [];
//     while (firstSubArray.length && secondSubArray.length) {
//       firstSubArray[0] > secondSubArray[0]
//         ? sorted.push(secondSubArray.shift())
//         : sorted.push(firstSubArray.shift());
//     }
//     return [...sorted, ...firstSubArray, ...secondSubArray];
//   } else {
//     return "This is not an array!";
//   }
// }
//
// function mergeSort(array) {
//   if (Array.isArray) {
//     if (array.length > 2) {
//       let index = Math.floor(array.length / 2);
//       let firstSubArray = mergeSort(array.splice(0, index));
//       let secondSubArray = mergeSort(array.splice(0, array.length));
//       return merge(firstSubArray, secondSubArray);
//     } else {
//       return [findMinAndRemoveSorted(array), array[0]];
//     }
//   } else {
//     return "This is not an array!";
//   }
// }
function findMinAndRemoveSorted(array) {
  if (Array.isArray(array)) {
    return array.shift();
  } else {
    return "This is not an array!";
  }
}
function merge(firstHalf, secondHalf) {
  if (Array.isArray(firstHalf) && Array.isArray(secondHalf)) {
    let sorted = [];
    while (firstHalf.length && secondHalf.length) {
      firstHalf[0] > secondHalf[0]
        ? sorted.push(findMinAndRemoveSorted(secondHalf))
        : sorted.push(findMinAndRemoveSorted(firstHalf));
    }
    return [...sorted, ...firstHalf, ...secondHalf];
  } else {
    return "This is not an array!";
  }
}

function mergeSort(array) {
  if (Array.isArray(array)) {
    if (array.length > 1) {
      let midpoint = array.length / 2;
      let firstHalf = array.slice(0, midpoint);
      let secondHalf = array.slice(midpoint, array.length);
      return merge(mergeSort(firstHalf), mergeSort(secondHalf));
    } else {
      return array;
    }
  } else {
    return "This is not an Array!";
  }
}
// let array = [3, 2, 4, 5, 6, 7];
// console.log(array);
// console.log(findMinAndRemoveSorted(array));
// console.log(array);
// let firstSubarray = [3, 4, 6, 7];
// let secondSubArray = [1, 2, 5, 8];
// console.log(firstSubarray, secondSubArray);
// console.log(merge(firstSubarray, secondSubArray));
unsorted = [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7];
console.log(mergeSort(unsorted));
