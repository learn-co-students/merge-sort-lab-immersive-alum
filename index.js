function findMinAndRemoveSorted(array){
let min = array[0]
let index = null
for (let i = 1; i < array.length; i++){
    if (min > array[i]){
        //[10,6,3,8]
        min = array[i]
        index = i
    }
}
array.splice(index, 1)
return min
}

function merge(array1, array2){
    let mergedArray = []
    function findMinAndRemove(array1, array2){
    let array1Min = array1[0]
    let array2Min = array2[0]
    if (array1Min < array2Min){
        return array1.shift()
    } else {
        return array2.shift()
    }
    }
    while(array1.length != 0 && array2.length != 0){
    let smallest = findMinAndRemove(array1, array2)
    mergedArray.push(smallest)
    }
    return mergedArray.concat(array1).concat(array2)
}

function mergeSort(array){
    let sortedArray = []
    function findMinAndRemove(array){
        let min = array[0]
        let index = null
        for (let i = 1; i < array.length; i++){
            if (min > array[i]){
                //[10,6,3,8]
                min = array[i]
                index = i
            }
        }
        array.splice(index, 1)
        return min
        }
        while(array.length > 0){
        let smallest = findMinAndRemove(array)
         sortedArray.push(smallest)   
    }
    return sortedArray
}
