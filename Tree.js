class Tree extends Base {
    constructor(x, y, width, height) {
        super(x, y, width, height, 0, {isStatic: true});
        this.image = loadImage("GameSprites/tree.png");
        
    }
}