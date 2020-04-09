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

    this.alienArray.push(new Alien(loadImage("aliens/alien1green.png"), 150, 200));
    this.alienArray.push(new Alien(loadImage("aliens/alien2pink.png"), 200, 200));
    this.alienArray.push(new Alien(loadImage("aliens/alien3red.png"), 250, 200));
    this.alienArray.push(new Alien(loadImage('aliens/alien4yellow.png'), 300, 200));
    this.alienArray.push(new Alien(loadImage('aliens/alien5blue.png'), 350,200));
    this.alienArray.push(new Alien(loadImage('aliens/alien2green.png'), 400,200));
    this.alienArray.push(new Alien(loadImage('aliens/alien1pink.png'), 450, 200));

    this.alienArray.push(new Alien(loadImage('aliens/alien2red.png'), 200, 250));
    this.alienArray.push(new Alien(loadImage('aliens/alien3pink.png'), 250, 250));
    this.alienArray.push(new Alien(loadImage('aliens/alien5green.png'), 300, 250));
    this.alienArray.push(new Alien(loadImage('aliens/alien2red.png'),350,250));
    this.alienArray.push(new Alien(loadImage('aliens/alien1yellow.png'), 400, 250));
    this.alienArray.push(new Alien(loadImage('aliens/alien3blue.png'),450,250));
    this.alienArray.push(new Alien(loadImage('aliens/alien2green.png'), 500, 250));

    this.alienArray.push(new Alien(loadImage('aliens/alien5yellow.png'), 250, 300));
    this.alienArray.push(new Alien(loadImage('aliens/alien2blue.png'),300,300));
    this.alienArray.push(new Alien(loadImage('aliens/alien4pink.png'),350,300));
    this.alienArray.push(new Alien(loadImage('aliens/alien3green.png'), 400, 300));
    this.alienArray.push(new Alien(loadImage('aliens/alien1red.png'), 450, 300));
    this.alienArray.push(new Alien(loadImage('aliens/alien2pink.png'), 500, 300));
    this.alienArray.push(new Alien(loadImage('aliens/alien3yellow.png'), 550, 300));

    this.alienArray.push(new Alien(loadImage('aliens/alien3blue.png'), 250, 400));
    this.alienArray.push(new Alien(loadImage('aliens/alien1yellow.png'),300,400));
    this.alienArray.push(new Alien(loadImage('aliens/alien3red.png'), 350, 400));
    this.alienArray.push(new Alien(loadImage('aliens/alien5pink.png'),400,400));
    this.alienArray.push(new Alien(loadImage('aliens/alien1green.png'), 450, 400));
    this.alienArray.push(new Alien(loadImage('aliens/alien4yellow.png'), 500,400));
    this.alienArray.push(new Alien(loadImage('aliens/alien2pink.png'), 550, 400));

    this.alienArray.push(new Alien(loadImage('aliens/alien1pink.png'), 200, 450));
    this.alienArray.push(new Alien(loadImage('aliens/alien2yellow.png'), 250,450));
    this.alienArray.push(new Alien(loadImage('aliens/alien3green.png'), 300,450));
    this.alienArray.push(new Alien(loadImage('aliens/alien4blue.png'), 350, 450));
    this.alienArray.push(new Alien(loadImage('aliens/alien5red.png'), 400, 450));
    this.alienArray.push(new Alien(loadImage('aliens/alien1yellow.png'), 450, 450));
    this.alienArray.push(new Alien(loadImage('aliens/alien4pink.png'), 500, 450));

    this.alienArray.push(new Alien(loadImage('aliens/alien4red.png'), 150, 500));
    this.alienArray.push(new Alien(loadImage('aliens/alien2yellow.png'),200,500));
    this.alienArray.push(new Alien(loadImage('aliens/alien1green.png'), 250, 500));
    this.alienArray.push(new Alien(loadImage('aliens/alien5pink.png'), 300,500));
    this.alienArray.push(new Alien(loadImage('aliens/alien3yellow.png'), 350, 500));
    this.alienArray.push(new Alien(loadImage('aliens/alien4green.png'), 400,500));
    this.alienArray.push(new Alien(loadImage('aliens/alien2blue.png'), 450, 500));
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
          this.laserSound.play();

          if (this.alienArray.length % 5 === 0) {
            for (let k = 0; k < this.alienArray.length; k++) {
              this.alienArray[k].velocityY -= 10;
              this.alienArray[k].velocityX += 3;
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
  inGameSounds(){
    this.sound = loadSound('Music/videogameland.wav');
    this.laserSound = loadSound('Music/lasershoot.wav');
    this.dyingSound = loadSound('Music/diesound.wav');
    this.gameOverSound = loadSound('Music/gameover.wav');
    this.winSound = loadSound('Music/cheer.mp3');
  }
  

}

