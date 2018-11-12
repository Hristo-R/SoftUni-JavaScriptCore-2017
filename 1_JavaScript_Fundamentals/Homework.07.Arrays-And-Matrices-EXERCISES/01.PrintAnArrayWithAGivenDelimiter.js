function printAnArrayWithAGivenDelimiter(input) {
    let delimiter = input[input.length - 1];
    let result = [];
    for (i = 0; i < input.length-1; i++) {
        result[i] = input[i];
    }

    console.log(result.join(delimiter));
}

printAnArrayWithAGivenDelimiter([
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);