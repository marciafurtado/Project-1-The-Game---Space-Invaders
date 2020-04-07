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




        // for(let i = 0; i < this.movingBgImage.length; i++){
        //     this.movingBgImage[i].y += this.movingBgImage[i].speed;
        //     image(this.movingBgImage[i].src, this.movingBgImage[i].x, this.movingBgImage[i].y);
        //     // console.log(this.movingBgImage[i].y);
            
        //     if(this.movingBgImage[i].y >= config.maxHeight) {     
        //         this.movingBgImage[i].y = -200;
        //         console.log(this.movingBgImage[i].y);  
        //     }
        //    }
    }
    

    
}