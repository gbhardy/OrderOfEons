import {Deck} from './deck.js'
import {Card} from './card.js';

export class Game {

  players = new Array();
  deck;

  cardsToWin = 10;

  readerPlayerId = 0
  guesserPlayerId = 1;

  cardInPlay;

  constructor(players, cardsToWin){
    this.players = players;
    this.cardsToWin = cardsToWin;

    function defaultDeckCardSource(){
      //todo
      const cards = new Array();
      for(let i = 0; i < 100; ++i){
        cards.push(new Card(i, i.toString()));
      }
      return cards;
    }

    this.deck = new Deck(defaultDeckCardSource());
    players.forEach((p) => {
      p.getHand().addCard(this.deck.top());
    })
  };


  startGame(){
    //todo more
    this.cardInPlay = this.deck.top();
  }

  getCardInPlay(){
    return this.cardInPlay;
  }

  numPlayers(){
    return this.players.lenth;
  }

  getPlayers(){
    return this.players;
  }

  guessingPlayer(){
    return this.players[guesserPlayerId];
  }

  readingpPlayer(){
    return this.players[readerPlayerId];
  }

  checkGuess(cardLower = null, cardHigh = null){
      let lowYear = Number.MIN_SAFE_INTEGER;
      let highYear = Number.MAX_SAFE_INTEGER;

      if(cardLower !== null){
        lowYear = cardLower.getYear();
      }
      if(cardHigh !== null){
        highYear = cardHigh.getYear();
      }

      if(lowYear <= this.cardInPlay.getYear()
          && highYear >= this.cardInPlay.getYear()){
        return true;
      }
      return false;
  }

  nextGuessingPlayer(){
    if((this.guesserPlayerId + 1) % this.players.length === this.readerPlayerId){
      return null;
    }
    this.guesserPlayerId += 1;
    return guessingPlayer();
  }

  nextReadingPlayer(){
    this.readerPlayerId += 1;
    this.guesserPlayerId = this.readerPlayerId + 1;
    return readingpPlayer();
  }

}
