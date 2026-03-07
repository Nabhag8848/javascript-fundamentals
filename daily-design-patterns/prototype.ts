abstract class Shape {
    public x: number | null;
    public y: number | null;
    public color: 'red' | 'blue'  |'transparent';

    constructor(source?: Shape) { 
        this.y = source?.y ?? null;
        this.x = source?.x ?? null
        this.color = source?.color ?? 'transparent'
     }

    abstract clone(): Shape;
}

class Rectangle extends Shape {
    private length: number | null;
    private breadth: number | null;

    constructor(source?: Rectangle) {
        super(source)
        this.length =  source?.length ?? null;
        this.breadth = source?.breadth ?? null;
    }

    public setLength(length: number) {
        this.length = length;
    }

    public setBreadth(breadth: number) {
        this.breadth = breadth;
    }

    public clone(): Rectangle {
        return new Rectangle(this)
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(source: Circle) {
        super(source);
        this.radius = source.radius
    }

    public setRadius(radius: number) {
        this.radius = radius;
    }

    public clone(): Circle {
        return new Circle(this)
    }
}

const rectangle = new Rectangle();
rectangle.setLength(2);
rectangle.setBreadth(4);
console.log({rectangle})
const anotherRectangle = rectangle.clone();
anotherRectangle.setLength(3);
console.log({anotherRectangle, rectangle})
const anotherAnotherRectangle = new Rectangle(anotherRectangle);
anotherAnotherRectangle.setLength(4);
console.log({anotherAnotherRectangle, rectangle, anotherRectangle})