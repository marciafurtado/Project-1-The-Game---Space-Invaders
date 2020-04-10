class Alien {
    constructor(img, posX, posY, width, height){
        this.img = img;
        this.posX = posX;
        this.posY = posY;
        this.width = 37;
        this.height = 36;
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
        console.log(this.velocityX);
        if(this.posX >= this.initialPosX + this.width * 3){
        this.velocityX *= -1;
        } else if(this.posX <= this.initialPosX - this.width * 3){
        this.velocityX *= -1;
        } 
    
        if(this.posY > 1024 && game.player.lifeCounter <= 1){
            game.finished = true;
            game.gameOverSound.play();
        } else if(this.posY > 1024){
            game.player.lifeCounter -= 1;
            game.dyingSound.setVolume(0.01);
            game.dyingSound.play();
           for(let i = 0; i < game.alienArray.length; i++){
                game.alienArray[i].posY = game.alienArray[i].initialPosY;
           }
        }                     
    }
}