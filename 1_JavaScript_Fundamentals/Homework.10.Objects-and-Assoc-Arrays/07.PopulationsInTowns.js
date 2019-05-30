function populationsInTowns(input) {
    for (let row of input) {
        let townTokens = row.split('<->')
            .filter(e => e !== '')
            .map(e => e.trim());
        let Town = townTokens[0];
        let  Population = Number(townTokens[1]);
        console.log('%s : %i', Town, Population)
    }
}

populationsInTowns([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 101000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'
]);