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
        image(game.spaceInvadersTitle, 0, 50, 768, 86);
        game.startScreenGif();
        fill('white');
        // textSize(60);
        // text('SPACE INVADERS', 130, 100); 
        textSize(20);
        text('Use your arrow keys to move your spaceship', 180, 800);
        text('Press spacebar to shoot', 270, 830);
        

        return;    
    } 

    if(game.finished && game.alienArray == 0){
        image(game.startImg, 0, 0);
        game.winScreenGif();
        fill('white');
        textSize(40);
        text('Congratulations! You killed all the aliens!', 180, 800); 
        textSize(20);
        text('Press Tab key if you wanna play again', 180, 830);      
        noLoop();
        return;
    } else if(game.finished){
        image(game.startImg, 0, 0);
        image(game.gameOverImg, 110, 50);
        image(game.pressTabImg, 0, 800, 768, 72);
        game.loseScreenGif();
        // fill('white');
        // textSize(40);
        // text('Press Tab key if you wanna play again', 180, 800, 768, 72);
        noLoop();
        return;
    }

    game.display();
    game.player.movement();
    game.displayAliens();

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
        game.startGif.hide();
    }
    if(keyCode === 9 && game.finished === true){
        window.location.reload();
    }
}

