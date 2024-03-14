let matrix = [[1, 2, 3], 
             [4, 5, 6], 
             [7, 8, 9]
]

let matrix1 = [[10]] 

function sum(array) {
    newSum = 0;
    if (array.length > 1) {
        for (let index = 0; index < array.length; index++) {
            newSum += array[index][index] + array[index][array.length - 1 - index]
        }
        return newSum;
    }
    return array[0][0];

}


console.log(sum(matrix1))