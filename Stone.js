class Stone {
    constructor(x, y, radius, options) {
       //var options ={isStatic: false, restitution: 0.4, density: 1.0, friction: 10.0};
       this.body = Bodies.circle(x, y, radius, options);
       this.image = loadImage("GameSprites/stone.png");
       World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.body.circleRadius*2 + 5, this.body.circleRadius*2 + 5);
        pop();
    }
}