// file & folder
// boxes & products 


abstract class FileSystemItem {
    protected name: string;
    abstract getSize(): number;
}

class CustomFile extends FileSystemItem {
    private size: number;

    constructor(name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    public getSize(): number {
        return this.size;
    }
}

class CustomFolder extends FileSystemItem {
    private children: FileSystemItem[] = [];

    constructor(name: string) {
        super();
        this.name = name;
    }

    public add(item: FileSystemItem) {
        this.children.push(item)
    }
    
    public getSize(): number {
        let sum = 0;

        this.children.forEach((child) => {
            sum = sum + child.getSize();
        });

        return sum;
    }
}

const src = new CustomFolder("src");
const file = new CustomFile("file.txt", 2);
const opensource = new CustomFolder("opensource");
const image = new CustomFile("image.png", 5);

src.add(opensource)
opensource.add(file)
opensource.add(image)

console.log(JSON.stringify(src))