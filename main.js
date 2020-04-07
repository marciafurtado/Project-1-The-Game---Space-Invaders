let game = new Game();
let startScreen = false;

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

function draw() {

    if(startScreen){ 
        // insert start screen
        return;
    }
    game.display();
    game.player.movement();
    game.displayAliens();
    game.alienMovimentation();

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