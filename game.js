import Player from "./player.js"
import SecretWord from "./secretword.js"

export default class Game {

  players = []
  secretWord

  constructor(word) {
    this.secretWord = new SecretWord(word)
  }

  addPlayers(...names) {
    for (let i = 0; i < names.length; i++) {
      this.players.push(new Player(names))
    }
  }

  displayWord() {
    let display = []
    for (let i = 0; i < this.secretWord.wordLength; i++) {
      display.push("_ ")
    }
  }

  guessLetter(letter) {
    this.secretWord.isLetterInWord()
  }

}







