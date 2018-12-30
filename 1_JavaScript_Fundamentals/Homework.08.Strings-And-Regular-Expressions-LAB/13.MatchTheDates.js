function matchTheDates(input) {
    let pattern = /(\b\d{1,2})-(\w{3})-(\d{4}\b)/g;
    input.forEach(function(text) {
        let match = pattern.exec(text);
        if (match != null) {
            console.log(match[0] + ' (Day: ' + match[1] + ', Month: ' + match[2] + ', Year: ' + match[3] + ')');
        }
    });
}

matchTheDates(
    ['1-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.']
);