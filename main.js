let game = new Game();

const config = {
  maxWidth: 768,
  maxHeight: 1024,
};

function preload() {
  game.init(config);
  game.inGameSounds();
}

function setup() {
  createCanvas(config.maxWidth, config.maxHeight);
}

function draw() {
  if (!game.start) {
    image(game.startImg, 0, 0);
    image(game.spaceInvadersTitle, 0, 50, 768, 86);
    game.startScreenGif();
    fill("white");
    textSize(20);
    text("Use your arrow keys to move your spaceship", 180, 800);
    text("Press spacebar to shoot", 270, 830);

    return;
  }

  if (game.finished && game.alienArray.length == 0) {
    image(game.startImg, 0, 0);
    image(game.pressAImg, 0, 800, 768, 90);
    image(game.congratulation, 0, 500, 768, 186);
    game.winScreenGif();
    game.winSound.play();
    game.winSound.setVolume(0.4);
    noLoop();

    return;
  } else if (game.finished || game.player.ammo < 0) {
    image(game.startImg, 0, 0);
    image(game.gameOverImg, 110, 50);
    image(game.pressAImg, 0, 800, 768, 90);
    game.loseScreenGif();
    game.gameOverSound.play();
    noLoop();

    return;
  }

  game.display();
  game.player.movement();
  game.displayAliens();

  if (frameCount % 30 == 0) {
    game.alienMovimentation();
  }
  if (frameCount % 120 == 0) {
    keyPressed();
  }
  if (frameCount % 10 == 0) {
    game.checkCollision();
  }
}

function keyPressed() {
  if (keyIsDown(32)) {
    game.player.shootAction();
  }
  if (keyCode === 13) {
    game.start = true;
    game.startGif.hide();
  }
  if (keyCode === 65 && game.finished === true) {
    window.location.reload();
  }
}
