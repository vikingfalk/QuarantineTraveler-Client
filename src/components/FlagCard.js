import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import CardEl from '../styledElements/FlagCard';

const FlagCard = ({
  card, checkMatch, scoreValue, roundOver,
}) => {
  const { getCountryName } = useContext(LanguageContext);

  return (
    <CardEl
      onClick={!card.tried && !roundOver ? () => checkMatch(card) : () => {}}
      tried={card.tried}
      matched={card.matched}
      disabled={roundOver}
    >
      <div className="country-name">
        <p>{getCountryName(card.country)}</p>
        {card.matched && <h2 className="score-gained">+{scoreValue}</h2>}
      </div>
      <img src={card.flagURL} />
    </CardEl>
  );
};

export default FlagCard;
