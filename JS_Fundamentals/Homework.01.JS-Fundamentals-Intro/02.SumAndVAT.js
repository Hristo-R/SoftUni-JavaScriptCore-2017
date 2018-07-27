function sumVat(input) {
    let sum = 0;
    for (let num of input){
        sum += num;
    }
    let vat = sum * 0.20;
    let total = sum * 1.2;
    console.log(`sum = ${sum}`);
    console.log(`Vat = ${vat}`);
    console.log(`total = ${total}`);
}

sumVat([1.20, 2.60, 3.50])