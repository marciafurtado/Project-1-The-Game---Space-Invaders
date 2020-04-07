class Alien {
    constructor(img, posX, posY, width, height){
        this.img = img;
        this.posX = posX;
        this.posY = posY;
        this.width = 52;
        this.height = 51;
        this.initialPosX = posX;
        this.velocity = 3;       
    }

    drawAlien(){
        image(this.img, this.posX, this.posY, this.width, this.height);
    }
 
    moveAlien(){
        this.posX += this.velocity;

        if(this.posX >= this.initialPosX + 150){
            this.velocity *= -1;
        } else if(this.posX <= this.initialPosX - 150){
            this.velocity *= -1;
        }
    }

    // for(let i = 0; i < this.movingBgImage.length; i++){
        //     this.movingBgImage[i].y += this.movingBgImage[i].speed;
        //     image(this.movingBgImage[i].src, this.movingBgImage[i].x, this.movingBgImage[i].y);
        //     // console.log(this.movingBgImage[i].y);
            

}