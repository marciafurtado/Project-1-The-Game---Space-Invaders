class Background {
    constructor(config){
        this.imgs = [
            {src: loadImage('./Background-Official/black-background.png'), x: 0, y: 0, speed: 0},
            {src: loadImage('./Background-Official/background-layer2.png'), x: 0, y: 0, speed: 2},
            
        ];
    }

    display(){
        for(let i = 0; i < this.imgs.length; i++){
            this.imgs[i].y += this.imgs[i].speed;
            image(this.imgs[i].src, 0, this.imgs[i].y);
            image(this.imgs[i].src, 0, this.imgs[i].y - height);
            if(this.imgs[i].y >= height) {
                this.imgs[i].y = 0;
            }
        } 
    }

}
