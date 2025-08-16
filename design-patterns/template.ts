abstract class DataProcessor {
  process() {
    this.loadData();
    this.transformData();
    this.saveData();
  }

  protected abstract loadData(): void;
  protected abstract transformData(): void;
  protected abstract saveData(): void;
}

class CSVProcessor extends DataProcessor {
  protected loadData(): void {
    console.log("load");
  }

  protected saveData(): void {
    console.log("save");
  }

  protected transformData(): void {
    console.log("transform");
  }
}

const csv = new CSVProcessor();
csv.process();
