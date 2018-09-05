function calcDistance(input) {
    let v1 = Number(input[0]) * 1000 / 3600;
    let v2 = Number(input[1]) * 1000 / 3600;
    let time = Number(input[2]);
    let distance = Math.abs((v1 * time) - (v2 * time));
    console.log(distance);
}

calcDistance([11, 10, 120]);