class Spaceship {
    constructor(posX) {
     
      this.rx = posX; //setting the x posing where wall will be created  
      this.ry = height-random([450,650]);   //setting y position where wall will be created 
      this.spt=createSprite(this.rx, this.ry); //using rx,ry
      this.spt.shapeColor="green";
      this.spt.addAnimation("spaceship",spaceship_Img);
      this.spt.scale=1;
      this.spt.debug=true;
      this.spt.setCollider("circle",0,0,50);
    
    }
  
  
}