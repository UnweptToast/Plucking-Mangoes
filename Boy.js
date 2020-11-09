class Boy extends Base{
    constructor(x, y, width, height) {
        super(x, y, width, height, -0.3, {isStatic: true});
        this.image = loadImage("GameSprites/boy.png");
        World.remove(world, this.body);
    }
}