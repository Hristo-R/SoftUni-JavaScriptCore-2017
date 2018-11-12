function equalNeighbors(inputArray) {
    let neighborPairs = 0;
    for (let row = 0; row < inputArray.length; row++) {
        for (let col = 0; col < inputArray[row].length; col++) {
            if (col - 1 > -1 && inputArray[row][col] == inputArray[row][col - 1]) {neighborPairs++};
            if (row - 1 > -1 && inputArray[row][col] == inputArray[row - 1][col]) {neighborPairs++};
            if (col + 1 < inputArray[row].length && inputArray[row][col] == inputArray[row][col + 1]) {neighborPairs++};
            if (row + 1 < inputArray.length && inputArray[row][col] == inputArray[row + 1][col]) {neighborPairs++};
        }
    }

    console.log(neighborPairs / 2)
}

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
    ]
);