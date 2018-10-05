/**
 * Created by Hristo on 31-May-17.
 */
function wordsUppercase(input) {
    let str = input.toUpperCase();
    //let separators = [', ', '! ', '\\\? '];
    //console.log(separators.join('|'));
    //let tokens = str.split(new RegExp(separators.join(', '), 'g'));
    // let tokens = str.split(/[^a-zA-Z]+/);
    let tokens = str.split(/\W+/).filter(v => v).join(', ');
    console.log(tokens);
}

wordsUppercase('Hi, how are you?');