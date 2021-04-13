import CardEl from '../styledElements/FlagCard';

const FlagCard = ({ card, checkMatch }) => (
  <CardEl onClick={() => checkMatch(card)}>
    <img src={card.flagURL} />
  </CardEl>
);

export default FlagCard;
