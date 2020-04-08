let game = new Game();


const config = {
    maxWidth: 768,
    maxHeight: 1024,
};


function preload() {  
    game.init(config);
    
}

function setup() {
    createCanvas(config.maxWidth,config.maxHeight);
}

function draw() {  
    game.display();
    game.player.movement();
    game.displayAliens();
    game.draw();

    if(frameCount % 30 == 0){
    game.alienMovimentation();
    }

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