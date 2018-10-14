function tripLength(input) {
    let [x1, y1, x2, y2, x3, y3] = input.map(Number);

    function distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }

    let distance123 = distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3);
    let distance132 = distance(x1, y1, x3, y3) + distance(x3, y3, x2, y2);
    let distance213 = distance(x2, y2, x1, y1) + distance(x1, y1, x3, y3);

    let shortestDistance = Math.min(distance123, distance132, distance213);

    if(shortestDistance == distance123) {
        console.log(`1->2->3: ${shortestDistance}`);
        return;
    }

    if(shortestDistance == distance132) {
        console.log(`1->3->2: ${shortestDistance}`);
        return;
    }

    if(shortestDistance == distance213) {
        console.log(`2->1->3: ${shortestDistance}`);
        return;
    }
}

tripLength([5, 1, 1, 1, 5, 4]);