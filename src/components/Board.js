import { useState, useEffect, useRef } from 'react';
import { mapPictureCards, mapFlagCards } from '../helpers';
import Card from './Card';
import ButtonEl from '../styledElements/Button';

const Board = ({ incrementTries, setFinished, onMatched }) => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const selectedRef = useRef(selected);
  const cardsRef = useRef(cards);
  const serverURL = process.env.NODE_ENV === 'production' ? 'https://quarantine-traveler.herokuapp.com' : 'http://localhost:8080';

  const toggleSelected = card => {
    switch (selected.length) {
      case 0:
        setSelected([card]);
        break;
      case 1:
        setSelected(selected[0].type === card.type
          ? [card]
          : [...selected, card]);
        break;
      case 2:
        setSelected(selected.map(select => (
          select.type === card.type
            ? card
            : select)));
        break;
      default:
        setSelected([]);
    }
  };

  const shuffleArray = array => array.sort(() => 0.5 - Math.random());

  const checkMatch = () => {
    if (selectedRef.current[0].country === selectedRef.current[1].country) {
      setCards(cardsRef.current.filter(card => card.country !== selectedRef.current[0].country));
      onMatched(true);
    } else {
      onMatched(false);
    }
    setSelected([]);
    incrementTries();
  };

  const spacebarCheckMatch = event => {
    if (event.code === 'Space' && selectedRef.current.length === 2) {
      checkMatch();
    }
  };

  useEffect(() => {
    cardsRef.current = cards;

    if (cards && cards.length === 0) {
      setFinished(true);
    }
  }, [cards]);

  useEffect(() => {
    selectedRef.current = selected;

    if (!cards) {
      return;
    }

    setCards(cards.map(card => (selected.some(select => select.id === card.id) ? ({
      ...card,
      selected: true,
    })
      : ({
        ...card,
        selected: false,
      })
    )));
  }, [selected]);

  useEffect(() => {
    fetch(serverURL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('Error loading cards');
          return;
        }
        const flagCards = mapFlagCards(data);
        const pictureCards = mapPictureCards(data);
        setCards([...shuffleArray(flagCards), ...shuffleArray(pictureCards)]);
        setLoading(false);
      });

    document.addEventListener('keyup', spacebarCheckMatch);
    return () => {
      document.removeEventListener('keyup', spacebarCheckMatch);
    };
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (loading) {
    return <h2>게임 로딩 중입니다...</h2>;
  }

  return (
    <>
      <section className="board">
        <section className="board__column board__column--left">
          {cards && cards.filter(card => card.type === 'flag').map(card => (
            <Card key={card.id} card={card} toggleSelected={toggleSelected} />
          ))}
        </section>
        <section className="board__column board__column--right">
          {cards && cards.filter(card => card.type === 'picture').map(card => (
            <Card key={card.id} card={card} toggleSelected={toggleSelected} />
          ))}
        </section>
      </section>
      <div className="wrapper-fixed">
        <ButtonEl
          onClick={selected.length === 2 ? checkMatch : () => {}}
          disabled={selected.length < 2}
          main
        >
          연결하기
        </ButtonEl>
      </div>
    </>
  );
};

export default Board;
