interface Command {
  execute(): void;
  undo(): void;
}

class Light {
  turnOn() {
    console.log("Light on");
  }
  turnOff() {
    console.log("Light off");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}
  execute() {
    this.light.turnOn();
  }
  undo() {
    this.light.turnOff();
  }
}

class RemoteControl {
  private commands: Command[] = [];
  private lastCommand: Command | null = null;

  setCommand(command: Command) {
    this.commands.push(command);
  }

  pressButton() {
    if (this.commands.length > 0) {
      const command = this.commands[this.commands.length - 1];
      command.execute();
      this.lastCommand = command;
    }
  }

  pressUndo() {
    if (this.lastCommand) {
      this.lastCommand.undo();
      this.lastCommand = null;
    }
  }
}
