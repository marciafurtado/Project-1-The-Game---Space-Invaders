class Game {
    constructor(){
        this.start = false;
        this.alienArray = [];

        this.finished = false;
    }

    init(config){
        this.background = new Background(config);
        this.player = new Player(config);
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 150,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 200, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 250,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 300, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 350,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 400,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 450, 200));
    
               
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 200, 250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 250, 250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 300, 250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),350,250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 400, 250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),450,250));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 500, 250));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 250, 300));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),300,300));    
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'),350,300));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 400, 300));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 450, 300));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 500, 300));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 550, 300));
       
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 250, 400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),300,400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 350, 400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),400,400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 450, 400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 500,400));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 550, 400));

        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 200, 450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 250,450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 300,450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 350, 450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 400, 450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 450, 450));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 500, 450));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 150, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),200,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 250, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 300,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 350, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 400,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 450, 500));
    }

    display(){
        clear();
        this.background.display();
        this.player.display();

        
    }

    draw(){
        if(this.finished){
            fill('black');
            textSize(20);
            text('Game Over', 500, 500);       
            noLoop();
        }
    }

    displayAliens(){
        for(let i = 0; i < this.alienArray.length; i++){
            this.alienArray[i].drawAlien();
            console.log([i]);
        }    
    }

    alienMovimentation(){
        for(let i = 0; i < this.alienArray.length; i++){
            this.alienArray[i].moveAlien();
        }
    }

    checkCollision(){    
        for(let i = 0; i < this.player.shootArray.length;i++){
            let laser = this.player.shootArray[i];            
            
            for(let j = 0; j < this.alienArray.length; j++){
                let alien = this.alienArray[j];
                
                if(alien.posX < laser.shootPosX + laser.width &&
                    alien.posX + alien.width > laser.shootPosX &&
                    alien.posY + alien.height > laser.shootPosY &&
                    alien.posY < laser.shootPosY + laser.height){
                        let index = this.alienArray.indexOf(alien);
                        this.alienArray.splice(index, 1);
                        let laserIndex = this.player.shootArray.indexOf(laser);
                        this.player.shootArray.splice(laserIndex, 1);
                        
                        if(this.alienArray.length % 10 === 0){
                            for(let k = 0; k < this.alienArray.length; k++){
                            this.alienArray[k].velocityY -= 20;
                            this.alienArray[k].velocityX += 10;
                            }
                        }
                }
            }
        }

    }

    
   
}