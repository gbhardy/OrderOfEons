export class Card{
  date;
  clueText;
  constructor(date, clueText){
    this.date = date;
    this.clueText = clueText;
  }

  getYear(){
    return this.date;
  }

  getClue(){
    return this.clueText;
  }
}
