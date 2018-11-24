function diagonalAttack(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ');
    }
    let sum1 = 0;
    let sum2 = 0;
    let cel1;
    let cel2;
    let endRow = matrix.length;
    for (let row = 0; row < matrix.length; row++) {
        endRow--;
        cel1 = matrix[row][row];
        cel2 = matrix[row][endRow];
        sum1 += Number(cel1);
        sum2 += Number(cel2);
    }



    if (sum1 == sum2) {
        let celStart = 0;
        let celEnd = matrix.length - 1;
        for (let row = 0; row < matrix.length; row++) {
            for (let i = 0; i < matrix[row].length; i++) {
                if (i != celStart && i != celEnd) {
                    matrix[row][i] = sum1;
                }
            }

            celStart++;
            celEnd--;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));

}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
    ]);