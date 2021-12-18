class Obstacle {
    constructor(posX,posY) {
     
      this.ry = posY; //setting the x posing where obstacle will be created  
      this.rx = posX;   //setting y position where obstacle will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("obstacle",meteorAnimation);
      this.spt.scale=0.5;
      this.spt.velocityX=-2;
      this.spt.velocityY=3;
    }
  
}
  

