class Game {
  constructor() {
    this.start = false;
    this.finished = false;
    this.alienArray = [];
  }

  init(config) {
    this.background = new Background(config);
    this.player = new Player(config);

    this.startImg = loadImage("BackgroundOfficial/blackBackground.png");
    this.gameOverImg = loadImage("BackgroundOfficial/gameOver.png");
    this.pressTabImg = loadImage("BackgroundOfficial/Tab.png");
    this.spaceInvadersTitle = loadImage("BackgroundOfficial/spaceInvaders.png");
    this.congratulation = loadImage("BackgroundOfficial/congrats.png");

    this.startGif = createImg("Gifs/Start.gif").position(150, 200).hide();
    this.winGif = createImg("Gifs/Win.gif").position(150, 200).hide();
    this.loseGif = createImg("Gifs/Lose.gif").position(150, 200).hide();

    this.alienArray.push(
      new Alien(loadImage("Aliens-official/alien-1_green.png"), 150, 200)
    );
    this.alienArray.push(
      new Alien(loadImage("Aliens-official/alien-2_pink.png"), 200, 200)
    );
    this.alienArray.push(
      new Alien(loadImage("Aliens-official/alien-3_red.png"), 250, 200)
    );
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_yellow.png'), 300, 200));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-5_blue.png'), 350,200));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_green.png'), 400,200));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_pink.png'), 450, 200));

    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_red.png'), 200, 250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_pink.png'), 250, 250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-5_green.png'), 300, 250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_red.png'),350,250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_yellow.png'), 400, 250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_blue.png'),450,250));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_green.png'), 500, 250));

    // this.alienArray.push(new Alien(loadImage('/Aliens-official/alien-5_yellow.png'), 250, 300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_blue.png'),300,300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_pink.png'),350,300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_green.png'), 400, 300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_red.png'), 450, 300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_pink.png'), 500, 300));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_yellow.png'), 550, 300));

    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_blue.png'), 250, 400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_yellow.png'),300,400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_red.png'), 350, 400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-5_pink.png'),400,400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_green.png'), 450, 400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_yellow.png'), 500,400));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_pink.png'), 550, 400));

    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_pink.png'), 200, 450));
    // this.alienArray.push(new Alien(loadImage('/Aliens-official/alien-2_yellow.png'), 250,450));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_green.png'), 300,450));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_blue.png'), 350, 450));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-5_red.png'), 400, 450));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_yellow.png'), 450, 450));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_pink.png'), 500, 450));

    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_red.png'), 150, 500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_yellow.png'),200,500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-1_green.png'), 250, 500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-5_pink.png'), 300,500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-3_yellow.png'), 350, 500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-4_green.png'), 400,500));
    // this.alienArray.push(new Alien(loadImage('./Aliens-official/alien-2_blue.png'), 450, 500));
  }

  display() {
    clear();
    this.background.display();
    this.player.display();
  }

  displayAliens() {
    for (let i = 0; i < this.alienArray.length; i++) {
      this.alienArray[i].drawAlien();
      console.log([i]);
    }
  }

  alienMovimentation() {
    for (let i = 0; i < this.alienArray.length; i++) {
      this.alienArray[i].moveAlien();
    }
  }

  checkCollision() {
    for (let i = 0; i < this.player.shootArray.length; i++) {
      let laser = this.player.shootArray[i];

      for (let j = 0; j < this.alienArray.length; j++) {
        let alien = this.alienArray[j];

        if (
          alien.posX < laser.shootPosX + laser.width &&
          alien.posX + alien.width > laser.shootPosX &&
          alien.posY + alien.height > laser.shootPosY &&
          alien.posY < laser.shootPosY + laser.height
        ) {
          let index = this.alienArray.indexOf(alien);
          this.alienArray.splice(index, 1);
          let laserIndex = this.player.shootArray.indexOf(laser);
          this.player.shootArray.splice(laserIndex, 1);

          if (this.alienArray.length % 5 === 0) {
            for (let k = 0; k < this.alienArray.length; k++) {
              this.alienArray[k].velocityY -= 15;
              this.alienArray[k].velocityX += 10;
            }
          }

          if (this.alienArray.length == 0) {
            this.finished = true;
          }
        }
      }
    }
  }

  startScreenGif() {
    this.startGif.show();
  }
  winScreenGif() {
    this.winGif.show();
  }
  loseScreenGif() {
    this.loseGif.show();
  }
}
