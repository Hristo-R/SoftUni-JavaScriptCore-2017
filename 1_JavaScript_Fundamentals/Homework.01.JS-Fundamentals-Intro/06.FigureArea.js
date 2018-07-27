function figureArea(firstH, firstW, secondH, secondW) {
    let first = Number(firstH) * Number(firstW);
    let second = Number(secondH) * Number(secondW);
    let sectionH = Math.min(firstH, secondH);
    let sectionW = Math.min(firstW, secondW);
    let section = sectionH * sectionW;
    let result = first + second - section;

    return result;
}

console.log(figureArea(13, 2, 5, 8));