// it lets you seperate extrinsic state outside of main class so you save the ram, intrinsic state is always inside. \

class Tree {
    private x: number;
    private y: number;
    private type: TreeType;

    constructor(x: number, y: number, type: TreeType) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

class TreeType {
    color: string;
    texture: string;
    name: string;

    constructor(color: string, texture: string, name: string) {
        this.color = color;
        this.texture = texture;
        this.name = name;
    }
}

class TreeFactory {
    private static treeTypes: TreeType[] = [];

    public static get(name: string, color: string, texture: string) {

        let type = TreeFactory.treeTypes.find((x) => (x.color === color && name === x.name && texture === x.texture));
        if(!type){
            type = new TreeType(color, texture, name);
            TreeFactory.treeTypes.push(type)
        }

        return type;
    }
}

class Forest {
    private trees: Tree[] = [];

    public plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const type = TreeFactory.get(name, color ,texture);
        const tree = new Tree(x, y, type);
        this.trees.push(tree)
    }
}