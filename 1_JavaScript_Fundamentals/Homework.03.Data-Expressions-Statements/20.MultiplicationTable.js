function multiplicationTable(n) {
    let tr = 1;
    let html = `<table border="1">\n`;
    html += `<tr><th>x</th>`;
    for (i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += `</tr>\n`;

    for (row = 1; row <= n; row++) {
        html += `<tr><th>${row}</th>`;
        for (col = 1; col <= n; col++) {
            html += `<td>${row * col}</td>`;
        }
        html += `</tr>\n`;
    }
    html += `</table>`;

    return html;
}