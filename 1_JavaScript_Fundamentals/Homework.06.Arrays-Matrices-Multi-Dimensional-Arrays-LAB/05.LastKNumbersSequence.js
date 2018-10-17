function lastKNumbersSequence(n, k) {
    let element = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = Math.max(0, i - k);
        let end = i - 1;
        for (let j = start; j <= end; j++) {
            sum += element[j];
        }

        element[i] = sum;
    }

    console.log(element.join(' '));
}

lastKNumbersSequence(8, 2);