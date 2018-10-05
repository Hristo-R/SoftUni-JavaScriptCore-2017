function rectangleOfStars(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*' + ' *'.repeat(n-1));
    }
}

rectangleOfStars(5);
