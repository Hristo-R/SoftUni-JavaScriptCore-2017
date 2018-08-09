function createChessBoard(n) {
    let html = '<div class="chessboard">\n';
    let color = 'black';
    for (let j = 0; j < n; j++) {
        html += '\t<div>\n';
        color = (j % 2 != 0) ? 'white' : 'black';
        for (let i = 0; i < n; i++) {
            html += `\t\t<span class="${color}"></span>\n`;
            color = (color == 'black') ? 'white' : 'black';
        }
        html += '\t</div>\n';
    }
    html += '</div>';
    return html;
}