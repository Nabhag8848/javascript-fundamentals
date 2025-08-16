interface Factory {
  sell(): void;
}

class Chocolate implements Factory {
  sell(): void {
    console.log("chocolate");
  }
}

class Oil implements Factory {
  sell(): void {
    console.log("oil");
  }
}

class ProductFactory {
  static create(type: string): Factory {
    switch (type) {
      case "chocolate": {
        return new Chocolate();
      }
      case "oil": {
        return new Oil();
      }

      default: {
        throw new Error("No Factory");
      }
    }
  }
}

const chocolate = ProductFactory.create("chocolate");
chocolate.sell();
