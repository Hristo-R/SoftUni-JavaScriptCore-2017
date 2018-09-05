function calcDistanceBetweenTwoPoints(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let z1 = Number(input[2]);
    let x2 = Number(input[3]);
    let y2 = Number(input[4]);
    let z2 = Number(input[5]);
    let distance = Math.sqrt((
        (x2 - x1) * (x2 - x1) +
        (y2 - y1) * (y2 - y1) +
        (z2 - z1) * (z2 - z1)), 2)
    console.log(distance);
}

calcDistanceBetweenTwoPoints([3.5, 0, 1, 0, 2, -1]);