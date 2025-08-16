interface PaymentStrategy {
  pay(amount: number): void;
}

class CreditCard implements PaymentStrategy {
  pay(amount: number) {}
}

class UPI implements PaymentStrategy {
  pay(amount: number) {}
}

class PaymentProcessor {
  private strategy: PaymentStrategy;

  setStrategy(strategy: PaymentStrategy) {
    return this;
  }

  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}

const processor = new PaymentProcessor();
const creditcard = new CreditCard();
processor.setStrategy(creditcard);
