function checkIfStringStartsWithAGivenSubstring(mainString, substring) {
    for (let i = 0; i < substring.length; i++) {
        if (substring[i] != mainString[i]){
            return false;
            break;
        };
    }

    return true;
}

console.log(checkIfStringStartsWithAGivenSubstring("How have you been?", "how"));