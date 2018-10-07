function roadRadar(input) {
    let speed = Number(input[0]);
    let road = input[1];
    let limit;
    switch (road) {
        case 'motorway' : limit = 130;
            break;
        case 'interstate' : limit = 90;
            break;
        case 'city' : limit = 50;
            break;
        case 'residential' : limit = 20;
            break;
        default : console.log('Invalid input!');
            break;
    }

    checkSpeed(speed, limit);

    function checkSpeed(speed, limit) {
        let difference = speed - limit;
        if (difference > 0 && difference <= 20) {
            console.log('speeding');
        } else if (difference > 20 && difference <= 40) {
            console.log('excessive speeding');
        } else if (difference > 40) {
            console.log('reckless driving');
        }
    }
}

roadRadar([200, 'motorway']);