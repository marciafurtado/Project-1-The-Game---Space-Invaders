class Shoot {
  constructor(posX, posY) {
    this.shootImg = loadImage("./imgElem/laserRed.png");
    this.shootPosX = posX;
    this.shootPosY = posY - 30;
  }

  shootMove() {
    this.shootPosY -= 1;
  }


}
