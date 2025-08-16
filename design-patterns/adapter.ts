// Legacy interface
class OldPaymentSystem {
  makePayment(amount: string): void {}
}

interface PaymentGateway {
  processPayment(amount: number): boolean;
}

// Adapter
class PaymentAdapter implements PaymentGateway {
  constructor(private oldSystem: OldPaymentSystem) {}

  processPayment(amount: number): boolean {
    this.oldSystem.makePayment(amount.toString());
    return true;
  }
}

const old = new OldPaymentSystem();
const adapter = new PaymentAdapter(old);
adapter.processPayment(10);
