class Shoot {
  constructor(posX, posY) {
    this.shootImg = loadImage("./Player/Bullet.png");
    this.shootPosX = posX;
    this.shootPosY = posY - 30;
    this.height = 22;
    this.width = 9;
    
  }

  shootMove() {
    this.shootPosY -= 6;
  }


}
