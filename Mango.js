class Mango extends Stone {
    constructor(x, y, radius) {
        super(x, y, radius, {isStatic: false, frictionAir: 0.00005, restitution: 0.3, density: 10.0, friction: 10000000000000000000.0});
        World.remove(world, this.body);
        this.image = loadImage("GameSprites/mango.png")
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.body.circleRadius * 2, this.body.circleRadius * 2);
        pop();
    }
}