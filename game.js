import Player from "./player.js"


export default class Game {

  players = []

  constructor() {
  }

  startGame(...names) {
    this.addPlayers(...names)
    
  }

  addPlayers(...names) {
    if (names.length < 2) {
      console.log("Du måste minst ha två spelare")
    } else {
      for (let i = 0; i < names.length; i++) {
        this.players.push(new Player(names))
      }
    }
  }

}







