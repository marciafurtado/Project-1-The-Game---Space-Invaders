class Alien {
    constructor(img, posX, posY, width, height){
        this.alienImg = img;
        this.alienPosX = posX;
        this.alienPosY = posY;
        this.width = 52;
        this.height = 51;

       
        
    }

    drawAlien(){
        image(this.alienImg, this.alienPosX, this.alienPosY, this.width, this.height);
    }
    

    
}