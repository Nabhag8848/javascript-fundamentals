type CarVariant = 'sports' | 'suv';

class Car {
    seats: number;
    variant: CarVariant;
}

class CarManual {
    seats: number;
    variant: CarVariant;
}

type T = Car | CarManual;

abstract class Builder {
    abstract  reset(): void;
    abstract setSeats(seats: number): this;
    abstract setVariant(variant: CarVariant): Builder
    // setEngine(): Builder
    abstract build(): T
}

class CarBuilder implements Builder {
    private car: Car;

    constructor() {
        this.car = new Car()
    }

    public build(): Car {
        const car = this.car;
        this.reset();
        return car;
    }

    public reset(): void {
        this.car = new Car();
    }

    public setSeats(seats: number) {
        this.car.seats = seats;
        return this;
    }

    public setVariant(variant: CarVariant): Builder {
        this.car.variant = variant;
        return this;
    }
}


class CarManualBuilder implements Builder {
    private manual: CarManual;

    constructor() {
        this.manual = new CarManual()
    }

    public build(): Car {
        const manual = this.manual;
        this.reset();
        return manual;
    }

    public reset(): void {
        this.manual = new CarManual();
    }

    public setSeats(seats: number) {
        this.manual.seats = seats;
        return this;
    }

    public setVariant(variant: CarVariant): Builder {
        this.manual.variant = variant;
        return this;
    }
}

class Director {
    public createSportsVariant(builder: Builder) {
        builder.setSeats(2).setVariant('sports')
    }

    public createSUVVariant(builder: Builder) {
        builder.setSeats(6).setVariant('suv')
    }
}


const director = new Director();
const carBuilder = new CarBuilder();
director.createSUVVariant(carBuilder);
const car = carBuilder.build();
console.log(car);

const manualBuilder = new CarManualBuilder()
director.createSUVVariant(manualBuilder);
const manual = manualBuilder.build();
console.log(manual)
