import twoOfHearts from "./../images/cards/face/2_of_hearts.png";
import threeOfHearts from "./../images/cards/face/3_of_hearts.png";
import fourOfHearts from "./../images/cards/face/4_of_hearts.png";
import fiveOfHearts from "./../images/cards/face/5_of_hearts.png";
import sixOfHearts from "./../images/cards/face/6_of_hearts.png";
import sevenOfHearts from "./../images/cards/face/7_of_hearts.png";
import eightOfHearts from "./../images/cards/face/8_of_hearts.png";
import nineOfHearts from "./../images/cards/face/9_of_hearts.png";
import tenOfHearts from "./../images/cards/face/10_of_hearts.png";
import jackOfHearts from "./../images/cards/face/jack_of_hearts2.png";
import kingOfHearts from "./../images/cards/face/king_of_hearts2.png";
import queenOfHearts from "./../images/cards/face/queen_of_hearts2.png";
import aceOfHearts from "./../images/cards/face/ace_of_hearts.png";

import twoOfDiamonds from "./../images/cards/face/2_of_diamonds.png";
import threeOfDiamonds from "./../images/cards/face/3_of_diamonds.png";
import fourOfDiamonds from "./../images/cards/face/4_of_diamonds.png";
import fiveOfDiamonds from "./../images/cards/face/5_of_diamonds.png";
import sixOfDiamonds from "./../images/cards/face/6_of_diamonds.png";
import sevenOfDiamonds from "./../images/cards/face/7_of_diamonds.png";
import eightOfDiamonds from "./../images/cards/face/8_of_diamonds.png";
import nineOfDiamonds from "./../images/cards/face/9_of_diamonds.png";
import tenOfDiamonds from "./../images/cards/face/10_of_diamonds.png";
import jackOfDiamonds from "./../images/cards/face/jack_of_diamonds2.png";
import kingOfDiamonds from "./../images/cards/face/king_of_diamonds2.png";
import queenOfDiamonds from "./../images/cards/face/queen_of_diamonds2.png";
import aceOfDiamonds from "./../images/cards/face/ace_of_diamonds.png";

import twoOfClubs from "./../images/cards/face/2_of_clubs.png";
import threeOfClubs from "./../images/cards/face/3_of_clubs.png";
import fourOfClubs from "./../images/cards/face/4_of_clubs.png";
import fiveOfClubs from "./../images/cards/face/5_of_clubs.png";
import sixOfClubs from "./../images/cards/face/6_of_clubs.png";
import sevenOfClubs from "./../images/cards/face/7_of_clubs.png";
import eightOfClubs from "./../images/cards/face/8_of_clubs.png";
import nineOfClubs from "./../images/cards/face/9_of_clubs.png";
import tenOfClubs from "./../images/cards/face/10_of_clubs.png";
import jackOfClubs from "./../images/cards/face/jack_of_clubs2.png";
import kingOfClubs from "./../images/cards/face/king_of_clubs2.png";
import queenOfClubs from "./../images/cards/face/queen_of_clubs2.png";
import aceOfClubs from "./../images/cards/face/ace_of_clubs.png";

import twoOfSpades from "./../images/cards/face/2_of_spades.png";
import threeOfSpades from "./../images/cards/face/3_of_spades.png";
import fourOfSpades from "./../images/cards/face/4_of_spades.png";
import fiveOfSpades from "./../images/cards/face/5_of_spades.png";
import sixOfSpades from "./../images/cards/face/6_of_spades.png";
import sevenOfSpades from "./../images/cards/face/7_of_spades.png";
import eightOfSpades from "./../images/cards/face/8_of_spades.png";
import nineOfSpades from "./../images/cards/face/9_of_spades.png";
import tenOfSpades from "./../images/cards/face/10_of_spades.png";
import jackOfSpades from "./../images/cards/face/jack_of_spades2.png";
import kingOfSpades from "./../images/cards/face/king_of_spades2.png";
import queenOfSpades from "./../images/cards/face/queen_of_spades2.png";
import aceOfSpades from "./../images/cards/face/ace_of_spades2.png";

