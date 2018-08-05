function oddEven(num) {
    if (num != Math.round(num)){
        console.log('invalid')
    } else if (num % 2 != 0) {
        console.log('odd')
    } else {
        console.log('even')
    }
}

oddEven(5);