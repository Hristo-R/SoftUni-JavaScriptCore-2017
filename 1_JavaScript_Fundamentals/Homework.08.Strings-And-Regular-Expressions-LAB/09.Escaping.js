function escaping(items) {
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

    return "<ul>\n" +
        items.map(htmlEscape).map(item => `  <li>${item}</li>`).join("\n") + "\n</ul>\n";

}

console.log(escaping(['<b>unescaped text</b>', 'normal text']));