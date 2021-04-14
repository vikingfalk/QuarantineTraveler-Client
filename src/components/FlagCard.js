import CardEl from '../styledElements/FlagCard';

const FlagCard = ({ card, checkMatch }) => (
  <CardEl onClick={card.tried ? () => {} : () => checkMatch(card)} tried={card.tried}>
    <div className="country-name">
      <p>{card.country}</p>
    </div>
    <img src={card.flagURL} />
  </CardEl>
);

export default FlagCard;
