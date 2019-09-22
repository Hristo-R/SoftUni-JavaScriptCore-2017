function formatCurrency(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function getDollarFormatter(formater) {
    return function (value){
        return formater(',', '$', true, value)
    }
}

function getEuroFormatter(formater) {
    return function (value){
        return formater(',', '€', false, value)
    }
}

let dollars = getDollarFormatter(formatCurrency);
console.log((dollars(5354)));

let euros = getEuroFormatter(formatCurrency);
console.log((euros(5354)));