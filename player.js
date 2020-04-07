class Player {

    constructor(config){
        this.playerImg = loadImage('./imgElem/player.png');
        this.playerRightImg = loadImage('./imgElem/playerRight.png');
        this.playerLeftImg = loadImage('./imgElem/playerLeft.png');
        this.shootImg = loadImage('./imgElem/laserRed.png');
        this.speedImg = loadImage('./imgElem/speedLine.png');

        this.sizeX = 99;
        this.sizeY = 75;
        this.posX = (config.maxWidth - this.sizeX)  / 2;
        this.posY = (config.maxHeight - this.sizeY) - 50;
        
        this.shootArray = [];

    }

    display(){
        image(this.playerImg, this.posX, this.posY);
        image(this.speedImg, this.posX + 47, this.posY + 80, 7, 50);

        if(keyIsDown(39)){
            image(this.playerRightImg, this.posX, this.posY);
        }
        if(keyIsDown(37)){
            image(this.playerLeftImg, this.posX, this.posY);
        }


        for(let i = 0; i < this.shootArray.length; i++){
            image(this.shootImg, this.shootArray[i].shootPosX, this.shootArray[i].shootPosY);
            this.shootArray[i].shootMove();
        }
    }

    moveRight(){
        this.posX += 10;
    }

    moveLeft(){
        this.posX -= 10;
    }

    shootAction(){
        this.shootArray.push(new Shoot(this.posX + (this.sizeX / 2) - 5, this.posY));
    }

    movement(){
        if(keyIsDown(39)){
            this.moveRight();
        }     
        if(keyIsDown(37)){
            this.moveLeft();
        }
    }
    
}