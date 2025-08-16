interface Observer {
  id: string;
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  unsubscribe(id: string) {
    this.observers.filter((obs) => {
      return obs.id !== id;
    });
  }

  notify(data: any) {
    return this.observers.forEach((obs) => obs.update(data));
  }
}
