//takes player name and card array prop to display players cards
import CardView from './CardView.js';
import {Card} from '../game/card.js';

export default function HandView({player}){
  const cardsInHand = player.getHand().cards.map(card =>
    <li key={card.id}><CardView card={card}/></li>
  );
  return(
    <div>
     <h1> {player.getName()} 's Hand</h1>
     <ul style={display: inline}>
       <li>
         <CardView card={new Card(Number.MIN_SAFE_INTEGER, "Before")}/>
       </li>
       {cardsInHand}
       <li>
         <CardView card={new Card(Number.MAX_SAFE_INTEGER, "After")}/>
       </li>
     </ul>
    </div>
  )
}
