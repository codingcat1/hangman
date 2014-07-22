describe("Hangman", function() {
  describe("initialize", function() {
    it("should return the exact amount of spaces for the number of letters in a word", function() {
      var hangman = Object.create(Hangman);
      hangman.initialize("cat");
      hangman.setWord.should.equal("cat");
      hangman.guessWord.should.equal("___");
    });
  });
  describe("makeGuess", function() {
    it("should return true when user inputs a letter that exists within the set word", function() {
      var hangman = Object.create(Hangman);
      hangman.initialize("cat");
      hangman.makeGuess("a").should.equal(true);
    });
  });
});
