import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import Board from '../components/Board';
import ButtonEl from '../styledElements/Button';
import './Game.css';

const Game = () => {
  const { getTexts, language } = useContext(LanguageContext);
  const [texts, setTexts] = useState({});
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const SOUNDS = [
    {
      name: 'match',
      file: new Audio('./assets/sound/match.wav'),
    },
    {
      name: 'fail',
      file: new Audio('./assets/sound/fail.wav'),
    },
  ];
  const history = useHistory();

  const playSound = file => {
    const audio = SOUNDS.find(sound => sound.name === file).file;
    audio.volume = 0.2;
    audio.play();
  };

  const onMatched = bool => {
    if (bool) {
      playSound('match');
      setScore(score + (6 - tries));
      setTries(0);
      return;
    }
    playSound('fail');
    setTries(tries + 1);
  };

  useEffect(() => {
    setTexts(getTexts().game);
  }, [language]);

  if (finished) {
    return (
      <div className="container container--column-center">
        <h1 className="finished-text">
          {texts.finishedTxt1} {score}{texts.finishedTxt2}
        </h1>
        <section className="buttons-wrapper">
          <ButtonEl onClick={() => history.go(0)} again>
            {texts.finishedBtnAgain}
          </ButtonEl>
          <Link to="/">
            <ButtonEl>{texts.finishedBtnHome}</ButtonEl>
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="container container--column-center">
      <Link to="/">
        <span className="btn-home">
          <span className="material-icons btn-home__icon">exit_to_app</span>
          <span className="btn-home__text">{texts.btnHome}</span>
        </span>
      </Link>
      <article className="counter">{texts.counter}: <p className="score">{score}</p>{language === 'korean' && '점'}</article>
      <Board setFinished={setFinished} onMatched={onMatched} />
    </div>
  );
};

export default Game;
