function addAndRemoveElementsFromArray(input) {
    let result = [];
    let initialNumber = 0;
    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        initialNumber++;
        switch (command) {
            case 'add' :
                result.push(initialNumber);
                break;
            case 'remove' :
                result.pop();
                break;
        }
    }

    if (result.length == 0) {
        console.log('Empty')
    } else {
        for (let obj of result) {
            console.log(obj);
        }
    }
}

addAndRemoveElementsFromArray([
    'remove',
    'remove',
    'remove'
]);