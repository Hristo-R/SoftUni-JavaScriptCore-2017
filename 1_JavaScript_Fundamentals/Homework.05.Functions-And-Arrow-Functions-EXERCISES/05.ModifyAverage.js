function modifyAverage(num) {
    let input = num.toString();
    let average = function (numArr) {
        let sum = 0;
        for (let i = 0; i < numArr.length; i++) {
            sum += numArr[i];
        }

        return sum / numArr.length;
    };

    let numArr = [0];
    numArr[0] = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        numArr[i] = Number(input[i]);
    }

    while (average(numArr) <= 5) {
        numArr.push(9);
    }

    let result = Number(numArr.join(''));
    console.log(result);
}

modifyAverage(5835);