class Player {
    constructor(config){
        this.img = loadImage('./Player/Ship.png');
        this.ammoImg = loadImage('./Player/Bullet.png');
              
        this.lifeImg = loadImage('./Player/Ship.png');
        this.lifeImgWidth = 40;
        this.lifeImgHeight = 25;
        
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
        
        fill('rgba(220, 220, 220,1)');
        textSize(30);
        text(`x ${this.lifeCounter}`, 680, 80);
        image(this.lifeImg, 623, 55, this.lifeImgWidth, this.lifeImgHeight); 
       
        fill('rgba(220, 220, 220,1)');
        textSize(30);
        text(`x ${this.ammo}`, 680, 125);
        image(this.ammoImg, 650, 109);
        image(this.ammoImg, 640, 109);
        image(this.ammoImg, 630, 109);

        for(let i = 0; i < this.shootArray.length; i++){
            image(this.ammoImg, this.shootArray[i].shootPosX - 17, this.shootArray[i].shootPosY, this.shootArray[i].width, this.shootArray[i].height);
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