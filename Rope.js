class Rope {
    constructor(bodyA, bodyB){
    var options = {
      bodyA:bodyA,
      bodyB:bodyB,
      stiffness:0.04,
      length:15
    }
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display() {
    var pointA = this.rope.bodyA.position
    var pointB = this.rope.bodyB.position.x
    var pointB2 = this.rope.body.position.y
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB, pointB2);
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }