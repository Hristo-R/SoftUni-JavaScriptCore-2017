function processOddNumbers(arr) {
    newArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        newArr.push(arr[i] * 2);
    }

    let resultNew = newArr.sort((a, b) => b-a);
	
    console.log(resultNew.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
