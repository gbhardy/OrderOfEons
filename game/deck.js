export class Deck{
  constructor(cardSource){
    this.cards = cardSource;//todo
  }

  size(){
    return this.cards.length;
  }

  top(){
    return this.cards.pop();
  }
}
