class Alien {
    constructor(img, posX, posY, width, height){
        this.img = img;
        this.posX = posX;
        this.posY = posY;
        this.width = 42;
        this.height = 41;
        this.initialPosX = posX;
        this.velocityX = 40;
        this.velocityY = -30;       
    }

    drawAlien(){
        image(this.img, this.posX, this.posY, this.width, this.height);
    }
 
    moveAlien(){
        this.posX += this.velocityX;
        this.posY -= this.velocityY;

        if(this.posX >= this.initialPosX + this.width){
        this.velocityX *= -1;
        } else if(this.posX <= this.initialPosX - this.width){
        this.velocityX *= -1;
        } 
        if(this.posY > 1536) game.finished = true;                 
    }
}