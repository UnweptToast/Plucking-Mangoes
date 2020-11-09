class Constraint {
    constructor(bodyA, pointB, stiffness, length) {
        var options ={bodyA: bodyA, pointB: pointB, stiffness: stiffness, length: length};
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    remove() {
        this.chain.bodyA = null;
    }
    display() {
        if(this.chain.bodyA) {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.pointB;
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }
}