interface Coffee {
  getPrice(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  getDescription(): string {
    return "Coffee";
  }

  getPrice(): number {
    return 2;
  }
}

abstract class CoffeeDecorator implements SimpleCoffee {
  constructor(protected coffee: Coffee) {}
  getDescription(): string {
    return this.coffee.getDescription();
  }

  getPrice(): number {
    return this.coffee.getPrice();
  }
}

class MilkDecorator extends CoffeeDecorator {
  getPrice() {
    return this.coffee.getPrice() + 0.5;
  }
  getDescription() {
    return this.coffee.getDescription() + " + Milk";
  }
}

const coffee = new SimpleCoffee();
console.log(coffee.getPrice());
const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.getPrice());
