import {Hand} from './hand.js';

export class Player{
  name;
  hand;
  id;

  constructor(name, id){
    this.name = name;
    this.id = id;
    this.hand = new Hand();
  }

  getName(){
    return this.name;
  }

  getHand(){
    return this.hand;
  }
}
