class Shoot {
  constructor(posX, posY) {
    this.shootImg = loadImage("./imgElem/laserRed.png");
    this.shootPosX = posX;
    this.shootPosY = posY;
  }

  move() {
    this.shootPosY -= 1;
  }


}
