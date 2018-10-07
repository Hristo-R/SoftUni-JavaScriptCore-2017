function cookingByNumbers(input) {
    let num = Number(input[0]);
    let operator = function (num, operation) {
        switch (operation) {
            case 'chop' :
                num /= 2;
                break;
            case 'dice' :
                num = Math.sqrt(num, 2);
                break;
            case 'spice' :
                num += 1;
                break;
            case 'bake' :
                num *= 3;
                break;
            case 'fillet' :
                num -= num * 20 / 100;
                break;
            default :
                break;
        }

        return num;
    }

    for (let i = 1; i <= 5; i++) {
        num = operator(num, input[i]);
        console.log(num);
    }
}

cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);