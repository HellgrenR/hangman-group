import Player from "./player.js"
import SecretWord from "./secretword.js"
import Gallows from "./gallows.js"

export default class Game {

  players = []
  secretWord
  display = []
  gallows

  constructor(word) {
    this.secretWord = new SecretWord(word)
    this.gallows = new Gallows()
  }

  addPlayers(...names) {
    for (let i = 0; i < names.length; i++) {
      this.players.push(new Player(names))
    }
  }

  displayWord() {
    for (let i = 0; i < this.secretWord.wordLength; i++) {
      display.push("_ ")
    }
  }

  displayGallows() {
    console.log(this.gallows)
  }

  guessLetter(letter) {
    if (letter.length > 1 || letter.length < 1) {
      if (this.secretWord.isLetterInWord()) {
        this.display.splice(this.secretWord.chars.indexOf(letter), letter)
      } else {
        this.gallows.step()
        console.log(`${letter} är fel`)
      }
    } else {
      console.log("Måste vara 1 bokstav")
    }
  }

}







