class Alien {
    constructor(img, posX, posY, width, height){
        this.img = img;
        this.posX = posX;
        this.posY = posY;
        this.width = 32;
        this.height = 31;
        this.initialPosX = posX;
        this.velocityX = 20;
        this.velocityY = -15;       
    }

    drawAlien(){
        image(this.img, this.posX, this.posY, this.width, this.height);
    }
 
    moveAlien(){
        this.posX += this.velocityX;
        this.posY -= this.velocityY;

        if(this.posX >= this.initialPosX + this.width * 3){
        this.velocityX *= -1;
        } else if(this.posX <= this.initialPosX - this.width * 3){
        this.velocityX *= -1;
        } 
        if(this.posY > 1024) game.finished = true;                 
    }
}