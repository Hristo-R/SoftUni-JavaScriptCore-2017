function calcAreaAndPerimeter(sideA, sideB) {
    let area = Math.round(sideA * sideB * 100) / 100;
    let perimeter = Math.round((2 * sideA + 2 * sideB) * 100) / 100;
    console.log(area);
    console.log(perimeter)
}

calcAreaAndPerimeter(2.5,3.14);