class Game {
    constructor(){
        
    }

    init(config){
        this.background = new Background();
        this.player = new Player(config);
        
    }
    display(){
        clear();
        this.background.display();
        this.player.display();
    }

}