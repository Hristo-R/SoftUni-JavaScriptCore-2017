function expressionSplit(text) {
    let result = text.split(/\(|\)|\,|\;|\.|\s|\\t/g).filter(x => x != '');

    result.forEach(function(element) {
        console.log(element);
    });
}

expressionSplit('let   sum = 4 * 4,b = "wow";');