function filterByAge(min, firstPersonName, firstAgeStr, secondPersonName, secondAgeStr) {
    let minAge = Number(min);
    let firstAge = Number(firstAgeStr);
    let secondAge = Number(secondAgeStr);
    let firstPerson = {
        name: firstPersonName, 
        age: firstAge
    };
    let secondPerson = {name: secondPersonName, age: secondAge};

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }

    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);
