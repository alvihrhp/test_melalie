function mergeSortedArrays(arrLeft, arrRight) {
    return arrLeft.concat(arrRight).sort();
}

console.log(mergeSortedArrays([1, 2, 3], [2, 5, 7])) // [1, 2, 2, 3, 5, 7] 
console.log(mergeSortedArrays([1, 2, 3], [2, 2, 4, 5])) // [1, 2, 2, 2, 3, 4, 5]