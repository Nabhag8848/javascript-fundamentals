class RoundHole {
    constructor(private readonly radius: number) {}

    public fits(peg: RoundPeg) {
        return this.radius >= peg.getRadius();
    }
}

class RoundPeg {
    private radius: number; 
    
    constructor(radius?: number) {
        this.radius = radius ?? 0;
    }
    
    public getRadius(): number {
        return this.radius;
    }
}

class SquarePeg {
    private width: number;

    constructor(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }
}

class SquarePegAdapter extends RoundPeg {

    constructor(private readonly peg: SquarePeg) {
        super()
    }

    public getRadius(): number {
        return this.peg.getWidth() * Math.sqrt(2) / 2;
    }

}

const hole = new RoundHole(5);
const rpeg = new RoundPeg(5);

console.log(hole.fits(rpeg));

const speg = new SquarePeg(5);
const speg_adapter = new SquarePegAdapter(speg);
console.log(hole.fits(speg_adapter))