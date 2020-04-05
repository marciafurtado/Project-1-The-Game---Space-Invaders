class Background {
    constructor(){
        this.bgImg = loadImage('./imgBackground/backgroundColor.png');
    
    }    

   display(){
       image(this.bgImg, 0, 0, 1000, 1400);
   }
}