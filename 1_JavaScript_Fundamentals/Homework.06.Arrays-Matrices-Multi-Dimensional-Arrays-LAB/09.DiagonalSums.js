function diagonalSums(input) {
    let main = 0;
    let second = 0;
    for (let row = 0; row < input.length; row++) {
        main += input[row][row];
        second += input[row][input.length - row - 1];
    }
    console.log(main + ' ' + second)
}

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);