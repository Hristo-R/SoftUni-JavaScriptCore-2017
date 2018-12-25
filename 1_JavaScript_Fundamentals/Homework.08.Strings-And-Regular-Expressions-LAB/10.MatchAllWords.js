function matchAllWords(text) {
    let result = text.split(/\W+/g).filter(x => x != '');

    console.log(result.join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');