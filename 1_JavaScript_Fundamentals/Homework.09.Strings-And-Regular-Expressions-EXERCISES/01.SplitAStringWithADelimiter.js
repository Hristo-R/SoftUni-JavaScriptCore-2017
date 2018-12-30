function splitAStringWithADelimiter(text,  delimiter) {
    let result = text.split(delimiter);
    for (let element of result) {
        console.log(element)
    }
}

splitAStringWithADelimiter("http://platform.softuni.bg", ".");
