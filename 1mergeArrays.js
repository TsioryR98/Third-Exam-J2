/*
    assert.deepEqual(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']), [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
    assert.deepEqual(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]), ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
    assert.deepEqual(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']), [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);

    assert.deepEqual(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]), ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
*/

let arr1 = [1, 2, 3, 4, 5,6,7,8];
let arr2 = ['a', 'b', 'c', 'd', 'e'];

function mergeArrays(array1,array2) {
    let merges = [];
        if (array1.length === array2.length) {
            for (let i = 0; i < array1.length; i++) {
             merges.push(array1[i],array2[i]) 
            } 
    }
        else if (array1.length > array2.length) {
            for (let i = 0; i < array2.length; i++) {
              merges.push(array1[i],array2[i])  
            }
        merges = merges.concat(array1.slice(array2.length));
    }
    return merges;
}

console.log(mergeArrays(arr1,arr2))
console.log(arr1.slice(arr2.length))

