import { useState, useEffect } from 'react';
import { mapFlagCards, mapPictureCards, shuffleArray } from '../helpers';
import FlagCard from './FlagCard';
import PictureCard from './PictureCard';

const Board = ({ setFinished, onMatched }) => {
  const [flagCards, setFlagCards] = useState(null);
  const [pictureCards, setPictureCards] = useState(null);
  const [currentPicture, setCurrentPicture] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [roundOver, setRoundOver] = useState(false);
  const serverURL = process.env.NODE_ENV === 'production' ? 'https://quarantine-traveler.herokuapp.com' : 'http://localhost:8080';

  const checkMatch = flag => {
    if (flag.country === currentPicture.country) {
      setRoundOver(true);
      const temp = flagCards;
      temp[flagCards.length - pictureCards.length] = temp[flagCards.length - pictureCards.length]
        .map(flagCard => (flagCard.id === flag.id ? { ...flagCard, matched: true } : flagCard));
      setFlagCards(temp);
      setTimeout(() => setPictureCards(pictureCards.filter((card, index) => index !== 0)), 2000);
      onMatched(true);
    } else {
      onMatched(false);
      const temp = flagCards;
      temp[flagCards.length - pictureCards.length] = temp[flagCards.length - pictureCards.length]
        .map(flagCard => (flagCard.id === flag.id ? { ...flagCard, tried: true } : flagCard));
      setFlagCards(temp);
    }
  };

  useEffect(() => {
    if (!pictureCards) {
      return;
    }

    if (pictureCards.length === 0) {
      setFinished(true);
      return;
    }

    setCurrentPicture(pictureCards[0]);
    setRoundOver(false);
  }, [pictureCards]);

  useEffect(() => {
    fetch(serverURL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Error loading game');
          return;
        }
        const flags = data.flags.map(flagGroup => mapFlagCards([...shuffleArray(flagGroup)]));
        const pictures = mapPictureCards(data.pictures);
        setFlagCards(flags);
        setPictureCards(pictures);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>게임 로딩 중...</h2>;
  }

  if (pictureCards.length === 0) {
    return null;
  }

  return (
    <section className="board">
      <section className="board__column board__column--picture">
        {pictureCards.length > 1 && <PictureCard card={pictureCards[1]} buffer/>}
        <PictureCard card={currentPicture} />
      </section>
      <section className="board__column board__column--flags">
        {flagCards && flagCards[flagCards.length - pictureCards.length].map(card => (
          <FlagCard
            key={card.id}
            card={card}
            checkMatch={checkMatch}
            scoreValue={
              flagCards[flagCards.length - pictureCards.length]
                .filter(flag => !flag.tried).length
            }
            roundOver={roundOver}
          />
        ))}
      </section>
    </section>
  );
};

export default Board;
