function convertGradsToDegrees(n) {
    let grades = Number(n) % 400;
    if (grades < 0){
        grades += 400;
    }
    let degree = grades * 0.9;
    console.log(degree);
}

convertGradsToDegrees(1000);