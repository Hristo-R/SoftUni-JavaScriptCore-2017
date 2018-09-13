function lastDay(input) {
    let day = input[0];
    let month = input[1];
    let year = input[2];
    let date = new Date(year, month-1, 0);
    let days = date.getDate();
    console.log(days);
}

lastDay([17, 3, 2002]);