class Game {
    constructor(){
        
    }

    init(config){
        this.background = new Background();
        this.player = new Player(config);
        this.aliens = new Aliens();
        
    }
    display(){
        clear();
        this.background.display();
        this.player.display();
        this.aliens.display();
    }

}