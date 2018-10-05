function functionalCalculator(a, b, operator) {
	
    let sum = function (a, b) {
        return a + b;
    }

    let subtraction = function (a, b) {
        return a - b;
    }

    let multiplication = function (a, b) {
        return a * b;
    }

    let division = function (a, b) {
		notZero(b)
        return a / b;
    }
	
	function notZero(n) {
		n = + n;
		if (!n) {
			throw new Error('Invalid dividend ' + n);
		}
		
		return n;
	}

    switch (operator) {
        case '+' : console.log(sum(a, b));
            break;
        case '-' : console.log(subtraction(a, b));
            break;
        case '*' : console.log(multiplication(a, b));
            break;
        case '/' : console.log(division(a, b));
            break;
    }
}

functionalCalculator(2, 4, '+');