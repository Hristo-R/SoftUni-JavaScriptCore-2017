function getDollarFormatter() {
    let value = Number($('#monetaryValue').val());
    let result = Math.trunc(value) + ',';
    result += value.toFixed(2).substr(-2,2);
    let currency = '$' + ' ' + result;
    $("#result").text(currency);
}

function getEuroFormatter() {
    let value = Number($('#monetaryValue').val());
    let result = Math.trunc(value) + ',';
    result += value.toFixed(2).substr(-2,2);
    let currency = result + ' ' + '€';
    $("#result").text(currency);
}