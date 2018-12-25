function restaurantBill(input) {
    let products = [];
    let total = 0;
    for (var i = 0; i < input.length - 1; i += 2) {
        products.push(input[i]);
        total += Number(input[i + 1]);
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${total}`)
}

restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);