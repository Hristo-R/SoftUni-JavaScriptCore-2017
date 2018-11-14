function rotateArray(input) {
    let amount = Number(input.pop());
    amount %= input.length;
    for (let i = 0; i < amount ; i++) {
        input.unshift(input[input.length - 1]);
        input.pop();
    }

    console.log(input.join(' '));
}


rotateArray([
    'Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15'
]);