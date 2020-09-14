import DECK_OF_CARDS from "././constants/deck.js";

export const getShuffledDeck = () => {
  let shuffledDeck = [];

  for (let i = 0; i < DECK_OF_CARDS.length; i++) {
    let randNum = Math.floor(Math.random() * 52);
    if (!shuffledDeck.includes(DECK_OF_CARDS[randNum])) {
      shuffledDeck.push(DECK_OF_CARDS[randNum]);
    } else {
      i--; // stops loop position value (i) increasing if duplicate element found. Ensures 52 cards -- not the best way
    }
  }

  return shuffledDeck;
};
