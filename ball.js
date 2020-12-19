class Ball{
    constructor(x, y, diameter) {
        var options = {
            'density':1.0,
            'frictionAir': 0.05
        }
        this.body = Bodies.circle(x, y,diameter, options);
        this.diameter = diameter*2;
        
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("red")
        ellipse( 0, 0, this.diameter, this.diameter);
        pop();
      }
}