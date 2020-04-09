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
    if(!game.start){
        image(game.startImg, 0, 0);

        fill('rgba(220, 220, 220,1)');
        textSize(40);
        text('SPACE INVADERS 2.0', 170, 100);
        text('Press ENTER key to start game', 110, 500);
        return;
    } 
    game.draw();

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
    
    if(keyCode === 13){
        game.start = true;
    }

    if(keyCode === 9 && game.finished === true){
        window.location.reload();
    }
}

