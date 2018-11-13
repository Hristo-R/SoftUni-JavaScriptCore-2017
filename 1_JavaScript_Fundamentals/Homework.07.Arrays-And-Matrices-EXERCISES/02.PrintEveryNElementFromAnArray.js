function printEveryNElementFromAnArray (arr) {
    for (i = 0; i < arr.length - 1; i += Number(arr[arr.length-1])) {
        console.log(arr[i]);
    }
}

printEveryNElementFromAnArray([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
]);