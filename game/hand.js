

export class Hand{

  cards;

  constructor(cards = []){
    this.cards = cards;
  }

  addCard(card){
    this.cards.push();
  }

  size(){
    return this.cards.length;
  }

  cards(){
    return this.cards;
  }

  cardsInDateOrder(){
    //todo
  }

}
