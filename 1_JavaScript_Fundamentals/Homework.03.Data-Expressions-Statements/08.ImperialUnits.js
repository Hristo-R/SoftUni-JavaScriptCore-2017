function convertsInchesToFeet(input) {
    let n = Number(input);
    let foot = Math.floor(n / 12);
    let inch = n % 12;
    console.log(`${foot}'-${inch}"`);
}

convertsInchesToFeet(11);