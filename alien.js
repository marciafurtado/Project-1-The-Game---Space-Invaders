class Alien {
    constructor(img, posX, posY, width, height){
        this.img = img;
        this.posX = posX;
        this.posY = posY;
        this.width = 35;
        this.height = 34;
        this.initialPosX = posX;
        this.initialPosY = posY;
        this.velocityX = 10;
        this.velocityY = -5;       
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
    
        if(this.posY > 1024 && game.player.lifeCounter <= 1){
            game.finished = true;
        } else if(this.posY > 1024){
            game.player.lifeCounter -= 1;
           for(let i = 0; i < game.alienArray.length; i++){
                game.alienArray[i].posY = game.alienArray[i].initialPosY;
           }
        }                     
    }
}