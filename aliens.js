class Aliens {
    constructor(){
        this.alienImgs = [
            {src: loadImage('/Aliens/shipBeige_manned.png'), x: 0, y: 0, speed: 0},
            {src: loadImage('/Aliens/shipBlue_manned.png'), x: 100, y: 0, speed: 0},
            {src: loadImage('/Aliens/shipGreen_manned.png'), x: 200, y: 0, speed: 0},
            {src: loadImage('/Aliens/shipPink_manned.png'), x: 300, y: 0, speed: 0},
            {src: loadImage('/Aliens/shipYellow_manned.png'), x: 400, y: 0, speed: 0}
        ];

        this.sizeX = 50;
        this.sizeY = 50;
    }

    display(){
        for(let i = 0; i < this.alienImgs.length; i++){
            image(this.alienImgs[i].src, this.alienImgs[i].x + 100, 0, 0);
        }
    }

}