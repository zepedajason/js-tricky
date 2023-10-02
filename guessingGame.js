function guessingGame() {
  const randomNum = Math.floor(Math.random() * 100);
  let isFinished = false;

  return function guess(num) {
    if (isFinished) {
      return "The game has ended, Start a new game";
    }

    if (num === randomNum) {
      isFinished = true;
      return "You guessed correctly!";
    } else if (guess < randomNum) {
      return "Too low, try again.";
    } else {
      return "Too high, try again.";
    }
  };
}
