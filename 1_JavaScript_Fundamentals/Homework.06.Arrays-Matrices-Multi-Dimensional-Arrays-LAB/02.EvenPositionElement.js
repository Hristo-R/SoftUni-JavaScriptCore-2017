function evenPositionElement(input) {
    let result = [];
    for (let i = 0; i <= input.length; i += 2) {
        result.push(input[i]);
    }

    return result.join(" ");
}

let res = evenPositionElement(['20', '30', '40']);
console.log(res);