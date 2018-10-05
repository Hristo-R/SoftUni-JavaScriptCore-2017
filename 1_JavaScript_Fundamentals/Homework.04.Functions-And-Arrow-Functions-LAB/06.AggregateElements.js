function aggregateElements(input) {
    let sumAllElements = 0;
    let sumOfTheInverseValues = 0;
    let concatenates = '';

    for (let element of input) {
        sumAllElements += element;
        sumOfTheInverseValues += 1 / element;
        concatenates += element.toString();
    }

    console.log(sumAllElements);
    console.log(sumOfTheInverseValues);
    console.log(concatenates);
}

aggregateElements([1, 2, 3]);