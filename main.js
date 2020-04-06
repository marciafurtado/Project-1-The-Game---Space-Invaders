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


function draw() {
    game.display();
    
    game.player.movement();
    
    if(frameCount % 60 == 0){
        keyPressed();
        }
    
}



function keyPressed() {
    console.log(frameCount);    
    if(keyIsDown(32)){
        game.player.shootAction();
    }
}