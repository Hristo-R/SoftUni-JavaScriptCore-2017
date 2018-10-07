function validityChecker(input) {
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let isValidDistance = function (x1, y1, x2, y2) {
        let isValid = false;
        let dist = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        let statement = Math.sqrt(dist, 2);
        if ((statement  % 1) == 0) {
            isValid = true;
        }
        return isValid;
    };

    if (isValidDistance(x1, y1, 0, 0) == true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (isValidDistance(x2, y2, 0, 0) == true) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (isValidDistance(x1, y1, x2, y2) == true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    for (let i = 0; i < 3; i++) {

    }
}

validityChecker([3, 0, 0, 4]);