function movePrice(input) {
    let moveTitle = input[0].toLowerCase();
    let dayOfWeek = input[1].toLowerCase();
    let price = 0;

    if (moveTitle == "the godfather") {
        switch(dayOfWeek) {
            case 'monday':
                console.log(12);
                break;
            case 'tuesday':
                console.log(10);
                break;
            case 'wednesday':
                console.log(15);
                break;
            case 'thursday':
                console.log(12.50);
                break;
            case 'friday':
                console.log(15);
                break;
            case 'saturday':
                console.log(25);
                break;
            case 'sunday':
                console.log(30);
                break;
            default:
                console.log('error')
        }
    } else if (moveTitle == "schindler's list") {
        switch(dayOfWeek) {
            case 'monday':
                console.log(8.50);
                break;
            case 'tuesday':
                console.log(8.50);
                break;
            case 'wednesday':
                console.log(8.50);
                break;
            case 'thursday':
                console.log(8.50);
                break;
            case 'friday':
                console.log(8.50);
                break;
            case 'saturday':
                console.log(15);
                break;
            case 'sunday':
                console.log(15);
                break;
            default:
                console.log('error')
        }
    } else if (moveTitle == "casablanca") {
            switch(dayOfWeek) {
                case 'monday':
                    console.log(8);
                    break;
                case 'tuesday':
                    console.log(8);
                    break;
                case 'wednesday':
                    console.log(8);
                    break;
                case 'thursday':
                    console.log(8);
                    break;
                case 'friday':
                    console.log(8);
                    break;
                case 'saturday':
                    console.log(10);
                    break;
                case 'sunday':
                    console.log(10);
                    break;
                default:
                    console.log('error')
            }
    } else if (moveTitle == "the wizard of oz") {
                switch(dayOfWeek) {
                    case 'monday':
                        console.log(10);
                        break;
                    case 'tuesday':
                        console.log(10);
                        break;
                    case 'wednesday':
                        console.log(10);
                        break;
                    case 'thursday':
                        console.log(10);
                        break;
                    case 'friday':
                        console.log(10);
                        break;
                    case 'saturday':
                        console.log(15);
                        break;
                    case 'sunday':
                        console.log(10);
                        break;
                    default:
                        console.log('error')
                }
    } else {
        console.log('error')
    }
}

movePrice(['The Godfather', 'monday']);