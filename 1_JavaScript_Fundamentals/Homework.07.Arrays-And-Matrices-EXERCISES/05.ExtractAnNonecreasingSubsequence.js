function extractAnNonecreasingSubsequence(arr) {
    let input = [];

    for (i = 0; i < arr.length; i++) {
        input[i] = Number(arr[i]);
    }

    let result = [input[0]];
    if (input[0] < input[1]) {
        result.push(input[1]);
    }

    for (let i = 1; i < input.length - 1; i++) {
        if (input[i] < input[i + 1] && input[i + 1] > result[result.length - 1]) {
            result.push(input[i + 1]);
        }
    }

    console.log(result.join('\n'));
}

extractAnNonecreasingSubsequence([
    '10',
    '20',
    '3',
    '2',
    '15',
    '6',
    '1',
    '2',
    '30',
    '10',
    '20',
    '40'
]);