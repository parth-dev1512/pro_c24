class Paper {
    constructor(x,y,r) {
      var options = {
         restituion:0.5,
         density:1,
         friction:0.5,
      }
      this.body = Bodies.circle(x,y,r,options);
       this.r = r;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      circle(pos.x, pos.y,this.r*2);
    }
  };