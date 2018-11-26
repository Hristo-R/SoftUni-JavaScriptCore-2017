function concatenateReversed(str) {
    let newStr = '';
    for (let obj of str) {
        newStr += obj;
    }

    let result = newStr.split('').reverse().join('')
    console.log(result);
}

concatenateReversed(['I', 'am', 'student']);