class Base {
    constructor(x, y, width, height, angle, options) {
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       Body.rotate(this.body, angle);
       this.image = loadImage("GameSprites/tree.png")

       
       
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}