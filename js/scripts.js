var Hangman = {
  initialize: function(initializedWord) {
    this.setWord = initializedWord;
    var guessWord = "";
      for (var i = 0; i < this.setWord.length; i++) {
        guessWord += "_";
      }
    this.guessWord = guessWord;
  },
  makeGuess: function(guessLetter) {
    this.guessedLetter = guessLetter;
    for (var i = 0; i < this.setWord.length; i++) {
      if (this.setWord.indexOf(this.guessedLetter) >= 0) {
        this.guessedLetter = true;
      } else {
        this.guessedLetter = false;
      } return this.guessedLetter;
    }
  }
};
