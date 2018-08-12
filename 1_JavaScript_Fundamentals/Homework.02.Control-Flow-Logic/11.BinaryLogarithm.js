function binaryLogarithm(input) {
    for (i = 0; i < input.length; i++) {
        let x = Number(input[i]);
        console.log(Math.log2(x))
    }
}

binaryLogarithm(['1', '2', '3', '4']);