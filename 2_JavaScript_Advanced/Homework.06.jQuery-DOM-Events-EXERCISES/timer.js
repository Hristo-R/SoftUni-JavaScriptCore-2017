function timer() {
    let ticking = false;
    let [s, m, h] = [0, 0, 0];
    let timeKeeper;
    $('#start-timer').click(startTimer);
    $('#stop-timer').click(stopTimer);
    function startTimer() {
        if (!ticking) {
            timeKeeper = window.setInterval(incrementTime, 1000);
            ticking = true;
        }
    }
    function stopTimer() {
        clearInterval(timeKeeper);
        ticking = false;
    }
    function incrementTime() {
        let timer = $('#timer');
        s++;
        s %= 60;
        timer.find('#seconds').text(s < 10 ? '0' + s : s);
        if (s == 0) {
            m++;
            m %= 60;
            timer.find('#minutes').text(m < 10 ? '0' + m : m);
            if (m == 0) {
                h++;
                h %= 100;
                timer.find('#hours').text(h < 10 ? '0' + h : h);
            }
        }
    }
}