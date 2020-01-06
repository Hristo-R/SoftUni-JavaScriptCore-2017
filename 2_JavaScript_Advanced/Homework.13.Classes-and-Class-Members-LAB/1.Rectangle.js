class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 4, 'red');
console.log(rect);

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);

let area = rect.calcArea();
console.log(area);