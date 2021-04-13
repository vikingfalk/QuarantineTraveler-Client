import CardEl from '../styledElements/PictureCard';

const PictureCard = ({ card }) => (
  <CardEl>
    {process.env.NODE_ENV === 'development' && <p className="cheat-text">{card.country}</p>}
    <img src={card.pictureURL} />
  </CardEl>
);

export default PictureCard;
