import CardEl from '../styledElements/PictureCard';

const PictureCard = ({ card }) => (
  <CardEl>
    <img src={card.pictureURL} />
  </CardEl>
);

export default PictureCard;
