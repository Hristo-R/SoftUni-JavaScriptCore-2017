function templateFormat(input) {
    let question = '';
    let answer = '';
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';
    for (let i = 0; i < input.length; i += 2) {
        question = input[i];
        answer = input[i + 1];
        xml += returnXML(question, answer);
    }
    xml += '</quiz>\n';

    console.log(xml);

    function returnXML(question, answer) {
        let text = `  <question>\n    ${question}\n  </question>\n  <answer>\n`;
        text += `    ${answer}\n  </answer>\n`;
        return text;
    }
}

templateFormat([
    "Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);