class Game {
    constructor(){
        this.alienArray = [];
    }

    init(config){
        this.background = new Background(config);
        this.player = new Player(config);
        // this.obstacle = new Obstacles (config);
       
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),200,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 260, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),320,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 380, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),440,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'),500,200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 560, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 620, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 680, 200));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 740, 200));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),200,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 260, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),320,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 380, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),440,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 500, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),560,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 620, 260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),680,260));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 740, 260));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),200,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 260, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),320,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 380, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'),440,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'),500,320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 560, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 620, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBeige_manned.png'), 680, 320));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 740, 320));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),200,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 260, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),320,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 380, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),440,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 500, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),560,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 620, 380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),680,380));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 740, 380));

        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),200,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 260, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),320,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 380, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'),440,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'),500,440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 560, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 620, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipGreen_manned.png'), 680, 440));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipBlue_manned.png'), 740, 440));
        
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),200,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 260, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),320,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 380, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),440,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 500, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),560,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 620, 500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipPink_manned.png'),680,500));
        this.alienArray.push(new Alien(loadImage('./Aliens/shipYellow_manned.png'), 740, 500));
    }

    display(){
        clear();
        this.background.display();
        this.player.display();
       
    }

    displayAliens(){
        for(let i = 0; i < this.alienArray.length; i++){
            this.alienArray[i].drawAlien();
        }
    }

    checkCollision(){    
        for(let i = 0; i < this.player.shootArray.length;i++){
            let laser = this.player.shootArray[i];            
            for(let j = 0; j < this.alienArray.length; j++){
                let alien = this.alienArray[j];
                if(alien.alienPosX < laser.shootPosX + laser.width &&
                    alien.alienPosX + alien.width > laser.shootPosX &&
                    alien.alienPosY + alien.height > laser.shootPosY &&
                    alien.alienPosY < laser.shootPosY + laser.height){
                        console.log('aaaa');
                        let index = this.alienArray.indexOf(alien);
                        this.alienArray.splice(index, 1);
                        let laserIndex = this.player.shootArray.indexOf(laser);
                        this.player.shootArray.splice(laserIndex, 1);
                    }

            }
        }

    }
   
}