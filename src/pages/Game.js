import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Board from '../components/Board';
import ButtonEl from '../styledElements/Button';
import './Game.css';

const Game = () => {
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

  if (finished) {
    return (
      <div className="container container--column-center">
        <h1 className="finished-text">잘 하셨습니다! 점수가 {score}점으로 게임을 성공하셨습니다!</h1>
        <section className="buttons-wrapper">
          <ButtonEl onClick={() => history.go(0)} again>게임 또 하기</ButtonEl>
          <Link to="/">
            <ButtonEl>홈 페이지</ButtonEl>
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
          <span className="btn-home__text">돌아가기</span>
        </span>
      </Link>
      <article className="counter">점수: <p className="score">{score}</p>점</article>
      <Board setFinished={setFinished} onMatched={onMatched} />
    </div>
  );
};

export default Game;
