class Launcher {
  constructor(body, pointB) {
   var options = {
       bodyA: body,
       pointB: pointB,
       stiffness: 0.004,
       length: 10
   }
   this.constraint = Matter.Constraint.create(options)
   World.add(world, this.constraint)
   this.pointB = pointB;
  }
  display(){
      if(this.constraint.bodyA){
      line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y, this.pointB.x, this.pointB.y)
  } 
}
 fly(){
     this.constraint.bodyA = null;
 }
 attach(stone){
     this.constraint.bodyA = stone
 }
}