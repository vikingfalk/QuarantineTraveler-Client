import CardEl from '../styledElements/FlagCard';

const FlagCard = ({
  card, checkMatch, scoreValue, roundOver,
}) => (
  <CardEl
    onClick={!card.tried && !card.disabled ? () => checkMatch(card) : () => {}}
    tried={card.tried}
    matched={card.matched}
    disabled={roundOver}
  >
    <div className="country-name">
      <p>{card.country}</p>
      {card.matched && <h2 className="score-gained">+{scoreValue}</h2>}
    </div>
    <img src={card.flagURL} />
  </CardEl>
);

export default FlagCard;
