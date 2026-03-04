// Dialog -> Button for both (Web and Mobile) onClick feature which will close the dialog

abstract class Dialog {
   abstract close(): void;
}
abstract class Button {
    abstract onClick(): void;
}

class WebDialog extends Dialog {
    public close(): void {}
}

class MobileDialog extends Dialog {
    public close(): void {}
}


class WebButton extends Button {
    constructor() {
      super();
    }
    public onClick(): void {
      console.log('onClick')
    }
}

class MobileButton extends Button {
    constructor() {
        super();
    }
    public onClick(): void {
      console.log('onClick')
    }
}

abstract class UIFactory {
    abstract createDialog(): Dialog;
    abstract createButton(): Button;
}

class WebUIFactory extends UIFactory {
    createDialog(): Dialog {
      return new WebDialog();
    }
    createButton(): Button {
      return new WebButton();
    }
  }
  
class MobileUIFactory extends UIFactory {
  createDialog(): Dialog {
    return new MobileDialog();
  }
  createButton(): Button {
    return new MobileButton();
  }
}

((ui: UIFactory) => {
    const dialog = ui.createDialog()
    const button = ui.createButton()
    button.onClick()
})(new WebUIFactory())