class Alien {
    constructor(img, posX, posY){
        this.alienImg = img;
        this.alienPosX = posX;
        this.alienPosY = posY;

       
        
    }

    drawAlien(){
        image(this.alienImg, this.alienPosX, this.alienPosY, 52, 51);
    }
    // alienMovement(){
    //     this.alienPosX++;
    //     if(this.alienPosX >= 800){
    //         this.alienPosX--;
    //     } else if(this.alienPosX <= 0){
    //         this.alienPosX++;
    //     }

    // }

    


    
}