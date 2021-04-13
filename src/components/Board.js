import { useState, useEffect } from 'react';
import { mapFlagCards, mapPictureCards, shuffleArray } from '../helpers';
import FlagCard from './FlagCard';
import PictureCard from './PictureCard';

const Board = ({ incrementTries, setFinished, onMatched }) => {
  const [flagCards, setFlagCards] = useState(null);
  const [pictureCards, setPictureCards] = useState(null);
  const [currentPicture, setCurrentPicture] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const serverURL = process.env.NODE_ENV === 'production' ? 'https://quarantine-traveler.herokuapp.com' : 'http://localhost:8080';

  const checkMatch = flag => {
    if (flag.country === currentPicture.country) {
      setPictureCards(pictureCards.filter((card, index) => index !== 0));
      onMatched(true);
    } else {
      onMatched(false);
    }
    incrementTries();
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
  }, [pictureCards]);

  useEffect(() => {
    fetch(serverURL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Error loading game');
          return;
        }
        console.log(data);
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
        <PictureCard card={currentPicture} />
        <p>{currentPicture.country}</p>
      </section>
      <section className="board__column board__column--flags">
        {flagCards && flagCards[flagCards.length - pictureCards.length].map(card => (
          <FlagCard
            key={card.id}
            card={card}
            checkMatch={checkMatch}
          />
        ))}
      </section>
    </section>
  );
};

export default Board;
