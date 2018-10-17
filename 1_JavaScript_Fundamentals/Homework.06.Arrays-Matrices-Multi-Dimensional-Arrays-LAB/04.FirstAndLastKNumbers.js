function firstAndLastKNumbers(input) {
    let k = Number(input[0]);
    let first = [];
    let last = [];
    for (let i = 1; i <= k; i++) {
        first.push(input[i]);
        last.unshift(input[input.length-i]);
    }

    console.log(first.join(' '));
    console.log(last.join(' '));
}

firstAndLastKNumbers([3, 6, 7, 8, 9]);