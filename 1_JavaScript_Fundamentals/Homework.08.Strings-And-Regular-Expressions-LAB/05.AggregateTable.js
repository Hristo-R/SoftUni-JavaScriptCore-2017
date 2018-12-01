function aggregateTable(input) {
    let towns = [];
    let sum = 0;
    for (let element of input) {
        let arr = element.split('|').filter(x => x != '');
        towns.push(arr[0].trim());
        sum += Number(arr[1]);
    }

    console.log(towns.join(', '));
    console.log(sum)
}

aggregateTable([
    '| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);