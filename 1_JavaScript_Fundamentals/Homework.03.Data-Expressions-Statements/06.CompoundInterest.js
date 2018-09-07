function calcTotalAccumulated(input) {
    let p = Number(input[0]);
    let i = Number(input[1]);
    let n = Number(input[2]);
    let t = Number(input[3]);
    let total = p * Math.pow(1 + i/(100*( 12/n)), 12/n * t);

    console.log(total.toFixed(2));
}

calcTotalAccumulated([1500, 4.3, 3, 6]);