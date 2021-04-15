import CardEl from '../styledElements/PictureCard';

const PictureCard = ({ card, buffer }) => (
  <CardEl buffer={buffer}>
    {process.env.NODE_ENV === 'development' && <p className="cheat-text">{card.country}</p>}
    <img src={card.pictureURL} />
  </CardEl>
);

export default PictureCard;
