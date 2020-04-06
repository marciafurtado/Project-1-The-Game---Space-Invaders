class Background {
    constructor(config){
        this.bgImg = loadImage('./imgBackground/backgroundColor.png');
        this.movingBgImage = [
            {src: loadImage('./imgBackground/nebula.png'), x: 150, y:0, speed: 4},
            {src: loadImage('./imgBackground/nebula.png'), x: 780, y:0, speed: 3.5},
            {src: loadImage('./imgBackground/nebula.png'), x: 0, y:0,speed: 1.5},
            {src: loadImage('./imgBackground/nebula.png'), x: 480, y:0, speed: 2.5},

            {src: loadImage('./imgBackground/starSmall.png'), x: 170, y:0,speed: 3.5},
            {src: loadImage('./imgBackground/starBig.png'), x: 290, y:0,speed: 3},           
            {src: loadImage('./imgBackground/starSmall.png'), x: 320, y:0,speed: 2},
            {src: loadImage('./imgBackground/starBig.png'), x: 580, y:0,speed: 1.5},
            {src: loadImage('./imgBackground/starSmall.png'), x: 730, y:0,speed: 3.2},
            {src: loadImage('./imgBackground/starBig.png'), x: 920, y:0,speed: 2.5},
            {src: loadImage('./imgBackground/starSmall.png'), x: 420, y:0,speed: 1},
            {src: loadImage('./imgBackground/starBig.png'), x: 660, y:0,speed: 4},
            {src: loadImage('./imgBackground/starSmall.png'), x: 50, y:0,speed: 1.7},
            {src: loadImage('./imgBackground/starBig.png'), x: 830, y:0, speed: 5.3}
        ];
    }    

   display(){
       image(this.bgImg, 0, 0, 1000, 1400);

       for(let i = 0; i < this.movingBgImage.length; i++){
        this.movingBgImage[i].y += this.movingBgImage[i].speed;
        image(this.movingBgImage[i].src, this.movingBgImage[i].x, this.movingBgImage[i].y);
        image(this.movingBgImage[i].src, this.movingBgImage[i].x, this.movingBgImage[i].y + config.maxHeight);
        // console.log(this.movingBgImage[i].y);
        if(this.movingBgImage[i].y >= config.maxHeight + 200) {     
                
            this.movingBgImage[i].y = -1000;
            console.log(this.movingBgImage[i].y);  
        }
       }
       
   }
}