function assignProperties(input) {
    let composeObject = {};
    composeObject[input[0]] = input[1];
    composeObject[input[2]] = input[3];
    composeObject[input[4]] = input[5];

    console.log(composeObject);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);