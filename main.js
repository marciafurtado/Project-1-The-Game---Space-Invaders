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
}



function keyPressed() {
    console.log(keyPressed);
    if(keyIsDown(39)){
        game.player.moveRight();
    }     
    if(keyIsDown(37)){
        game.player.moveLeft();
    }
    if(keyIsDown(32)){
        game.player.shootAction();
    }

}