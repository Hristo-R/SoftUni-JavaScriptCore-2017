function extractText(str) {
    let leftBracket = str.indexOf('(');
    let texts = [];

    while (leftBracket > -1) {
        let rightBracket = str.indexOf(')', leftBracket);
        if (rightBracket == -1)
            break;

        texts.push(str.substring(leftBracket + 1, rightBracket));
        leftBracket = str.indexOf('(', rightBracket);
    }

    console.log(texts.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');