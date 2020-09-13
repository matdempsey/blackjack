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

  { name: "Two of Diamonds", points: 2, src: "" },
  { name: "Three of Diamonds", points: 3, src: "" },
  { name: "Four of Diamonds", points: 4, src: "" },
  { name: "Five of Diamonds", points: 5, src: "" },
  { name: "Six of Diamonds", points: 6, src: "" },
  { name: "Seven of Diamonds", points: 7, src: "" },
  { name: "Eight of Diamonds", points: 8, src: "" },
  { name: "Nine of Diamonds", points: 9, src: "" },
  { name: "Ten of Diamonds", points: 10, src: "" },
  { name: "Jack of Diamonds", points: 10, src: "" },
  { name: "King of Diamonds", points: 10, src: "" },
  { name: "Queen of Diamonds", points: 10, src: "" },
  { name: "Ace of Diamonds", points: 11, src: "" },

  { name: "Two of Clubs", points: 2, src: "" },
  { name: "Three of Clubs", points: 3, src: "" },
  { name: "Four of Clubs", points: 4, src: "" },
  { name: "Five of Clubs", points: 5, src: "" },
  { name: "Six of Clubs", points: 6, src: "" },
  { name: "Seven of Clubs", points: 7, src: "" },
  { name: "Eight of Clubs", points: 8, src: "" },
  { name: "Nine of Clubs", points: 9, src: "" },
  { name: "Ten of Clubs", points: 10, src: "" },
  { name: "Jack of Clubs", points: 10, src: "" },
  { name: "King of Clubs", points: 10, src: "" },
  { name: "Queen of Clubs", points: 10, src: "" },
  { name: "Ace of Clubs", points: 11, src: "" },

  { name: "Two of Spades", points: 2, src: "" },
  { name: "Three of Spades", points: 3, src: "" },
  { name: "Four of Spades", points: 4, src: "" },
  { name: "Five of Spades", points: 5, src: "" },
  { name: "Six of Spades", points: 6, src: "" },
  { name: "Seven of Spades", points: 7, src: "" },
  { name: "Eight of Spades", points: 8, src: "" },
  { name: "Nine of Spades", points: 9, src: "" },
  { name: "Ten of Spades", points: 10, src: "" },
  { name: "Jack of Spades", points: 10, src: "" },
  { name: "King of Spades", points: 10, src: "" },
  { name: "Queen of Spades", points: 10, src: "" },
  { name: "Ace of Spades", points: 11, src: "" },
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
