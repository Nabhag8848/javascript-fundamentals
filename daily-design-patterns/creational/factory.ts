abstract class Product {
    abstract price(): number;
}

class Table extends Product {
    public price(): number {
        return 100;
    }
}

class Chair extends Product {
    public price(): number {
        return 1000;
    }
}

class ProductFactory {
    create(type: 'chair' | 'table'): Product {
        switch(type) {
            case 'chair': {
                return new Chair()
            }
            case 'table': {
                return new Table()
            }
        }
    }
}

const factory = new ProductFactory();
const chair = factory.create('chair');
console.log(chair.price())