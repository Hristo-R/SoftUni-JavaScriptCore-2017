class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
	
    calcPerimeter() {
        return 2 * (this.width + this.height);
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect);

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);

let area = rect.calcArea();
console.log(area);

let perimeter = rect.calcPerimeter();
console.log(perimeter);
