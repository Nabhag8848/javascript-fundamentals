interface Image {
    display(): void;
}

class RealImage implements Image {
    constructor(private readonly filename: string) {
        this.loadDisk()
    }

    private loadDisk() {}

    public display(): void {
        console.log('load disk')
    }
}


class ProxyImage implements Image {
    private image: RealImage | null = null;
    private filename: string;

    constructor(filename: string){
        this.filename = filename;
    }

    display(): void {
        if(!this.image) {
            this.image = new RealImage(this.filename)
        }

        this.image.display()
    }
}


const proxy = new ProxyImage('img.jpg');

proxy.display()
proxy.display() // used cached disk.