
export default class SecretWord{

  chars = []

  constructor(word) {
    this.chars = word.toUpperCase().split("")
  }

  get wordLength() {
  return this.chars.length
  }  
  
  isLetterInWord(letter) {
    return this.chars.includes(letter)
  }


}



