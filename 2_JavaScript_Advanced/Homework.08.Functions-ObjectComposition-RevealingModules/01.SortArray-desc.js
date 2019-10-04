function sortArray (inputArray, sortMethod) {
    let numbers = inputArray.map(n => Number(n));
    let type = sortMethod;
    numbers.sort(function (a,b) {
        if (type === 'asc'){
            return a-b
        } else {
            return b-a
        }
    });

    return numbers
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));