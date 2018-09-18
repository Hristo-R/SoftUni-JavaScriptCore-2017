function drawTriengle(n) {
    let line = '';
    for (i = 0; i <= n; i++) {
        line = '';
        for (j = 0; j < i; j++) {
            line = line + '$';
        };
        console.log(line);
    }
}

drawTriengle(10);
