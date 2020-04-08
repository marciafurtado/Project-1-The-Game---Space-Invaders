class Player {
    constructor(config){
        this.img = loadImage('./imgElem/player.png');
        this.rightImg = loadImage('./imgElem/playerRight.png');
        this.leftImg = loadImage('./imgElem/playerLeft.png');
        this.ammoImg = loadImage('./imgElem/laserRed.png');
        this.speedImg = loadImage('./imgElem/speedLine.png');
        
        this.lifeImg = loadImage('./imgElem/life.png');
        this.lifeImgWidth = 48;
        this.lifeImgHeight = 40;
        
        this.width = 90;
        this.height = 63;
        this.posX = (config.maxWidth - this.width)  / 2;
        this.posY = (config.maxHeight - this.height) - 50;
        
        this.shootArray = [];

        this.lifeCounter = 3;

        this.ammo = 60 ;
    }

    display(){
        image(this.img, this.posX, this.posY);
        image(this.speedImg, this.posX + 47, this.posY + 80, 7, 40);

        fill('rgba(220, 220, 220,1)');
        textSize(30);
        text(`x ${this.lifeCounter}`, 680, 80);
        image(this.lifeImg, 620, 50, this.lifeImgWidth, this.lifeImgHeight); 
       
        fill('rgba(220, 220, 220,1)');
        textSize(30);
        text(`x ${this.ammo}`, 680, 125);
        image(this.ammoImg, 650, 100);
        image(this.ammoImg, 640, 100);
        image(this.ammoImg, 630, 100);

        if(keyIsDown(39)){
            image(this.rightImg, this.posX, this.posY);
        }
        if(keyIsDown(37)){
            image(this.leftImg, this.posX, this.posY);
        }

        for(let i = 0; i < this.shootArray.length; i++){
            image(this.ammoImg, this.shootArray[i].shootPosX, this.shootArray[i].shootPosY, this.shootArray[i].width, this.shootArray[i].height);
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
        this.shootArray.push(new Shoot(this.posX + (this.width / 2), this.posY));
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