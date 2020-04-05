class Player {

    constructor(config){
        this.img = loadImage('./imgElem/player.png');
        this.sizeX = 99;
        this.sizeY = 75;
        this.posX = (config.maxWidth - this.sizeX)  / 2;
        this.posY = (config.maxHeight - this.sizeY) - 50;

    }

    display(){
        image(this.img, this.posX, this.posY);
    }

    moveRight(){
        this.posX += 10;
    }

    moveLeft(){
        this.posX -= 10;
    }
}