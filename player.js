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

        this.ammo = 80;

    }

    display(){
        image(this.playerImg, this.posX, this.posY);
        image(this.speedImg, this.posX + 47, this.posY + 80, 7, 40);
       

        if(keyIsDown(39)){
            image(this.playerRightImg, this.posX, this.posY);
        }
        if(keyIsDown(37)){
            image(this.playerLeftImg, this.posX, this.posY);
        }


        for(let i = 0; i < this.shootArray.length; i++){
            image(this.shootImg, this.shootArray[i].shootPosX, this.shootArray[i].shootPosY, this.shootArray[i].width, this.shootArray[i].heigth);
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
        if(this.ammo > 0){
        this.shootArray.push(new Shoot(this.posX + (this.sizeX / 2) - 5, this.posY));
        this.ammo -= 1;
        console.log(this.ammo);
        } else if (this.ammo <= 0){
            return 'Out of ammo!';
        }
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