abstract class DataSource<T> {
    abstract readData(): T
    abstract writeData(data : T): void;
}

class FileDataSource implements DataSource<string> {
    private data: string[] = [];

    constructor(private readonly filename: string) {}

     public readData(): string {
        console.log("actual read")
        return this.data.join(" ");
     }
     writeData(data: string): void {
        console.log("actual write")
        this.data.push(data)
     }
}

class DataSourceDecorator<T> implements DataSource<T> {
    wrappee: DataSource<T>;

    constructor(wrapeee: DataSource<T>) {
        this.wrappee = wrapeee;
    }

    public readData(): T {
        return this.wrappee.readData()
    }

    public writeData(data: T): void {
        this.wrappee.writeData(data)
    }
    
}


class EncryptionDecorator<T> extends DataSourceDecorator<T> {
    public readData(): T {
        const data = super.readData()
        console.log("decryption")
        // decrepts data
        return data;

    }

    public writeData(data: T): void {
        // encrypts
        console.log("encryption")
        super.writeData(data)
    }
}


class CompressionDecorator<T> extends DataSourceDecorator<T> {
    public readData(): T {
        const data = super.readData()
        console.log("decompress")
        // decompress data
        return data;

    }

    public writeData(data: T): void {
        // compress
        console.log("compress")
        super.writeData(data)
    }
}


let datasource: DataSource<string> = new FileDataSource("file.txt");
datasource = new CompressionDecorator<string>(datasource)
datasource = new EncryptionDecorator<string>(datasource)

datasource.writeData("nabhag")
console.debug(datasource.readData())