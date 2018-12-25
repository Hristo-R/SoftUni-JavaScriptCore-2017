function censorship(string, arrayOfStrings) {
    for (let str of arrayOfStrings) {
        let index = string.indexOf(str);
        while (index > -1) {
            string = string.replace(str, "-".repeat(str.length));
            index = string.indexOf(str, index + 1)
        }
    }

    return string;
}

console.log(censorship(
    'roses are red, violets are blue, "red hot chili peppers"',
    [', violets are', 'red']));