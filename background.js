class Background {
    constructor(config){
        this.imgs = [
            {src: loadImage('./imgBackground/T_PurpleBackground_Version3_Layer1.png'), x: 0, y: 0, speed: 1},
            {src: loadImage('./imgBackground/T_PurpleBackground_Version3_Layer2.png'), x: 0, y: 0, speed: 2},
            {src: loadImage('./imgBackground/T_PurpleBackground_Version3_Layer3.png'), x: 0, y: 0, speed: 3},
            {src: loadImage('./imgBackground/T_PurpleBackground_Version3_Layer4.png'), x: 0, y: 0, speed: 4}
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     {
//         this.bgImg = loadImage('./imgBackground/backgroundColor.png');
//         this.movingBgImage = [

//             {src: loadImage('./imgBackground/starSmall.png'), x: 170, y:0,speed: 3.5},
//             {src: loadImage('./imgBackground/starBig.png'), x: 290, y:0,speed: 3},           
//             {src: loadImage('./imgBackground/starSmall.png'), x: 320, y:0,speed: 2},
//             {src: loadImage('./imgBackground/starBig.png'), x: 580, y:0,speed: 1.5},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 730, y:0,speed: 3.2},
//             {src: loadImage('./imgBackground/starBig.png'), x: 920, y:0,speed: 2.5},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 420, y:0,speed: 1},
//             {src: loadImage('./imgBackground/starBig.png'), x: 660, y:0,speed: 4},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 50, y:0,speed: 1.7},
//             {src: loadImage('./imgBackground/starBig.png'), x: 830, y:0, speed: 5.3},

//             {src: loadImage('./imgBackground/starSmall.png'), x: 980, y:0,speed: 3.3},
//             {src: loadImage('./imgBackground/starBig.png'), x: 2, y:0,speed: 3.1},           
//             {src: loadImage('./imgBackground/starSmall.png'), x: 610, y:0,speed: 2.6},
//             {src: loadImage('./imgBackground/starBig.png'), x: 500, y:0,speed: 1.2},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 690, y:0,speed: 3.8},
//             {src: loadImage('./imgBackground/starBig.png'), x: 390, y:0,speed: 5.1},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 100, y:0,speed: 2.2},
//             {src: loadImage('./imgBackground/starBig.png'), x: 220, y:0,speed: 4.2},
//             {src: loadImage('./imgBackground/starSmall.png'), x: 300, y:0,speed: 1.2},
//             {src: loadImage('./imgBackground/starBig.png'), x: 880, y:0, speed: 5.7}
//         ];
//     }    

//    display(){
//        image(this.bgImg, 0, 0, 1000, 1400);

//        for(let i = 0; i < this.movingBgImage.length; i++){
//         this.movingBgImage[i].y += this.movingBgImage[i].speed;
//         image(this.movingBgImage[i].src, this.movingBgImage[i].x, this.movingBgImage[i].y);
//         // console.log(this.movingBgImage[i].y);
        
//         if(this.movingBgImage[i].y >= config.maxHeight) {     
//             this.movingBgImage[i].y = -200;
//             console.log(this.movingBgImage[i].y);  
//         }
//        }
       
//    }
// }