const DECK_OF_CARDS = [
  { name: "Two of Hearts", points: 2, src: twoOfHearts },
  { name: "Three of Hearts", points: 3, src: threeOfHearts },
  { name: "Four of Hearts", points: 4, src: fourOfHearts },
  { name: "Five of Hearts", points: 5, src: fiveOfHearts },
  { name: "Six of Hearts", points: 6, src: sixOfHearts },
  { name: "Seven of Hearts", points: 7, src: sevenOfHearts },
  { name: "Eight of Hearts", points: 8, src: eightOfHearts },
  { name: "Nine of Hearts", points: 9, src: nineOfHearts },
  { name: "Ten of Hearts", points: 10, src: tenOfHearts },
  { name: "Jack of Hearts", points: 10, src: jackOfHearts },
  { name: "King of Hearts", points: 10, src: kingOfHearts },
  { name: "Queen of Hearts", points: 10, src: queenOfHearts },
  { name: "Ace of Hearts", points: 11, src: aceOfHearts }, // 1 or 11

  { name: "Two of Diamonds", points: 2, src: twoOfDiamonds },
  { name: "Three of Diamonds", points: 3, src: threeOfDiamonds },
  { name: "Four of Diamonds", points: 4, src: fourOfDiamonds },
  { name: "Five of Diamonds", points: 5, src: fiveOfDiamonds },
  { name: "Six of Diamonds", points: 6, src: sixOfDiamonds },
  { name: "Seven of Diamonds", points: 7, src: sevenOfDiamonds },
  { name: "Eight of Diamonds", points: 8, src: eightOfDiamonds },
  { name: "Nine of Diamonds", points: 9, src: nineOfDiamonds },
  { name: "Ten of Diamonds", points: 10, src: tenOfDiamonds },
  { name: "Jack of Diamonds", points: 10, src: jackOfDiamonds },
  { name: "King of Diamonds", points: 10, src: kingOfDiamonds },
  { name: "Queen of Diamonds", points: 10, src: queenOfDiamonds },
  { name: "Ace of Diamonds", points: 11, src: aceOfDiamonds },

  { name: "Two of Clubs", points: 2, src: twoOfClubs },
  { name: "Three of Clubs", points: 3, src: threeOfClubs },
  { name: "Four of Clubs", points: 4, src: fourOfClubs },
  { name: "Five of Clubs", points: 5, src: fiveOfClubs },
  { name: "Six of Clubs", points: 6, src: sixOfClubs },
  { name: "Seven of Clubs", points: 7, src: sevenOfClubs },
  { name: "Eight of Clubs", points: 8, src: eightOfClubs },
  { name: "Nine of Clubs", points: 9, src: nineOfClubs },
  { name: "Ten of Clubs", points: 10, src: tenOfClubs },
  { name: "Jack of Clubs", points: 10, src: jackOfClubs },
  { name: "King of Clubs", points: 10, src: kingOfClubs },
  { name: "Queen of Clubs", points: 10, src: queenOfClubs },
  { name: "Ace of Clubs", points: 11, src: aceOfClubs },

  { name: "Two of Spades", points: 2, src: twoOfSpades },
  { name: "Three of Spades", points: 3, src: threeOfSpades },
  { name: "Four of Spades", points: 4, src: fourOfSpades },
  { name: "Five of Spades", points: 5, src: fiveOfSpades },
  { name: "Six of Spades", points: 6, src: sixOfSpades },
  { name: "Seven of Spades", points: 7, src: sevenOfSpades },
  { name: "Eight of Spades", points: 8, src: eightOfSpades },
  { name: "Nine of Spades", points: 9, src: nineOfSpades },
  { name: "Ten of Spades", points: 10, src: tenOfSpades },
  { name: "Jack of Spades", points: 10, src: jackOfSpades },
  { name: "King of Spades", points: 10, src: kingOfSpades },
  { name: "Queen of Spades", points: 10, src: queenOfSpades },
  { name: "Ace of Spades", points: 11, src: aceOfSpades },
];

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
