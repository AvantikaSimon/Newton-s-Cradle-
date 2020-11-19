class Bob {
    constructor(x, y, radius) {
  var options = {
    restitution: 1,
    friction:0.5,
    density:1.2,
    isStatic:true
}
this.body = Bodies.circle(x, y, radius, options);
this.body.radius = 15;

if(keyDown("LEFT_ARROW")) {
  Matter.Body.setVelocityY(this.body, this.body.position, {x:601, y:201});
}

World.add(world, this.body);

}
display(){
fill("orangered");
ellipseMode(RADIUS);
ellipse(this.body.position.x, this.body.position.y, this.radius);
//this.body.display();
  }
}     