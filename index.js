const findMinAndRemoveSorted = arr => arr.shift()

const merge = (sortedArr1, sortedArr2) => {
    let sortedCombined = []

    while (sortedArr1.length && sortedArr2.length) {
        if (sortedArr1[0] < sortedArr2[0]) {
            sortedCombined.push(findMinAndRemoveSorted(sortedArr1))
        } else {
            sortedCombined.push(findMinAndRemoveSorted(sortedArr2))
        }
    }

    return [...sortedCombined, ...sortedArr1, ...sortedArr2]
}

const mergeSort = unsortedArr => {
    if (unsortedArr.length < 2) {
        return unsortedArr
    }

    let midpoint = Math.floor(unsortedArr.length / 2)
    let leftSide = unsortedArr.slice(0, midpoint)
    let rightSide = unsortedArr.slice(midpoint)

    return merge( mergeSort(leftSide), mergeSort(rightSide))
}