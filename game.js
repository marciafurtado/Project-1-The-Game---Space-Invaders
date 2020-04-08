class Game {
    constructor(){
        this.start = false;
        this.alienArray = [];

        this.finished = false;
    }

    init(config){
        this.background = new Background(config);
        this.player = new Player(config);
       
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),100,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 160, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 220,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 280, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 340,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 400,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 460, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 520, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 580, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 640, 200));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),100,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 160, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),220,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 280, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),340,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 400, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),460,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 520, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),580,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 640, 260));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),100,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 160, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),220,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 280, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),340,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'),400,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 460, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 520, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 580, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 640, 320));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),100,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 160, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),220,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 280, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),340,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 400, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),460,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 520, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),580,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 640, 380));

        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 100,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 160, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 220,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 280, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 340,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 400,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 460, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 520, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 580, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 640, 440));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),100,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 160, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),220,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 280, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),340,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 400, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 460,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 520, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'), 580,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 640, 500));
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
                            this.alienArray[k].velocityY -= 50;
                            this.alienArray[k].velocityX += 30;
                            }
                        }
                }
            }
        }

    }

    
   
}