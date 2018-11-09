function biggestElement(input) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    input.forEach(row => row.forEach(c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));