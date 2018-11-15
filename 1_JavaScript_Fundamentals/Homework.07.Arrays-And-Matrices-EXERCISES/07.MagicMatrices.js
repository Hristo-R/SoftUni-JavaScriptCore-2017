function magicMatrices(input) {
    let rowSums = [];
    let colSums = [];
    let rowSum = 0;
    let colSum = 0;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input.length; col++) {
            rowSum += input[row][col];
        }

        rowSums.push(rowSum);
        rowSum = 0;
    }

    for (let i = 0; i < rowSums.length - 1; i++) {
        if (rowSums[i] != rowSums[i + 1]) {
            return false;
            break;
        }
    }

    for (let col = 0; col < input.length; col++) {
        for (let row = 0; row < input.length; row++) {
            colSum += input[row][col];
        }

        colSums.push(colSum);
        colSum = 0;
    }

    for (let i = 0; i < colSums.length - 1; i++) {
        if (colSums[i] != colSums[i + 1]) {
            return false;
            break;
        }
    }

    return true;
}

console.log(
    magicMatrices([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]));