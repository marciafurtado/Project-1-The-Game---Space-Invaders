let game = new Game();


const config = {
    maxWidth: 1000,
    maxHeight: 1400
};


function preload() {
    game.init(config);
}


function setup() {
    createCanvas(config.maxWidth,config.maxHeight);
    
}

let startScreen = false;


function draw() {

    if(startScreen){ 
        // insert start screen
        return;
    }
    game.display();
    game.player.movement();
    game.displayAliens();

    

    if(frameCount % 120 == 0){
        keyPressed();
    }
    
    if(frameCount % 10 == 0){
    game.checkCollision();
    }
}



function keyPressed() {   
    if(keyIsDown(32)){
        game.player.shootAction();
    }
}