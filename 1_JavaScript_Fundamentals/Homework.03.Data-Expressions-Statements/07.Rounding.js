function roundsNumbers(input) {
    let n = Number(input[0]);
    let precision = Number(input[1]);
    if (precision > 15){
        precision = 15
    }
    let result = Math.round(n * (Math.pow(10, precision))) / Math.pow(10, precision);
    console.log(result);
}

roundsNumbers([10.5555, 12])