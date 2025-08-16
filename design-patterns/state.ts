interface State {
  handle(context: Context): void;
}

class Context {
  private state!: State;

  constructor() {
    this.state = new AState();
  }

  setState(state: State) {
    this.state = state;
  }

  change(): void {
    this.state.handle(this);
  }

  getState(): State {
    return this.state;
  }
}

class AState implements State {
  handle(context: Context): void {
    context.setState(new BState());
  }
}

class BState implements State {
  handle(context: Context): void {
    context.setState(new AState());
  }
}

const context = new Context();
console.log(context.getState());
context.change();
console.log(context.getState());
context.change();
console.log(context.getState());

interface LightState {
  handle(light: TrafficLight): void;
  getColor(): string;
}

class TrafficLight {
  private light!: LightState;

  constructor() {
    this.light = new Red();
  }

  setState(light: LightState) {
    this.light = light;
  }

  change(): void {
    this.light.handle(this);
  }
}

class Red implements LightState {
  handle(light: TrafficLight) {
    light.setState(new Green());
  }

  getColor(): string {
    return "RED";
  }
}

class Green implements LightState {
  handle(light: TrafficLight) {
    light.setState(new Yellow());
  }

  getColor(): string {
    return "GREEN";
  }
}

class Yellow implements LightState {
  handle(light: TrafficLight) {
    light.setState(new Red());
  }

  getColor(): string {
    return "YELLOW";
  }
}

const light = new TrafficLight();
console.log(light);
light.change();
console.log(light);
light.change();
console.log(light);
light.change();
console.log(light);
