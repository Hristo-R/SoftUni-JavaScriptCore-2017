function negativePositiveNumbers(input) {
    let  newArray = [];
    for (let element of input) {
        if (element >= 0){
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }
    }

    console.log(newArray.join('\n'));
}

negativePositiveNumbers([3, -2, 0, -1])