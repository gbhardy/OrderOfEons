//displays a card with text and year
export default function CardView({card, showYear}){
  return(
    <div>
      <h1>{card.getClue()}</h1>
      {(showYear && <h3>{card.getYear()}</h3>)}
    </div>
  );
}
